FROM semtech/mu-javascript-template:1.3.5
LABEL maintainer=tarhineh@hmail.com

ENV FILE_PATH '/data/files'
#ENV FILE_GRAPH 'http://mu.semte.ch/graphs/public'
RUN mkdir -p /data/files/