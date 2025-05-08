---
layout: history
title: Dirbato Co., Ltd
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
      timestamp: '2024/09/01',
      is_card: false,
      title: '入社',
      contents:[
        '医療機関向けITシステム脆弱性診断',
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
      timestamp: '2025/01 ～',
      is_card: true,
      title: '通信回線会社A 販売グランドデザインDX',
      contents:[
        '通信回線会社AのDX案件',
        'オペレータ作業を自動化することで業務効率化を図る案件',
        'プロジェクトの中核を担うのはアプリケーション部分であるが、ミッションクリティカルなシステムを提供するためのインフラについて要件定義～設計を担当',
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
# 株式会社Dirbato
2024年10月入社 ~ 現在  
ITコンサルとして入社。  

## 直近の業務

<Timeline :timelines="engineer_timelines"/>

## 直近の業務について
TBA