pipeline{
    agent{
        kubernetes{
            yaml '''
                apiVersion: v1
                kind: Pod
                spec:
                    containers:
                    - name: docker
                      image: docker:dind
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
                        pwd
                        docker login -u imaduddinqurrataayun -pdckr_pat_WwN642aKzNArYQRnT1hLi5yi2tw
                        ls
                        docker build -t imaduddinqurrataayun/restapi:latest .
                        docker push imaduddinqurrataayun/restapi:latest
                    """
                }
            }
        }
    }
}
