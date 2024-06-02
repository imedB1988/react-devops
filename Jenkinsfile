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
		stage('Build client Images') {
	steps {
		dir('client') {
		sh 'docker build -t 19880402/productivity-app:client-latest client'
		
	}
}


	}
		stage('Build server Images') {
	steps {
		dir('client') {
		sh 'docker build -t 19880402/productivity-app:server-latest server'
		
	}
}


	}
		
		
}
