# ベースとなるDockerイメージ指定
FROM golang:latest

# コンテナ内に作業ディレクトリを作成
RUN mkdir -p /go/src/work

# コンテナログイン時のディレクトリ指定
WORKDIR /go/src/work

# ホストのファイルをコンテナの作業ディレクトリに移行
ADD . /go/src/work

RUN go get -u -v github.com/gin-gonic/gin || true
RUN go get -u -v github.com/gorilla/mux || true
RUN go get -u -v github.com/jinzhu/gorm || true
RUN go get -u -v github.com/go-sql-driver/mysql || true
RUN go get -u -v github.com/oxequa/realize || true

ENV GO111MODULE=on