pipeline {
	agent any

	stages {
		stage('Checkout') {
			steps {
				checkout "https://github.com/imedB1988/react-devops.git"
			}
		}
    stage('Client Tests') {
	steps {
		dir('client') {
			sh 'npm install'
			sh 'npm test'
		}
	}
}

	}
}
