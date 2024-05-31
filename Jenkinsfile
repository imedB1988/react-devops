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
        sh 'cd ./client/src'
        nodejs('nodejs 22.2.0'){
        sh 'npm install'
        }
      }
    }
    stage ("build"){
      steps{
        sh 'cd ./client/src'
         nodejs('nodejs 22.2.0'){
        sh 'npm run build'
         }
      }
    }
  }
}
