# https://www.docker.elastic.co/
FROM docker.elastic.co/elasticsearch/elasticsearch:7.9.1

ADD config/elasticsearch.yml /usr/share/elasticsearch/config/
RUN chmod 664 /usr/share/elasticsearch/config/elasticsearch.yml
# Add your elasticsearch plugins setup here
# Example: RUN elasticsearch-plugin install analysis-icu
RUN bin/elasticsearch-plugin install --batch repository-s3