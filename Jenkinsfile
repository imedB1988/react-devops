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
			sh 'npm start'
		}
	}
}
		stage('Server Tests') {
	steps {
		dir('server') {
			sh 'npm install'
			sh 'npm install nodemon'
			sh 'npm run dev'
		}
	}
}

	}
}
