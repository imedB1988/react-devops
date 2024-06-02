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
			sh 'npm install'
			sh 'npm run build'
		}
	}
}
		stage('Server Tests') {
	steps {
		dir('server') {
			sh 'npm install'
			sh 'npm install nodemon'
		}
	}
}
		stage('install and build docker') {
	steps {
		dir('server') {
			sh 'apt install docker.io -y'
			sh 'apt install docker-compose'
		}
	}
}

	}
}
