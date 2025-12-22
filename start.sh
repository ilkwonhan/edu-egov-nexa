#!/bin/bash
set -e

# Tomcat 로그 권한 설정
mkdir -p $CATALINA_HOME/logs
chown -R deploy:deploy $CATALINA_HOME/logs

# SSH 데몬 실행
/usr/sbin/sshd

# Tomcat은 deploy 유저로 포그라운드 실행
su - deploy -c "$CATALINA_HOME/bin/catalina.sh run"
