<script lang="ts" setup>
import { data } from "../../scripts/entries.data.ts";
const entries = [...data].reverse().slice(0, 6);
</script>

<template>
  <div class="home-entries-container container">
    <h3 class="entries-title inner">
      <a href="/entries">Entries</a>
    </h3>

    <section class="home-entries inner">
      <a v-for="(entry, index) in entries" :key="index" :href="entry.url">
        <p v-if="entry.frontmatter.icon" class="icon">
          <img :src="entry.frontmatter.icon" />
        </p>

        <p v-else class="icon">
          <img src="/icons/default.png" />
        </p>

        <p v-if="entry.frontmatter.date" class="date">
          {{ entry.frontmatter.date }}
        </p>
      </a>
    </section>
  </div>

  <!--
  // twitterタイムラインの実装予定
  <div class="footer-container container">
    <div class="footer-inner inner">
      <div class="twitter-container">
        <ClientOnly>
          <a
            class="twitter-timeline"
            href="https://twitter.com/"
          ></a>
        </ClientOnly>
      </div>
    </div>
  </div>
  -->
</template>

<style lang="scss" scoped>
.container {
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

      &:hover {
        background-color: var(--vp-c-bg-soft-up);
      }

      .article-title {
        flex: 1;
      }

      .emoji {
        font-size: 64px;
        line-height: 64px;
        text-align: center;
        height: 100px;
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon {
        //font-size: 64px;
        //line-height: 64px;
        //text-align: center;
        //height: 100px;
        //padding: 20px 0;
        height: auto;
        width: auto;
        //display: flex;
        align-items: center;
        justify-content: center;
      }
      .date {
        flex: 0 0 auto;
        font-size: 0.8rem;
        align-items: flex-end;
      }
    }
  }
}

.footer-container {
  margin-top: 3rem;
  padding: 0 24px;

  .footer-inner {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;

    .twitter-container {
      width: 100%;
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

  .footer-container {
    .footer-inner {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
