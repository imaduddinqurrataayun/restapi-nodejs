pipeline{
    agent{
        k3s-master
    }

    stages{
        stage('Checkout SCM') {
            git url: 'https://github.com/imaduddinqurrataayun/restapi-nodejs.git', branch: 'jenkins'
        }

        stage('Build image'){
            steps{
                node {
                    checkout scm
                    def customImage = docker.build("imaduddinqurrataayun/restapi:1.0")
                    customImage.push()
                }
            }
        }
    }
}