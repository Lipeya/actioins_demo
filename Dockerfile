#!/bin/bash
FROM ubuntu
ENV DEBIAN_FRONTEND noninteractive 
ENV DEBCONF_NONINTERACTIVE_SEEN true
RUN apt-get update
RUN apt-get -y install npm
ADD . /
ENTRYPOINT npm start