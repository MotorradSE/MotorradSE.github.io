<script lang="ts" setup>
defineProps([
  'list_data',
  'list_metadata'
]);
</script>

<template>
  <div class="pages-list-container container">
    <h3 class="list-title inner">
      <a :href="list_metadata.link">{{ list_metadata.link_text }}</a>
    </h3>

    <el-space wrap alignment="center">
      <template v-for="(entry, index) in list_data" :key="index">
        <el-card v-if="! entry.frontmatter.is_list">
          <a :href="entry.url">
            <p class="article-strings">{{ entry.frontmatter.title }}</p>
            <img :src="entry.frontmatter.icon" class="article-icon" />
            <p v-if="entry.frontmatter.date" class="article-strings">
                  {{ entry.frontmatter.date }}
            </p>
          </a>
        </el-card>
      </template>
    </el-space>
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
.pages-list-container {
  h3.list-title {
    font-size: 1.4rem;
    font-weight: bolder;
    margin-bottom: 0.5rem;
  }
  .el-card {
    width: 300px;
    .article-strings {
      text-align: center;
    }
    .article-icon {
      margin: auto;
      height: auto;
      width: 150px;
    }
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .pages-list-container {
    h3.list-title {
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
  .pages-list-container {
    h3.list-title {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .home-entries {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
