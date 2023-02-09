pipeline{
    agent{
        kubernetes{
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                containers:
                - name: docker
                  image: docker:latest
                  command:
                  - cat
                  tty: true
                '''
        }
    }
    stages{
        stage('Build Image'){
            steps{
                container('docker') {
                    sh """
                        docker build -t imaduddinqurrataayun/restapi:1.0 .
                    """
                }
            }
        }
    }
}
