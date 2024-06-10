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
      link: "./histories/"
    - theme: alt
      text: "Entries list"
      link: "./entries.md"

features:
  - title: My History
    details: 現在までの経歴
    link: "./histories/"
  - title: Narita Nexus
    details: "Narita Nexus Backetball team."
    link: "./narita-nexus/"
---

<script lang="ts" setup> 
import HomeEntry from ".vitepress/theme/components/HomeEntry.vue";
</script>

<HomeEntry />
