---
#layout: docs
title: Tag List
icon: /images/icon.png
#banner: /banners/laptop.jpg
date: 2024-07-10 17:00
next: false
prev: false
is_list: true
---

<script setup>
import { data as posts } from '/.vitepress/scripts/entries.data.ts'

var tags = {}
posts.forEach(post => {
    if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach(tag => {
            if (tags[tag] === undefined) {
                tags[tag] = 1
            } else {
                tags[tag] += 1
            }
        })
    }
})

var tag_list = Object.keys(tags)
</script>

<h1>Tags</h1>
<ul>
  <li v-for="tag of tag_list">
    <a :href="'/entries/tags/' + encodeURIComponent(tag.replaceAll(' ', '')) + '/'">{{ tag }} ({{ tags[tag] }})</a>
  </li>
</ul>
