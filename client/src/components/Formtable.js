import{MdClose} from 'react-icons/md'
import React from 'react'
import "../App.css"
const Formtable=({handleSubmit, handleOnChange, handleclose, rest })=>{
    return(
      <div className="addContainer">
<form onSubmit={handleSubmit}>
 <div className="close-btn" onClick={handleclose}><MdClose/></div>
   <label htmlFor="name">Name : </label>
   <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name}/>
   <label htmlFor="email">email : </label>
   <input type="text" id="email" name="email" onChange={handleOnChange} value={rest.email}/>
   <label htmlFor="name">phone : </label>
   <input type="number" id="phone" name="phone" onChange={handleOnChange} value={rest.phone }/>
   <button className="btn">Submit</button>
 </form>
</div>
    )
}

export default Formtable;
