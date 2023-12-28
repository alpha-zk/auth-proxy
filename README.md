# auth-proxy
Simple reverse proxy written in Node.js

## Requirements
- Bun (https://bun.sh/)
- Node.js v20.10.0
- Ubuntu 22.04

## Install

Install **Bun**:
```shell
curl -fsSL https://bun.sh/install | bash
```

Clone **auth-proxy** repository:
```shell
git clone https://github.com/alpha-zk/auth-proxy.git
cd auth-proxy
```

Install **node_modules**:
```shell
bun install
```

Create **.env** file:
```shell
mv env_dist .env
```

Edit **.env** file:
```text
export ALPHAZK_API_ENDPOINT=aleo-testnet3.alphazk.com
export ALPHAZK_API_KEY=PUT_YOUR_ALPHAZK_API_KEY_HERE
```

## Run **auth-proxy**
```shell
bun run index.ts
```