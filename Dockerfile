FROM node:22.17.0-slim

# 脆弱性 CVE-2025-6020 対応のため、linux-pam 1.7.1 以上に手動アップグレード
RUN apt-get update && \
    apt-get install -y --only-upgrade libpam0g && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

CMD ["npm", "run", "dev"]
