pipeline {
	agent any
	 
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
		 sh 'docker build . --tag 19880402/client'
		 sh 'docker images --all '
			}
}
	}

		stage('Build server Images') {
	steps {
		dir('server') {
		 sh 'docker build . --tag 19880402/server'
		 sh 'docker images --all '
			}
}
	}
		     

		
		stage('Push Docker Image'){
steps{
script{
withCredentials([string(credentialsId: '19880402', variable: 'Rr2024#mn98**')]) {
sh ‘docker login -u 19880402 -p ${Rr2024#mn98**}’
sh ‘docker push 19880402/javapp’
}
}
}
		}
	}
}
