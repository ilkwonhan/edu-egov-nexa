pipeline {
    agent any

    environment {
        // docker-compose 서비스 이름 또는 WSL IP
        REMOTE_SERVER = "linux-server"
        REMOTE_USER   = "deploy"
        DEPLOY_DIR    = "/home/deploy/app"
        CONTAINER     = "linux-server"
        TOMCAT_HOME   = "/opt/tomcat"
        SSH_OPTS      = "-o StrictHostKeyChecking=no"
    }

    stages {

        stage('Checkout') {
            steps {
                echo "📥 Git Checkout"
                git branch: 'main',
                    credentialsId: 'git',
                    url: 'https://github.com/ilkwonhan/edu-egov-nexa.git'
            }
        }

        stage('Build') {
            steps {
                echo "🛠️ Maven Build"
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Deploy') {
		    steps {
		        sshagent(['deploy']) {
		            sh """
		                echo "🚀 서버 배포 시작"
		
		                # 1️⃣ 배포 디렉토리 생성
		                ssh ${SSH_OPTS} ${REMOTE_USER}@${REMOTE_SERVER} "mkdir -p ${DEPLOY_DIR}"
		
		                # 2️⃣ WAR 파일 선택
		                WAR_FILE=\$(ls target/*.war | head -n 1)
		
		                # 3️⃣ WAR 파일 전송
		                scp ${SSH_OPTS} \$WAR_FILE ${REMOTE_USER}@${REMOTE_SERVER}:${DEPLOY_DIR}/app.war
		
		                # 4️⃣ Tomcat 웹앱 교체
		                ssh ${SSH_OPTS} ${REMOTE_USER}@${REMOTE_SERVER} "
		                    rm -rf /opt/tomcat/webapps/edu-egov* && \
		                    cp ${DEPLOY_DIR}/app.war /opt/tomcat/webapps/edu-egov.war && \
		                    /opt/tomcat/bin/shutdown.sh || true; \
		                    /opt/tomcat/bin/startup.sh
		                "
		
		                echo "✅ 배포 완료"
		            """
		        }
		    }
		}

    }

    post {
        always {
            echo "🔔 Pipeline 종료"
        }
        success {
            echo "🎉 배포 성공"
        }
        failure {
            echo "❌ 배포 실패"
        }
    }
}
