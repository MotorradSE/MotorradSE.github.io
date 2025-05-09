---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Narita Nexus"
  text: "戦う軍団たれ"
  tagline: "Narita highschool alumnus basketball team."
  image:
    src: /images/narita-nexus.jpg
    style: "border-radius: 50%;"
  actions:
    - theme: brand
      text: "Overview"
      link: "./overview.md"
    - theme: alt
      text: "Activity"
      link: "./activities/"
    - theme: alt
      text: "Documents"
      link: "./docs/"

features:
  - title: "Overview"
    details: "Narita Nexus について"
    link: "./overview.md"
  - title: "Activity"
    details: "Narita Nexusの活動"
    link: "./activities/"
  - title: "Event decision process"
    details: "イベント開催までのプロセス"
    link: "./docs/event_decisioning/"
---

<script lang="ts" setup> 
import { data } from "/.vitepress/scripts/narita-nexus_activities.data.ts";
import ListCard from '/.vitepress/theme/components/pages_list_card.vue';
const docs_data = [...data].reverse().slice(0, 7);
const docs_metadata = {
  link: '/narita-nexus/activities/',
  link_text: 'Activities',
};
</script>

<ListCard :list_data="docs_data" :list_metadata="docs_metadata" />
