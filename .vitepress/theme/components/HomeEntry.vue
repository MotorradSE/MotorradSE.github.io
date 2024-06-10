<script lang="ts" setup>
import { data } from "../../entries.data.ts";
const entries = [...data].reverse().slice(0, 6);
</script>

<template>
  <div class="home-entries-container container">
    <h3 class="entries-title inner">
      <a href="/entries">Latest Entries</a>
    </h3>

    <section class="home-entries inner">
      <a v-for="(entry, index) in entries" :key="index" :href="entry.url">
        <p class="article-title">{{ entry.frontmatter.title }}</p>

        <p v-if="entry.frontmatter.icon" class="icon" >
          <img :src="entry.frontmatter.icon" width="150px" height="150px" />
        </p>

        <p v-else class="icon">
          <img src="/icons/default.png" width="150px" height="150px" />
        </p>

        <p v-if="entry.frontmatter.date" class="date">
          {{ entry.frontmatter.date }}
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
.home-entries-container {
  h3.entries-title {
    font-size: 1.4rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
  }

  .home-entries {
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
  .home-entries-container {
    h3.entries-title {
      grid-template-columns: 1fr 1fr;
    }

    .home-entries {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (min-width: 960px) {
  .container {
    padding-left: 64px;
    padding-right: 64px;
  }
  .home-entries-container {
    h3.entries-title {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .home-entries {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

}
</style>
