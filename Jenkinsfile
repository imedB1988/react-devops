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

		stage('docker ps --all') {
	steps {
		dir('server') {
		 sh 'docker ps --all'
		 
			}
}
	}
			
	}
}
