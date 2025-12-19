#!/bin/bash
set -e

# SSH 데몬 실행 (root)
service ssh start

# Tomcat은 deploy 유저로 실행
su - deploy -c "$CATALINA_HOME/bin/catalina.sh run"
