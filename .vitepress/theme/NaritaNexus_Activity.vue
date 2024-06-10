<script setup lang="ts">
import { computed, ref } from "vue";
import VPDoc from "vitepress/dist/client/theme-default/components/VPDoc.vue";
import { useData, useRoute } from "vitepress";
import { data as activities } from "../narita-nexus_activities.data.ts";
const data = useData();
const route = useRoute();
const title = computed(() => data.frontmatter?.value?.title ?? null);
const icon = computed(() => data.frontmatter?.value?.icon ?? null);
const banner = computed(() => data.frontmatter?.value?.banner ?? null);
const date = computed(() => data.frontmatter?.value?.date ?? null);
const pageIndex = computed<number>(() =>
  (activities as { url: string }[]).findIndex((activity) => activity.url === route.path),
);
// 新しいのが「前」扱い
const prev = computed(() =>
  pageIndex.value >= activities.length - 1
    ? null
    : {
        text: activities[pageIndex.value + 1]?.frontmatter?.title ?? "-",
        link: activities[pageIndex.value + 1]?.url,
        icon: activities[pageIndex.value + 1]?.frontmatter?.icon ?? null,
        banner: activities[pageIndex.value + 1]?.frontmatter?.banner ?? null,
      },
);
// 古いのが「次」扱い
const next = computed(() =>
  pageIndex.value <= 0
    ? null
    : {
        text: activities[pageIndex.value - 1]?.frontmatter?.title ?? "-",
        link: activities[pageIndex.value - 1]?.url,
        icon: activities[pageIndex.value - 1]?.frontmatter?.icon ?? null,
        banner: activities[pageIndex.value - 1]?.frontmatter?.banner ?? null,
      },
);
</script>

<template>
  <VPDoc>
    <template #doc-before>
      <div class="activity-header">
        <div v-if="title || date" class="activity-title-date">
          <h1 v-if="title" class="activity-title">{{ title }}</h1>
          <div class="activity-date-container">
            <a v-if="prev" :href="prev.link" class="prev-next prev">
              <i class="material-icons">arrow_back</i>
            </a>
            <p v-if="date" class="activity-date">{{ date }} 投稿</p>
            <a v-if="next" :href="next.link" class="prev-next next">
              <i class="material-icons">arrow_forward</i>
            </a>
          </div>
        </div>
        <div v-if="banner" class="activity-banner">
          <img :src="banner"  width="740px" height="360px" />
        </div>
        <div v-else class="activity-banner">
          <img src="/banners/default.jpg"  width="740px" height="360px" />
        </div>
      </div>
    </template>
    <template #doc-after>
      <div class="footer-buttons-container">
        <a href="/narita-nexus/"><i class="material-icons">home</i></a>
        <!-- twitter投稿ボタン実装予定
        <div class="twitter-share-button-container">
          <a
            href="https://twitter.com/share?ref_src="
            class="twitter-share-button"
            data-show-count="false"
            data-size="large"
            >Tweet</a
          >
        </div>
        -->
      </div>
      <div v-if="prev || next" class="prev-next-container">
        <a v-if="prev" :href="prev.link" class="prev-next prev">
          <i class="material-icons">arrow_back</i>
          <span>
            <!-- icon追加予定 
            <div v-if="prev.icon" class="prev-next img" >
              <img :src="prev.icon" width="50px" height="50px"/>
            </div>

            <div v-else class="prev-next img">
              <img src="/images/icon.png" width="100px" height="100px" />
            </div>
            -->
            {{ prev.text }}
            </span>
        </a>
        <span v-if="!prev || !next" class="spacer" />
        <a v-if="next" :href="next.link" class="prev-next next">
          <span>
            {{ next.text }}
            <!--
            <div v-if="next.icon" class="prev-next img">
              <img :src="next.icon" width="50px" height="50px" />
            </div>

            <div v-else class="prev-next img">
              <img src="/images/icon.png" width="50px" height="50px" />
            </div>
            -->
          </span>
          <i class="material-icons">arrow_forward</i>
        </a>

        
      </div>
    </template>
  </VPDoc>
</template>

<style lang="scss" scoped>

.activity-header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;


  .activity-icon {
    //width: 100%;
    //width: 150px;
    width: auto;
    //height: 150px;
    height: auto;
    object-fit: contain;
    //display: flex;
    //flex-direction: column;
    //line-height: 1;
    //display: inline-block;
    align-items: center;
    justify-content: center;
  }

  p.activity-banner {
    //width: 100%;
    ////width: 150px;
    width: auto;
    //height: 360px;
    height: auto;
    //object-fit: cover;
    display: flex;
    //display: block;
    align-items: center;
    justify-content: center;
  }

  .activity-title-date {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //margin-top: 500px;

    h1.activity-title {
      font-size: 2.2rem;
      line-height: 2.2rem;
      font-weight: bolder;
    }

    .activity-date-container {
      display: flex;
      gap: 1rem;

      p.activity-date {
        font-size: 0.8rem;
      }

      .prev-next {
        .material-icons {
          font-size: 0.8rem;
        }
      }
    }
  }
}
.footer-buttons-container {
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  gap: 1rem;

  .twitter-share-button-container {
    background-color: white;
    border-radius: 22px;
    padding: 2px;
    overflow: hidden;
  }
}
.prev-next-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  
  a.prev-next {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    background-color: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    padding: 1.4rem;
    height: 100%;

    /*
    .img {
      justify-content: flex-start;
      align-items: center;
      border-radius: 20px;
    }
    */

    &:hover {
      background-color: var(--vp-c-bg-soft-up);
    }

    &.prev {
      justify-content: flex-start;
      text-align: left;

      span {
        i {
          margin-right: 0.5rem;
        }
      }
    }
    &.next {
      justify-content: flex-end;
      text-align: right;

      span {
        i {
          margin-left: 0.5rem;
        }
      }
    }

    i.material-icons {
      flex: 0 0 auto;
    }

    span {
      flex: 1;

      i {
        font-weight: normal;
        font-style: normal;
      }
    }
  }
}
.edit-page-link-container {
  padding: 3rem 0;
  text-align: center;
}
</style>
