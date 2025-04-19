---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MotorradSE"
  text: "portfolio"
  tagline: "No system no life."
  image:
    src: /images/default.png
    style: "border-radius: 50%;"
  actions:
    - theme: brand
      text: "My history"
      link: "/entories/histories/"
    - theme: alt
      text: "Blog"
      link: "/entries/blog"

features:
  - title: My History
    details: 現在までの経歴
    link: "/entries/histories/"
  - title: Blog
    details: 雑なブログ
    link: "/entries/blog/"
  - title: Narita Nexus
    details: "Narita Nexus Backetball team."
    link: "/narita-nexus/"
---

<script lang="ts" setup> 
import { data } from "/.vitepress/scripts/entries_blog.data.ts";
import ListCard from '/.vitepress/theme/components/pages_list_card.vue';
const entries_data = [...data].reverse().slice(0, 7);
const entries_metadata = {
  link: '/docs/entries/',
  link_text: 'Latest Entries',
};
</script>

<ListCard :list_data="entries_data" :list_metadata="entries_metadata" />
