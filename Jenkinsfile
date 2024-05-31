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
        cd 'react-devops/client/src'
        sh 'npm install'
        }
      }
    
    stage ("build"){
      steps{
        sh 'npm run build'
        }
    }
  }
}
