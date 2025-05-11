---
layout: history
title: Overview
icon: /icons/neko-pc.png
banner: /banners/laptop.jpg
date: 2024/06/10 19:00
prev: false
next: false
is_list: false
tags: ["転職"]
---

<script lang="ts" setup> 
  import { ref } from 'vue';
  import dayjs from 'dayjs';
  import Timeline from'/.vitepress/theme/components/el-plus_timeline.vue';
  import Card from'/.vitepress/theme/components/el-plus_card.vue';
  import Carousel from '/.vitepress/theme/components/el-plus_carousel.vue';

  const now = new Date();
  const job_timelines = ref ([
    {
      timestamp: '2018/04/01 ～ 2024/09/31',
      is_card: true,
      title: '株式会社DTS',
      contents:[
        '新卒で入社',
        'SIをメイン業務とする独立系SIer',
        'インフラエンジニアとして配属',
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
      timestamp: '2024/10/01 ～',
      is_card: true,
      title: '株式会社Dirbato',
      contents:[
        '初転職',
        'ITコンサルタント',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'info', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: true,
    },
  ])

  const hobby_cards = ref ([
    {
      header: '自動車関係',
      contents: [
        'ツーリング / ドライブ',
        'DIY整備',
      ],
      option: {
        shadow: 'always',
      }
    },
    {
      header: 'スポーツ',
      contents: [
        'バスケットボール',
        'バレーボール(観戦のみ)',
      ],
      option: {
        shadow: 'always',
      }
    },
    {
      header: 'インドア',
      contents: [
        '読書',
        'CS/PCゲーム',
        'ボードゲーム',
        '麻雀',
        '自宅サーバー',
      ],
      option: {
        shadow: 'always',
      }
    },
    {
      header: '家庭的な趣味',
      contents: [
        'DIY',
        '料理',
        '燻製作り',
        'スイーツ作り',
      ],
      option: {
        shadow: 'always',
      }
    },
  ])

  const slide_carousels = ref ({
    thumb: '/slides/job_career/slide_001.jpg',
    list:[
      '/slides/job_career/slide_001.jpg',
      '/slides/job_career/slide_002.jpg',
      '/slides/job_career/slide_003.jpg',
      '/slides/job_career/slide_004.jpg',
      '/slides/job_career/slide_005.jpg',
      '/slides/job_career/slide_006.jpg',
      '/slides/job_career/slide_007.jpg',
      '/slides/job_career/slide_008.jpg',
      '/slides/job_career/slide_009.jpg',
      '/slides/job_career/slide_010.jpg',
      '/slides/job_career/slide_011.jpg',
      '/slides/job_career/slide_012.jpg',
      '/slides/job_career/slide_013.jpg',
      '/slides/job_career/slide_014.jpg',
      '/slides/job_career/slide_015.jpg',
      '/slides/job_career/slide_016.jpg',
      '/slides/job_career/slide_017.jpg',
      '/slides/job_career/slide_018.jpg',
      '/slides/job_career/slide_019.jpg',
      '/slides/job_career/slide_020.jpg',
      '/slides/job_career/slide_021.jpg',
      '/slides/job_career/slide_022.jpg',
      '/slides/job_career/slide_023.jpg',
      '/slides/job_career/slide_024.jpg',
      '/slides/job_career/slide_025.jpg',
      '/slides/job_career/slide_026.jpg',
      '/slides/job_career/slide_027.jpg',
      '/slides/job_career/slide_028.jpg',
      '/slides/job_career/slide_029.jpg',
      '/slides/job_career/slide_030.jpg',
      '/slides/job_career/slide_031.jpg',
    ],
  })
</script>
---
# Overview
千葉県出身のSIerです。  
~~インフラエンジニア~~ ITコンサルタントをやってます。  
2024/04/01から情報処理安全確保支援士になりました。  
[ホームラボ](../blog/2025/0511/homelab/index.md)で公開サービス作ったりしてます。  
心はいつまでもSIerです。  

---
# 職歴
経歴について
※クリックするとスライドが表示されます
<Carousel :carousels="slide_carousels"/>

---
<Timeline :timelines="job_timelines"/>

---
# 保有資格

|取得日|資格名|種別|
|:-:|:-:|:-:|
|2016/02|普通自動車第一種免許|国家資格|
|2017/03|普通自動二輪免許|国家資格|
|2018/03|ITパスポート試験|国家試験|
|2023/07|DX検定 DXスタンダードレベル|民間資格|
|2023/12|情報処理安全確保支援士試験|国家試験|
|2024/04|情報処理安全確保支援士|国家資格|


---

# 趣味
多趣味です！

<Card :cards="hobby_cards"/>

