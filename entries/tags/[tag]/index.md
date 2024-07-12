---
#layout: docs
title: 
icon: /images/icon.png
#banner: /banners/laptop.jpg
date: 2024-07-10 17:00
next: false
prev: false
is_list: true
---

<script setup>
import { useData } from 'vitepress'
import { data as posts } from '/.vitepress/scripts/entries.data.ts'

const { params } = useData()
const current_tag = params.value.tag

var pages = []
posts.forEach(post => {
    if (post.frontmatter.tags){
        var tags = post.frontmatter.tags.map(tag => { return tag.replaceAll(" ", "") })
        if (tags.includes(current_tag)) {
            pages.push(post)
        }
    }
})
</script>

<!-- @content -->

<ul>
  <li v-for="page of pages">
    <a :href="page.url">
      <span>{{ page.frontmatter.title }}</span>
    </a>
  </li>
</ul>
