pipeline {
    agent any
    environment {
      //
    }
    stages {
      stage('Checkout') {
        steps {
          //checkout scm
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
              "docker-compose -f docker-compose.yml up"
            } catch(error){
              echo "The server could not be reached ${error}"
            }
        }
      }
    }
}
