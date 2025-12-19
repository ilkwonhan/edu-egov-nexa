#!/bin/bash

# =============================
# 환경 설정
# =============================
TOMCAT_VERSION=9.0.82
TOMCAT_DIR=/opt/tomcat
APP_NAME=edu-egov
WAR_FILE=target/edu-egov-1.0.0.war
DEPLOY_USER=deploy

# =============================
# 1️⃣ 필수 패키지 설치
# =============================
echo "🔧 필수 패키지 설치"
sudo apt update
sudo apt install -y openjdk-11-jdk maven wget tar

# =============================
# 2️⃣ Tomcat 설치
# =============================
if [ ! -d "$TOMCAT_DIR" ]; then
    echo "📦 Tomcat 설치"
    wget https://dlcdn.apache.org/tomcat/tomcat-9/v$TOMCAT_VERSION/bin/apache-tomcat-$TOMCAT_VERSION.tar.gz -O /tmp/tomcat.tar.gz
    sudo mkdir -p $TOMCAT_DIR
    sudo tar xzf /tmp/tomcat.tar.gz --strip-components=1 -C $TOMCAT_DIR
    sudo chown -R $DEPLOY_USER:$DEPLOY_USER $TOMCAT_DIR
    sudo chmod +x $TOMCAT_DIR/bin/*.sh
else
    echo "✅ Tomcat 이미 설치됨"
fi

# =============================
# 3️⃣ Maven 빌드
# =============================
echo "🔨 Maven build 시작"
if mvn clean package -DskipTests; then
    echo "✅ Maven 빌드 성공"
else
    echo "❌ Maven 빌드 실패"
    exit 1
fi

# =============================
# 4️⃣ WAR 파일 배포
# =============================
if [ -f "$WAR_FILE" ]; then
    echo "🚀 WAR 파일 배포 시작"
    cp $WAR_FILE $TOMCAT_DIR/webapps/app.war
else
    echo "❌ JAR/WAR 파일이 존재하지 않습니다"
    exit 1
fi

# =============================
# 5️⃣ Tomcat 재시작
# =============================
echo "🔄 Tomcat 재시작"
$TOMCAT_DIR/bin/shutdown.sh
sleep 5
$TOMCAT_DIR/bin/startup.sh

echo "✅ 배포 완료"
