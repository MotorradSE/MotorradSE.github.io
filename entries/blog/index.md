---
#layout: docs
title: Blog Entries List
icon: /icons/neko-pc.png  
#banner: /banners/laptop.jpg
date: 2023/03/03 21:00
prev: false
next: false
is_list: true
---

<script lang="ts" setup> 
import { data } from "/.vitepress/scripts/entries_blog.data.ts";
import list from '/.vitepress/theme/components/pages_list.vue';
const entries_data = [...data].reverse();
</script>

<list :list_data ="entries_data" />
