---
#layout: docs
title: Histories List
icon: /images/icon.png
#banner: /banners/laptop.jpg
date: 2023/03/03 21:00
prev: false
next: false
is_list: true
---


<script lang="ts" setup> 
import { data } from "/.vitepress/scripts/histories.data.ts";
import List from '/.vitepress/theme/components/pages_list.vue';
const histories_data = [...data].reverse();
</script>

<List :list_data ="histories_data" />
