<script setup>
import { data } from "../../histories.data.ts";
const histories = [...data].reverse();
</script>

<template>
  <ul class="histories-container">
    <li v-for="(entry, index) in histories" :key="index" class="entry">
      <a :href="entry.url" class="link">
        <span v-if="entry.frontmatter.icon" class="icon">
          <img :src="entry.frontmatter.icon" />
        </span>
        <span v-else class="icon">
          <img src="/icons/default.png" />
        </span>
        <span class="title">{{ entry.frontmatter.title }}</span>
        <span v-if="entry.frontmatter.date" class="date">{{
          entry.frontmatter.date
        }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.histories-container {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .entry {
    a.link {
      display: inline-flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      text-decoration: none;
      color: var(--vp-c-text-1);
      width: 100%;

      &:hover {
        color: var(--vp-c-text-2);
      }

      .emoji {
        flex: 0 0 auto;
        font-size: 48px;
        line-height: 48px;
      }

      .icon {
        flex: 0 0 120px;
        height: auto; 
        width: auto;
      }

      .title {
        flex: 1;
      }

      .date {
        flex: 0 0 auto;
        font-size: 0.8rem;
      }
    }
  }
}

@media (min-width: 960px) {
  .histories-container {
    .entry {
      a.link {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
</style>
