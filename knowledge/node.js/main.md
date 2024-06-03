# Overview
github pages に Node.js を導入するためのドキュメント

# Requirements
まずは手元の環境でNode.jsが使用できる必要がある。  
wsl2 Ubuntu 20.04でNode.jsをインストールしてみる。

# wsl2
## Install Node.js
Node.jsをインストールする  

bash
```
# update repository
sudo apt update

# update existing packages
sudo apt upgrade -y

# install nvm
mkdir /tmp/nvm
wget -P /tmp/nvm https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh
bash /tmp/nvm/install.sh
rm -rf /tmp/nvm
source .bashrc

# check nvm
nvm ls-remote
nvm install 20.14.0
nvm list
nvm use 20.14.0
node -v
npm -v
```

## Test nodejs
Node.jsアプリをローカルで作ってみる  
作業ディレクトリは`./pages`とする  

### 01_init
bash
```
# make directory
mkdir -p pages

# gitignore
cat << EOF > .gitignode
/local/

EOF

# nodejs init
npm init -y
npm install --save react react-dom next
```

### 02_gitignore
./.gitignore
```
/node_modules/
/.next/
```

### 03_index.js
./pages/index.js
```
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/linkSample">
        <a>link Sample Page</a>
      </Link>
    </>
  )
}

export default Index
```

### 04_linkSample.js
./pages/linkSample.js
```
export default () => (
  <div>
    <p>This is the sample page</p>
  </div>
)
```

### 05_package.json
./package.json
```
{
# 中略
# ここから追記
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
  }
# ここまで追記
}
```

### 06_build
bash
```
npm run build
npm run start
```

[http:/localhost:3000](http:/localhost:3000)でアクセスできる  

## Static exportsテスト
next.config.jsを生成  
./next.config.js
```
const nextConfig = {
    output: 'export',
  }
   
  module.exports = nextConfig
```

packages.jsonを編集  
./packages.json
```
{
# 中略
  "scripts": {
    "dev": "next dev",
    "build": "next build",
# 変更前
    "start": "next build",
# 変更後
    "start": "serve out",
  }
}
```

bash  
```
# export
npm run build

npm install --save-dev serve
npx serve out
```

git管理したくないディレクトリ・ファイルが生成されるのでgitignoreしておく  
./.gitignore
```
### 追記
/out/
```

[http:/localhost:3000](http:/localhost:3000)でアクセスできる  


# github Actions でデプロイする
## repository
リポジトリを作成する  
`<ユーザ名>.github.io`というリポジトリ名で作成すると後々設定値の変更が少なく楽になる  

## repository settings
github pagesの設定を変更する  
`Settings > Pages > Build and Deployment > Source`にて以下設定値を変更する  
- 変更前
  - Deploy from a branch
- 変更後
  - GitHub Actions

何を変更したかだが、Github Pagesにてデプロイするサイトのソースコード参照先変更を変更した。  
Github Pagesでは素のHTMLを扱うため、何かしらの言語で書いたサイトは静的コンテンツに変換が必要になる。  
デフォルトでは特定ブランチの特定ディレクトリがデプロイ対象となるが、静的コンテンツ変換後のファイルを配置しなければならずソースコード管理ができない。  
なのでGithub Actionsで静的コンテンツに変換しPagesをデプロイすることでソースコード管理を行えるようにする。  

## Github Actions
./github/workflows/pages.yml
```
name: github pages deploy

on:
  push:
    branches:
    - master
    paths:
      - "pages/**"
      - ".github/workflows/pages-deploy.yml"
  pull_request:
    branched:
    - master
    paths:
      - "pages/**"
      - ".github/workflows/pages-deploy.yml"

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest    
    steps:
    - name: Checkout source code
      uses: actions/checkout@v2

    - name: Node.js enviroments deploy
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: npm

    - name: Install package from package.json
      run: npm install

    - name: Exec build
      run: npm run build
    
    - name: Add nojekyll
      run: touch ./out/.nojekyll

    - name: artifact upload
      uses: actions/upload-pages-artifact@v1
      with:
        path: ./out

  deploy:
    needs: build
    permissions:
      id-token: write
      pages: write
    environment:
      name: github-pages
    runs-on: ubuntu-latest
    steps:
      - name: Deploy github pages
        uses: actions/deploy-pages@v2
```
