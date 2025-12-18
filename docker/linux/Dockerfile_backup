FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul

RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    curl \
    git \
    vim \
    net-tools \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /var/run/sshd

RUN useradd -m -s /bin/bash deploy && \
    echo "deploy:deploy" | chpasswd && \
    usermod -aG sudo deploy

RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

EXPOSE 22
CMD ["/usr/sbin/sshd", "-D"]
