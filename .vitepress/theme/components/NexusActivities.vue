<script setup>
import { data } from "../../narita-nexus_activities.data.ts";
const activities = [...data].reverse();
</script>

<template>
  <ul class="activities-container">
    <li v-for="(activity, index) in activities" :key="index" class="activity">
      <a :href="activity.url" class="link">
        <span v-if="activity.frontmatter.icon" class="icon">
          <img :src="activity.frontmatter.icon" width="150px" height="150px" />
        </span>
        <span v-else class="icon">
          <img src="/icons/narita-nexus.ico" width="150px" height="150px" />
        </span>
        <span class="title">{{ activity.frontmatter.title }}</span>
        <span v-if="activity.frontmatter.date" class="date">{{
          activity.frontmatter.date
        }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.activities-container {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .activity {
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
  .activities-container {
    .activity {
      a.link {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
</style>
