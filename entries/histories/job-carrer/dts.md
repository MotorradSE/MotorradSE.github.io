---
layout: history
title: DTS Corp.
icon: /icons/neko-pc.png
banner: /banners/laptop.jpg
date: 2024/06/13 22:00
prev: false
next: false
is_card: false
tags: ["転職"]
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
      title: '一括請負インフラ受託開発',
      contents:[
        '主に扱った技術:ネットワーク, OS(Linux),セキュリティ',
        '短期案件をフェーズが重複しないよう常に2～3件掛け持ちしていた',
        '2020/04以降はチームリーダとして案件に従事',
        'この頃はZTNAが流行る前でインターネット分離やVDI、クラウドプロキシ、SSO認証基盤を良く扱っていた',
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
      timestamp: '2019/07/01 ～ 2024/08/31',
      is_card: true,
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
      title: '証券会社B インフラコアシステム開発',
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
      title: '[最終PJ] 証券会社B インフラシステムDevOps',
      contents:[
        '2021/10から携わっていたインフラシステム開発後、そのまま運用に参画する運びとなる',
        '運用といってもRHOSP + CiscoACI + CI/CD を用いたDevOpsなので維持のための運用ではなく、持続的な開発となる',
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
      timestamp: '2024/05 ～',
      is_card: true,
      title: '[最終PJ] 証券会社A インフラシステムDevOps',
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
2018/04/02 ~ 2024/08/31  
インフラ領域を得意とする事業部に配属となり、ネットワークエンジニアとしてキャリアをスタート。  
目指せフルスタックエンジニア

<Timeline :timelines="engineer_timelines"/>


## 直近のプロジェクト
### A社
#### プロジェクト概要
証券会社A 基幹インフラシステム 運用兼改善活動

- 期間
  - 2024/04 ～ 2024/08 (4カ月)

- 業務概要
  - A社の主要サービスが載るインフラシステムの長期安定運用
  - システム維持をするだけでなく、常にあるべき姿にするための改善提案～リリースを行う
  - 短いサイクルで改善提案～リリースを実施し、長期安定稼働とシステム最適化を両立することで、高品質なシステム提供を実現する  

- 実績/取り組み
  - 本プロジェクトでの私の役割は以下2点
    - システム安定稼働に向けた課題の抽出・顕在化
    - 課題解決方法を顧客の意思決定者へ提示すること
   - プロジェクト内や他システム担当者へのヒアリングで顕在化した問題を纏め上げ、解決に向けて提案・議論することで意思決定者が判断できる材料を揃える
   - 課題の解決に向けて顧客内のエンジニアに展開し、必要に応じてマネジメントを行う

- メンバー構成
  - 人数: 2名(自身含む)
  - ロール: チームリーダ

#### 業務内容
  顧客ITインフラシステムの改善活動に従事。  
  SIというよりテックリード/ITコンサルのような感じだと思う。  
  というのも、顧客Aは内製志向なのでエンジニアはいる...  
  が、しかし、NWのプロはおらずサーバ担当者がシステム間をただ繋いだだけなので至る所に問題あり。  

  ということで顧客システムにおいて
  - 問題の可視化
  - 原因の追及・可視化
  - あるべき姿の明確化
  - 顧客環境における課題解決手法の検討

  これらを  
  顧客の意思決定者(システム責任者)に対してプレゼン  
  → 議論  
  → コンセンサスを取る  
  → 顧客エンジニアが開発できるように要件定義書レベルに落とし込む  

  ということをしていた。  

---
### B社
A社が子会社であるB社のシステム管理を行うため、B社のシステムも担当  

#### プロジェクト概要
証券会社B 基幹IT インフラシステム DevOps運用

- 期間
  - 2021/04 ～ 2024/08 (3年4カ月)

- 業務概要
  - 証券システムが稼働するインフラであり、ミッションクリティカルなシステムとしての長期安定運用
  - 親会社変更に伴う影響やシステム合併などで日々追加される要件に対し、短いサイクルで設計～リリースを実施しすることでAgilityのあるシステム運用を実現する  

- 実績/取り組み
  - ベンダーとしてのシステム保守、プロダクト・リカーリングのセールスにより売上に貢献
  - 2023年度からは同顧客内の既存プロジェクトのマネジメントも併せて担当
  - 担当システム起因でのインシデントが0件であり、高品質な運用の実施
  - CI/CDによる作業工数の削減
  - サービス開発チームからのトラブルシューティング依頼では、Cloud(OpenStack)/OS/ミドルウェア/ネットワークの各レイヤーをチェックし、トラブルシューティングに寄与
  - この実績が本プロジェクトの顧客の親会社から評価されたことで親会社のネットワークシステム運用へ拡大につなげた

- メンバー構成
  - 人数
    - 13名(自身含む)
  - ロール
    - チームリーダ
- 担当システム
  計4システム
    - プライベートクラウド(OpenStack)
    - 基幹ネットワーク(SDN)
    - 主要サービス基盤
    - システム監視サービス

#### 業務概要
  マネージャーとして参画しており4プロジェクト走っている。  
  マネージャーとして参画すべきは経験と管理能力に長けているベテランが入るべきだが、同プロジェクトには私より職位が上の人がおらず、初のマネージャー経験となる。  
  運用フェーズ(DevOps)になり以下プロジェクトを担当。  

  - サービス/インフラ監視システム
  - 主要サービス インフラシステム
  - プライベートクラウド(OpenStack)
  - 基幹ネットワークシステム
  
  DevOpsということでインフラやネットワーク周りもCI/CD環境に取り込んでいる。  
  ネットワークシステムに関しては実運用も兼務してます。  
  いわゆるプレイングマネージャー。

---

**2018/09 ～ 2021/03**

  ITインフラの受託開発を行っていた。  
  主に要件定義 ～ 設計 ～ 開発  ～ 試験を担当  
  社内ではネットワークエンジニアという認識っぽいのですが1分野だけでなく幅広くやってます。
  
  |Layer|Product|Note|
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

