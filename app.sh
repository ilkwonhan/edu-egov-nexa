#!/bin/bash

APP_HOME="/app"
JAR_NAME="edu-egov-nexa.jar"
PROFILE="prod"
LOG_DIR="$APP_HOME/logs"

echo "==============================="
echo "🚀 배포 스크립트 시작"
echo "시간: $(date)"
echo "==============================="

cd $APP_HOME || exit 1
mkdir -p $LOG_DIR

# 기존 프로세스 종료
PID=$(pgrep -f $JAR_NAME)
if [ -n "$PID" ]; then
  echo "🛑 기존 프로세스 종료 (PID: $PID)"
  kill -15 $PID
  sleep 5
else
  echo "✅ 실행 중인 프로세스 없음"
fi

# JAR 존재 확인
if [ ! -f "$APP_HOME/$JAR_NAME" ]; then
  echo "❌ JAR 파일이 존재하지 않습니다"
  exit 1
fi

# 실행
echo "▶ 애플리케이션 실행"
nohup java -jar $APP_HOME/$JAR_NAME \
  --spring.profiles.active=$PROFILE \
  > $LOG_DIR/app.log 2>&1 &

echo "✅ 배포 완료 (PID: $!)"
