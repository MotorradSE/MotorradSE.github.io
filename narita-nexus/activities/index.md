---
#layout: docs
title: Activities list
icon: /icons/narita-nexus.png
banner: /banners/narita-nexus_tatakau-gunndann.png
date: 2024/06/10 19:00
prev: false
next: false
is_list: true
---

![img](/banners/narita-nexus_tatakau-gunndann.png)

---

# List
<script lang="ts" setup>
import { data } from "/.vitepress/scripts/narita-nexus_activities.data.ts";
import list from '/.vitepress/theme/components/pages_list.vue';
const histories_data = [...data].reverse();
</script>

<list :list_data ="histories_data" />
