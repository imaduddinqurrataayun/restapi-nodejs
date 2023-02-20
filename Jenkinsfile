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
                        docker login -u imaduddinqurrataayun -pdckr_pat_WwN642aKzNArYQRnT1hLi5yi2tw
                        docker build -t imaduddinqurrataayun/restapi:latest .
                        docker push imaduddinqurrataayun/restapi:latest
                    """
                }
            }
        }
    }
}
