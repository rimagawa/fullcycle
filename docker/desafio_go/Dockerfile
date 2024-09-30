FROM golang:1.23 AS builder

WORKDIR /app

COPY ./main.go .

RUN go build main.go 

FROM scratch
WORKDIR /app
COPY --from=builder /app/main .
CMD [ "./main" ]