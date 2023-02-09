pipeline {

  environment {
    dockerimagename = "imaduddinqurrataayun/restapi"
    dockerImage = ""
  }

  agent any

  stages {

//     stage('Checkout Source') {
//       steps {
//         git 'https://github.com/imaduddinqurrataayun/restapi-nodejs.git'
//       }
//     }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhub-imad'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("1.0")
          }
        }
      }
    }

  }

}
