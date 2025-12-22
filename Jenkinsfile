pipeline {
    agent any

    environment {
        REMOTE_SERVER = "linux-server" // 서버 주소 또는 IP
        REMOTE_USER = "deploy"
        DEPLOY_DIR = "/home/deploy/app" // deploy 계정 권한이 확실한 경로 권장
        TOMCAT_HOME = "/opt/tomcat"
        SSH_OPTS = "-o StrictHostKeyChecking=no"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'git',
                    url: 'https://github.com/ilkwonhan/edu-egov-nexa.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Deploy') { // stage 이름을 git에서 Deploy로 변경하는 것이 직관적입니다.
            steps {
                sshagent(['deploy']) {
                    sh """
                        echo "🚀 서버 배포 시작"

                        # 원격 서버 임시 디렉터리 준비
                        ssh ${SSH_OPTS} ${REMOTE_USER}@${REMOTE_SERVER} "mkdir -p ${DEPLOY_DIR}"

                        # WAR 파일 찾기 (여러 개일 경우 대비)
                        WAR_PATH=\$(ls target/*.war | head -n 1)

                        # 파일 전송
                        scp ${SSH_OPTS} \$WAR_PATH ${REMOTE_USER}@${REMOTE_SERVER}:${DEPLOY_DIR}/app.war

                        # Tomcat 배포 (sudo 명령어가 필요하므로 Dockerfile의 NOPASSWD 설정이 중요)
                        ssh ${SSH_OPTS} ${REMOTE_USER}@${REMOTE_SERVER} "
                            sudo rm -rf ${TOMCAT_HOME}/webapps/edu-egov* && \
                            sudo cp ${DEPLOY_DIR}/app.war ${TOMCAT_HOME}/webapps/edu-egov.war && \
                            sudo ${TOMCAT_HOME}/bin/shutdown.sh || true && \
                            sudo ${TOMCAT_HOME}/bin/startup.sh
                        "

                        echo "✅ 배포 완료"
                    """
                }
            }
        }
    }
}