#!/bin/bash
set -e

# ----------------------------
# 환경 설정
# ----------------------------
TOMCAT_HOME=/opt/tomcat
APP_WAR=/app/app.war
DEPLOY_NAME=app

# ----------------------------
# WAR 배포
# ----------------------------
if [ -f "$APP_WAR" ]; then
    echo "🚀 WAR 파일 배포: $APP_WAR -> $TOMCAT_HOME/webapps/$DEPLOY_NAME.war"
    cp "$APP_WAR" "$TOMCAT_HOME/webapps/$DEPLOY_NAME.war"
else
    echo "❌ WAR 파일이 존재하지 않습니다: $APP_WAR"
    exit 1
fi

# ----------------------------
# Tomcat 재시작
# ----------------------------
echo "🔄 Tomcat 재시작"
$TOMCAT_HOME/bin/shutdown.sh || true
sleep 3
$TOMCAT_HOME/bin/startup.sh

echo "✅ 배포 완료"
