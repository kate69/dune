FROM golang:latest

COPY src/api /go/src/api

WORKDIR /go/src/api/

RUN go get -u github.com/gin-gonic/gin
RUN go get -u github.com/jinzhu/gorm
RUN go get -u github.com/go-sql-driver/mysql

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y mariadb-client

EXPOSE 9000
CMD ["sh", "./start_app.sh"]