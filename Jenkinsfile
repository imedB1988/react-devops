pipeline {
	agent any
	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhubjenkins')
		PATH = "$PATH:/usr/bin/docker-compose"
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
		 sh 'docker build . --tag 19880402/client'
		 sh 'docker images --all '
			}
}
	}

		stage('Build server Images') {
	steps {
		dir('server') {
		 sh 'docker build . --tag 19880402/server'
		 sh 'docker ps --all '
			}
}
	}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push 19880402/client:latest'
				sh 'docker push 19880402/server:latest'
			}
		}
		stage('docker compose') {

			steps {
				sh 'docker-compose up --remove-orphans -d'
			}
		}

		     

		
		
	}
}
