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
</script>

---
![](/slides/event_decisioning_fy2024/slide_001.jpg)

---
# 通常イベント開催までのプロセス

<Carousel :carousels="slide_normal_event"/>

---
# 対外イベント開催までのプロセス

<Carousel :carousels="slide_external_event"/>
イベント開催日ではなく**イベント申込締切日が基準**になることに注意してください。
