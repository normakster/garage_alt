pipeline {
    agent any
    environment {
      CI = 'true'
    }
    stages {
      stage('Checkout') {
        steps {
<<<<<<< HEAD
          //checkout scm
=======
          git branch: 'dev', url: 'https://github.com/normakster/garage_alt.git'
>>>>>>> dev_km
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
<<<<<<< HEAD
              "docker-compose -f docker-compose.yml up"
=======
              sh "docker-compose -f docker-compose.yml up"
>>>>>>> dev_km
            } catch(error){
              echo "The server could not be reached ${error}"
            }
        }
      }
    }
}
