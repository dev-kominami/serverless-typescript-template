# Serverless Lambda Typescript Template

## serverlessデプロイ環境
Lambdaデプロイはserverlessを使い行います
<https://www.serverless.com/>

### 環境変数
ルートディレクトリに`.env`ファイルを作成し、以下の環境変数を定義してください。

```
AWS_ACCESS_KEY_ID={serverless deploy access key}
AWS_SECRET_ACCESS_KEY={serverless deploy secret key}
AWS_DEFAULT_REGION={region}

```

serverless環境はdocker内に構築しています。   
appsディレクトリ内にソースを作成し、docker内からデプロイしてください。

### dockerからのデプロイ手順

```
# docker立ち上げ
docker-compose up

# docker内に入る
docker-compose exec typescript-lambda sh

# ソースパスに移動
cd /app/{your}/{path}

# デプロイコマンド
sls deploy
```