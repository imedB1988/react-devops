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
        sh 'sudo apt install npm'
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
