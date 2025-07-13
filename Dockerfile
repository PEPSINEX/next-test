FROM node:22-slim

# 脆弱性対応のため、linux-pam 1.7.1 以上に手動アップグレード
RUN apt-get update && \
    apt-get install -y --only-upgrade libpam0g && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# 2025年7月13日時点での最新のnpmバージョンをインストール
RUN npm install -g npm@11.4.2

WORKDIR /app

CMD ["npm", "run", "dev"]
