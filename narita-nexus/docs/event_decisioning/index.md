---
#layout: narita-nexus_activities
title: "イベント開催までのプロセス"
icon: /icons/narita-nexus.ico
#banner: /slides/event_decisioning_fy2024/slide_001.jpg
date: 2024/07/17 18:00
prev: false
next: false
is_list: false
---
<script setup>
  import Carousel from '/.vitepress/theme/components/el-plus_carousel.vue';
  import { ref } from 'vue';

  const slide_normal_event = ref ({
    thumb: '/slides/event_decisioning_fy2024/slide_002.jpg',
    list:[
      '/slides/event_decisioning_fy2024/slide_002.jpg',
    ],
  });
  const slide_external_event = ref ({
    thumb: '/slides/event_decisioning_fy2024/slide_003.jpg',
    list:[
      '/slides/event_decisioning_fy2024/slide_003.jpg',
    ],
  });

  import Timeline from'/.vitepress/theme/components/el-plus_timeline.vue';

  const dicision_timelines = ref ([
    {
      timestamp: '毎月1日～10日',
      is_card: false,
      title: '[幹事] 2か月後の体育館予約抽選申込',
      contents:[
        '[幹事] 体育館予約抽選申込',
        '2か月先の利用予定日の抽選となる',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'danger', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '毎月13日～17日',
      is_card: true,
      title: '2か月後のイベント開催日希望アンケート(Line)',
      contents:[
        'メンバーは [ 参加できそう or 出来なさそう ] を回答',
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
      timestamp: '毎月19日',
      is_card: false,
      title: '[幹事] 体育館予約当選の確定処理',
      contents:[
        '[幹事] 体育館予約当選の確定処理',
      ],
      hide: false,
      center: true,
      placement: 'top', // 'top' | 'bottom'(default)
      type: 'danger', // 'primary' | 'success' | 'warning' | 'danger' | 'info'
      //color: '#0bbd87',
      size: 'large',
      //icon: SuccessFilled,
      hollow: false,
    },
    {
      timestamp: '毎月20日',
      is_card: true,
      title: '2か月後のイベント開催日発表',
      contents:[
        'アンケート結果のトップ2日程を開催日とする',
        '本WEBサイト上に掲示',
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
      timestamp: '毎月2日間くらい',
      is_card: true,
      title: 'Narita Nexus 通常活動',
      contents:[
        'locale: 予約当選した成田市内 市営体育館 [印東, 久住, 中台]',
        'contents: バスケットボール 5on5 をメイン',
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

  const external_event_dicision_timelines = ref ([
    {
      timestamp: '～イベント申込1カ月前',
      is_card: true,
      title: '外部主催イベント開催日希望アンケート(Line)',
      contents:[
        'メンバーは [ 参加できそう or 出来なさそう ] を回答',
        '---',
        '「参加できそう」を回答した人は日程確保のための行動をする',
        '「参加できそう」が10人以上で次のステップへ',
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
      timestamp: '～イベント申込2週間前',
      is_card: true,
      title: 'Nexus参加メンバー確定',
      contents:[
        'メンバーは [ 参加確定 or できれば参加 or 不参加確定 ] を回答',
        '---',
        '「参加確定」を回答した人はこれより先キャンセル不可',
        '「参加確定」が10人以上で次のステップへ',
        '---',
        '「できれば参加」は人数枠が余っていればベンチ入りができる',
        '「不参加確定」は飛び入り参加は基本不可',
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
      timestamp: 'イベント申込1週間前',
      is_card: true,
      title: '最終ジャッジ',
      contents:[
        '規定人数に達しない場合は辞退',
        '「参加確定」が10人以上で外部主催イベントの参加申し込みをする',
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
![](/slides/event_decisioning_fy2024/slide_001.jpg)

---
# 通常イベント開催までのプロセス

<Carousel :carousels="slide_normal_event"/>

<Timeline :timelines="dicision_timelines"/>
---
# 対外イベント開催までのプロセス

<Carousel :carousels="slide_external_event"/>
イベント開催日ではなく**イベント申込締切日が基準**になることに注意してください。

<Timeline :timelines="external_event_dicision_timelines"/>
---