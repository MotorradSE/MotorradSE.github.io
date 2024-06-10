<script lang="ts" setup>
import { data } from "../../narita-nexus_activities.data.ts";
const activities = [...data].reverse().slice(0, 6);
</script>

<template>
  <div class="home-activities-container container">
    <h3 class="activities-title inner">
      <a href="/activities">Latest activities</a>
    </h3>

    <section class="home-activities inner">
      <a v-for="(activity, index) in activities" :key="index" :href="activity.url">
        <p class="article-title">{{ activity.frontmatter.title }}</p>

        <p v-if="activity.frontmatter.icon" class="icon">
          <img :src="activity.frontmatter.icon"  width="150px" height="150px"/>
        </p>

        <p v-else class="icon">
          <img src="/icons/narita-nexus.ico" width="150px" height="150px" />
        </p>

        <p v-if="activity.frontmatter.date" class="date">
          {{ activity.frontmatter.date }}
        </p>
      </a>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
  padding-left: 24px;
  padding-right: 24px;

  .inner {
    margin: 0 auto;
    max-width: 1152px;
  }
}
.home-activities-container {
  h3.activities-title {
    font-size: 1.4rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
  }

  .home-activities {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    a {
      display: flex;
      flex-direction: column;
      background-color: var(--vp-c-bg-soft);
      border: 1px solid var(--vp-c-border);
      padding: 24px;
      height: 100%;
      border-radius: 4px;
      //margin: 0 auto;
      //flex-wrap: wrap;
      align-items: center;

      &:hover {
        background-color: var(--vp-c-bg-soft-up);
      }

      .article-title {
        flex: 1;
      }

      .icon {
        //font-size: 64px;
        //line-height: 64px;
        //text-align: center;
        //height: 100px;
        //padding: 20px 0;
        height: auto;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .date {
        flex: 0 0 auto;
        font-size: 0.8rem;
        text-align: right;
        align-items: flex-end;
      }
    }
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .home-activities-container {
    h3.activities-title {
      grid-template-columns: 1fr 1fr;
    }

    .home-activities {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (min-width: 960px) {
  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
  .home-activities-container {
    h3.activities-title {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .home-activities {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

}
</style>
