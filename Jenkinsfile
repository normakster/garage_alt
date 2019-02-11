pipeline {
    agent any
    environment {
      CI = 'true'
    }
    stages {
      stage('Checkout') {
        steps {
          git branch: 'dev', url: 'https://github.com/normakster/garage_alt.git'
        }
      }
      stage('Build') {
        steps {
            echo 'Building..'
            sh 'docker-compose -f docker-compose.yml build --force-rm'
        }
      }
      stage('Test') {
        steps {
            echo 'Testing..'
        }
      }
      stage('Deploy') {
        steps {
            echo 'Deploying....'
            try {
              sh "docker-compose -f docker-compose.yml up"
            } catch(error){
              echo "The server could not be reached ${error}"
            }
        }
      }
    }
}
