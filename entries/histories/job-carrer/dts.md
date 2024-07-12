---
layout: history
title: DTS Corp.
icon: /icons/neko-pc.png
banner: /banners/laptop.jpg
date: 2024/06/13 22:00
prev: false
next: false
is_card: false
---
<script lang="ts" setup> 
  import { ref } from 'vue';
  import Timeline from'/.vitepress/theme/components/el-plus_timeline.vue';

  const engineer_timelines = ref ([
    {
      timestamp: '2018/04/01',
      is_card: false,
      title: '入社',
      contents:[
        '新人研修受講',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'info', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '2018/09/01 ～ 2021/03',
      is_card: true,
      title: '[過去PJ] 一括請負インフラ受託開発',
      contents:[
        '主に扱った技術:ネットワーク, OS(Linux),セキュリティ',
        '短期案件をフェーズが重複しないよう常に2～3件掛け持ちしていた'
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'info', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '2019/07/01 ～',
      is_card: false,
      title: '研修講師',
      contents:[
        '新人研修講師を毎年担当',
        'Network / IaC'
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'info', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '2021/10',
      is_card: true,
      title: '[過去PJ] 証券会社A インフラコアシステム開発',
      contents:[
        'プロダクト:OpenStack, CiscoACI',
        '顧客の主要サービスを載せるプライベートクラウドシステム開発',
        'CI/CDも併せて開発',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'info', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '2022/04 ～',
      is_card: true,
      title: '[現在PJ] 証券会社A インフラシステムDevOps',
      contents:[
        '2021/10から携わっていたインフラシステム開発後、そのまま運用に参画する運びとなる',
        '運用といってもRHOSHP + CiscoACI + CI/CD を用いたDevOpsなので維持のための運用ではなく、持続的な開発となる',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'success', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '2024/05 ～',
      is_card: true,
      title: '[現在PJ] 証券会社B インフラシステムDevOps',
      contents:[
        '証券会社Aの親会社のシステムSI(?)',
        '顧客は内製志向なのでシステム課題の抽出と解決方法の提示をし、承認が得られたら顧客エンジニアに引き継ぐという業務',
        'およそSIとはかけ離れている',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'success', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
  ])
</script>
---
# 株式会社DTS
2018年入社 ~ 現在  
インフラ領域を得意とする事業部に配属となり、ネットワークエンジニアとしてキャリアをスタート。  
目指せフルスタックエンジニア

## 直近での業務
顧客は2社、契約ベースだと合計で5プロジェクトに従事。  
現在は運用フェーズとなるが、DevOpsなのでシステム維持のための運用ではない。  

- **顧客A**

  顧客ITインフラシステムDevOpsにおける上流工程に従事。  
  SIというより技術コンサルのような感じだと思う。  
  というのも、顧客Aは内製志向なのでエンジニアはいる...  
  が、しかし、NWのプロはおらずシステム間をただ繋いだだけなので至る所に問題あり。  

  ということで顧客システムのネットワークにおいて
  - 問題の可視化
  - 原因の追及・可視化
  - あるべき姿の明確化
  - 顧客環境における課題解決手法の検討

  これらを顧客の意思決定者(システム責任者)に対してプレゼン  
  ↓ (コンセンサスを取る)  
  顧客エンジニアが開発できるように要件定義書レベルに落とし込む  

  ということをしている。  


- **顧客B**

  一応マネージャーとして参画しており4プロジェクト走っている。  
  同プロジェクトに私より職位が上の人がいない...!! 
  現在は運用フェーズ(DevOps)になり以下プロジェクトを担当。  

  - サービス/インフラ監視システム
  - 主要サービス インフラシステム
  - プライベートクラウド(OpenStack)
  - 基幹ネットワークシステム
  
  DevOpsということでインフラやネットワーク周りもCI/CD環境に取り込んでいる。  
  ネットワークシステムに関しては実運用も兼務してます。いわゆるプレイングマネージャー。

## エンジニアとして

<Timeline :timelines="engineer_timelines"/>

**2018/09 ～ 2021/03**

  ITインフラの受託開発を行っていた。  
  主に要件定義 ～ 設計 ～ 開発  ～ 試験を担当  
  社内ではネットワークエンジニアという認識っぽいのですが1分野だけでなく幅広くやってます。
  
  |Layer|Product|desc|
  |:-:|-|:-:|
  |仮想化基盤|VMWare<br>Nutanix<br>OpenStack|3Tier,HCI|
  |Cloud|OpenStack(プライベートクラウド)<br>AWS<br>ECL2|-|
  |OS|Linux(RHEL,Ubuntu)<br>WindowsServer(AD,ADFS,WSUS)|WindowsServerは一部機能のみ|
  |ミドルウェア|Apache<br>DB(MySQL,PostgreSQL)<br>postfix<br>...など|-|
  |ネットワーク|L2/L3 Switch(Catalyst,Nexus)<br>Router(Cisco)<br>FW(FortiGate,Paloalto)<br>LB(A10)<br>SDN/SDA(CiscoACI)|企業間BGP接続もやってました|
  |Security|Internet Isolation(Menlo,SCVX)<br>メールセキュリティ(GuardianWall)<br>ZTNA(Netskope,zscaler)<br>特権管理(CyberArk)<br>振る舞い分析(Exabeam)|-|
  |CI/CD|Git(Github,Gitlab)<br>IaC(ansible,terraform)|-|
  |監視|Zabbix<br>Grafana|-|
  |Other|Code(VBA,Python,shell script)|-|


**2021/04 ～ 現在**

  客先常駐でのDevOps運用をしてます  
  ::: warning
  今後追加予定です。  
  もう少し待って...
  :::

## プロジェクトマネージャーとして

::: warning
今後追加予定です。  
もう少し待って...
:::