<script lang="ts" setup>
defineProps([
  'list_data',
]);
</script>

<template>
  <ul class="pages-container">
    <template  v-for="(page, index) in list_data" :key="index">
      <li v-if="! page.frontmatter.is_list" class="page">
        <a :href="page.url" class="link">
          <span v-if="page.frontmatter.icon" class="icon">
            <img :src="page.frontmatter.icon" />
          </span>
          <span v-else class="icon">
            <img src="/icons/default.png" />
          </span>
          <span class="title">{{ page.frontmatter.title }}</span>
          <span v-if="page.frontmatter.date" class="date">
            {{ page.frontmatter.date }}
          </span>
        </a>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.pages-container {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .page {
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

        img{
          height: auto;
          max-width: 150px;
        }
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
  .pages-container {
    .page {
      a.link {
        flex-direction: row;
        gap: 1rem;
      }
    }
  }
}
</style>
