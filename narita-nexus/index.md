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
      link: "./overview/"
    - theme: alt
      text: "Activity"
      link: "./activities/"

features:
  - title: "Overview"
    details: "Narita Nexus について"
    link: "./overview/"
  - title: "Activity"
    details: "Narita Nexusの活動"
    link: "./activities/"
  - title: "for new member"
    details: "新規にNexusに参画する方へ"
    link: "./docs/for_new_member/"
---

<script lang="ts" setup> 
import NexusHome from "/.vitepress/theme/components/NexusHome.vue";
</script>

<NexusHome />
