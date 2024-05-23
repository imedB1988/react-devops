import { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios'
import Formtable from './components/Formtable';

axios.defaults.baseURL = "http://localhost:8081"


function App() {
  const[addSection, setAddSection]=useState(false)
  const [editSection, setEditSection]=useState( )

  const [formData, setFormData]=useState({
    name:"",
    email:"",
    phone:""
  })


  const [formDataEdit, setFormDataEdit]=useState({
    name:"",
    email:"",
    phone:"",
    _id:""
  })




  const [dataList, setDataList] = useState([])

  const handleOnChange=(e)=>{
    const {value, name}=e.target
    setFormData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const handleEditOnChange=(e)=>{
    const {value, name}=e.target
    setFormDataEdit((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const data = await axios.post("/create", formData)
    console.log(data)
    if(data.data.success){
        setAddSection(false)
        alert(data.data.message)
        getFetchData()
    }
  }

  const getFetchData = async()=>{
    const data = await axios.get("/")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
    }
  }

  useEffect(()=>{
    getFetchData()
  }, [])

  console.log(dataList)


  const handleDelete = async(id)=>{
    await axios.delete("/delete/"+id)
    alert("deleted")
    getFetchData()

    
  }

  const handleUpdate=async(e)=>{
    e.preventDefault()
    await axios.put("/update", formDataEdit)
    getFetchData() 
    setEditSection(false)


  }
  const handleEdit=(el)=>{
    setFormDataEdit(el)
    setEditSection(true)
  }

  return (
    <>
      <div className="container">
        <button className="btn btn-add" onClick={()=>setAddSection(true)}>ADD</button>
        {
          addSection && (
           <Formtable
           handleSubmit={handleSubmit}
           handleclose={()=>setAddSection(false)}
           handleOnChange={handleOnChange}
           rest={formData}
           />
          )
        }

        {
           editSection && (
            <Formtable
            handleSubmit={handleUpdate}
            handleclose={()=>setEditSection(false)}
            handleOnChange={handleEditOnChange}
            rest={formDataEdit}
            />
           )
        }


        <div className='tableContainer'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>phone</th>
                <th></th><th></th>
              </tr>
            </thead>
            <tbody>
            {
              dataList[0]?(
              dataList.map((el)=>{
                console.log(el)
                return(
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
                    <td><button className='btn btn-edit' onClick={()=>handleEdit(el)}> Edit</button></td>
                    <td><button className='btn btn-delete' onClick={()=>handleDelete(el._id)}>Delete</button></td>
                    
                  </tr>
                )
            })):(
            <p style={{textAlign:"center"}}>No data</p>
          )
        } 
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  );
}

export default App;
