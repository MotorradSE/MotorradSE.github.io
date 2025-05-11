---
layout: blog
title: Home Lab
icon: /icons/neko-pc.png
banner: /banners/laptop.jpg
date: 2024/07/11 10:00
prev: false
next: false
is_list: false
tags: ["HomeLab"]
---

# Overview
HyperVisor上に複数環境を構築し、各種サービスを展開している。  
SaaSも一部使用している。  

![](/diagrams/homelabo.drawio.png)


## Network
### Internet
インターネット回線は計3回線契約している。  
グローバルIPを複数調達したかったのだが、コンシューマ向けISPではなかなか難しく、PPPoE回線を複数契約している。  

### Domain
複数ドメインを"お名前.com"から取得。  
インターネット回線が動的IPのため、DDNSとしてMyDNSを利用している。  

[お名前.com](https://www.onamae.com/)

### Firewall
HyperVisor上に仮想アプライアンスであるOPNSenseをデプロイして利用する。  
各環境に1台用意し、通信制御を行う。  
ベストプラクティスな運用なのでSingle構成とし、障害があればBackup Imageからデプロイする。  
configは定期バックアップを実施し、APIを利用してGoogle Driveに保管する。

[OPNSense](https://docs.opnsense.org/)

## SaaS
管理系ツールなどは積極的にXaaSを使用する。  
可視化ツールにはGrafana Cloud、静的コンテンツホスティングにはGitHub Pagesを利用する。 

### Grafana Cloud
メトリクス可視化ツールのGrafanaのCloud版を利用する。  
ホームラボ上のprometheusやloki、ミドルウェアからGrafana Cloudへのデータ転送については設計が必要。  
PDC(Private Data source Connect)機能を使用し、Grafana Cloudへ転送している。  
PDCを利用するにあたり、Agentをホームラボ上に導入している。  

[Grafana Cloud](https://grafana.com/ja/products/cloud/)
[Grafana PDC](https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect/)

### GitHub Pages
本サイトのように静的コンテンツであればGitHub Pagesで公開を行う。  
ドメイン名を自由に変更できない、動的コンテンツが動作出来ない、ソースコードを公開必須になるなど制約はあるものの、管理領域を減らせるメリットが大きい。

本サイトではJavaScript/VUE3/VitePressで作成しており、Build/DeployはGithub Actionsで実行している。

参考
- [GitHub Pages](https://docs.github.com/ja/pages/getting-started-with-github-pages/what-is-github-pages)
- [VUE](https://ja.vuejs.org/)
- [ElementT-Plus(VUEコンポーネント)](https://element-plus.org/en-US/)
- [VitePress](https://vitepress.dev/)

本ページ
- [MotorradSE](https://motorradse.github.io/)
- [NaritaNexus](https://motorradse.github.io/narita-nexus/)
- [GitRepository](https://github.com/MotorradSE/MotorradSE.github.io)

## Computing
### Hardware
ホームラボのスペックは最大限用意してある。  
個人で用意するスペックではない気がするが、おかげで超快適。  
8Core/32GB/512GB が最低要件のVMもあるし、これでもリソースを持て余してないことに恐怖している。

  - CPU: 16Core/32Thread
  - RAM: 128GiB
  - HDD 32TB
  - SSD 2TB
  - GPU: RTX2070Ti

### HyperVisor
HyperVisorにはPROXMOXを利用する。  
今まではVMWare ESXi、Ubuntu OpenStackを利用してきたが、DebianベースのPROXMOXを利用する。  
ハードウェアリソースのオーバヘッド低減や運用業務量の低減が見込める。  

PROXMOXではVM(仮想マシン)とLXC(コンテナ)が利用できるため、用途・要件によって使い分ける。
LXCはDockerコンテナとは考え方が異なり、1プロセス1コンテナではなく、小さいVMのように使用する。  
LXCの利点としては仮想マシンのように使用できること、スケールアップ/ダウンを無停止で実行できることになる。  
Docker/Podmanが必要になった際はDocker実行用VMを作成して動かす方針とする。(PROXMOX推奨構成)

[PROXMOX](https://www.proxmox.com/en/)

### VM
VMは基本的にUbuntuを利用する。  
統一されてた方が良いのと、私の好みである。  
IaCで構成管理を実施するため、手動での設定は原則実施しない。

### LXC
LXCはUbuntuもしくは公式templateから利用する。  
構成管理はIaCで実施するので、手動での設定は原則実施しない。

## Service
### WEB Site
公開コンテンツについてはリバースプロキシであるNGINXを通して使用する。  
セキュリティ対策面とグローバルIP/ドメインのリソースを削減の理由からWEBサーバ等の直接公開は実施しない。  

### 各種サービス
ゲームサーバや自作サービスなどを公開している。  
友人と遊んだり、妻が仕事で利用していたりする。