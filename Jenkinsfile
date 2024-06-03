pipeline {
	agent any
	environment {     
    DOCKERHUB_CREDENTIALS= credentials('dockerhubjenkins')     
  }   
	stages {
		stage('Checkout') {
			steps {
 			checkout scm
			}
		}
    stage('Client Tests') {
	steps {
		dir('client') {
			sh 'npm run build'
		}
	}
}
		stage('Server Tests') {
	steps {
		dir('server') {
			sh 'npm install nodemon'
		}
	}
}
		stage('Build client Images') {
	steps {
		dir('client') {
		 sh 'docker build . --tag client'
		 sh 'docker images --all '
			}
}
	}

		stage('Build server Images') {
	steps {
		dir('server') {
		 sh 'docker build . --tag server'
		 sh 'docker images --all '
			}
}
	}
		 stage('Login to Docker Hub') {         
      steps{                            
	sh 'echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'                 
	echo 'Login Completed'                
      }           
    }     

		
		stage('Push Image to Docker Hub') {         
    steps{ 
	    dir('client') {
 sh 'sudo docker push client:latest'           
echo 'Push client Image Completed'       
    }     
	        dir('server') {
 sh 'sudo docker push server:latest'           
echo 'Push server Image Completed'       
    }
}  
		}
			
	}
}
