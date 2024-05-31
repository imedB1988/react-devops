pipeline{
  agent any
  stages{
    stage("checkout git"){
      steps{
        checkout scm
      }
    }
    stage("test"){
      steps{
        sh 'cd client/src'
        sh 'sudo npm install'
        sh 'npm test'
      }
    }
    stage ("build"){
      steps{
        sh 'cd client/src'
        sh 'npm run build'
      }
    }
  }
}
