#!/bin/bash

# ===============================
# 환경 설정
# ===============================
APP_HOME="/app"
JAR_NAME="edu-egov-nexa.jar"
PROFILE="prod"
LOG_DIR="$APP_HOME/logs"

echo "==============================="
echo "🚀 배포 스크립트 시작"
echo "시간: $(date)"
echo "==============================="

cd $APP_HOME || exit 1

# ===============================
# 로그 디렉터리 생성
# ===============================
mkdir -p $LOG_DIR

# ===============================
# 기존 프로세스 종료
# ===============================
PID=$(pgrep -f $JAR_NAME)

if [ -n "$PID" ]; then
  echo "🛑 기존 프로세스 종료 (PID: $PID)"
  kill -15 $PID
  sleep 5
else
  echo "✅ 실행 중인 프로세스 없음"
fi

# ===============================
# 빌드 (선택)
# Jenkins에서 이미 빌드했다면 주석 처리 가능
# ===============================
echo "🔨 Maven build 시작"
mvn clean package -DskipTests

# ===============================
# JAR 파일 확인
# ===============================
if [ ! -f target/*.jar ]; then
  echo "❌ JAR 파일이 존재하지 않습니다"
  exit 1
fi

# 가장 최신 jar 선택
JAR_PATH=$(ls -t target/*.jar | head -n 1)
cp $JAR_PATH $APP_HOME/$JAR_NAME

# ===============================
# 애플리케이션 실행
# ===============================
echo "▶ 애플리케이션 실행"
nohup java -jar $APP_HOME/$JAR_NAME \
  --spring.profiles.active=$PROFILE \
  > $LOG_DIR/app.log 2>&1 &

echo "✅ 배포 완료"
echo "PID: $!"
