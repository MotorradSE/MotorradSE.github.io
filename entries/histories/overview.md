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

  const now = new Date();
  const job_timelines = ref ([
    {
      timestamp: '2018/04/01 ～ 2024/09/30 (予定)',
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
      timestamp: dayjs(now).format('YYYY/MM/DD'),
      is_card: false,
      title: 'current',
      contents:[
        dayjs(now).format('YYYY/MM/DD') + '現在',
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
    {
      timestamp: '2024/10/01 (予定) ～',
      is_card: true,
      title: 'in private',
      contents:[
        '転職',
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
</script>
---
# Overview
千葉県出身のSIerです。  
インフラエンジニアをやってます。  
2024/04/01から情報処理安全確保支援士になりました。  
最近はSIやってなくて技術コンサルのようなPMのようなことばかり...orz  
心はいつまでもSIerです。  

---
# 職歴

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

