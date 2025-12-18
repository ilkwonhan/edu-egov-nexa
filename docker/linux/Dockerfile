FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

# 기본 패키지 + Java 17
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    openssh-server \
    sudo \
    curl \
    git \
    vim \
    net-tools \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# Java 환경변수
ENV JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
ENV PATH=$JAVA_HOME/bin:$PATH

# SSHD 준비
RUN mkdir /var/run/sshd

# deploy 사용자 생성
RUN useradd -m -s /bin/bash deploy && \
    echo "deploy:deploy" | chpasswd && \
    usermod -aG sudo deploy

# SSH 키 인증 디렉토리/파일 생성 + 권한 설정
RUN mkdir -p /home/deploy/.ssh && \
    touch /home/deploy/.ssh/authorized_keys && \
    chown -R deploy:deploy /home/deploy/.ssh && \
    chmod 700 /home/deploy/.ssh && \
    chmod 600 /home/deploy/.ssh/authorized_keys

# SSH 설정 (키 인증 사용, 필요 시 비밀번호 비활성)
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config && \
    sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
