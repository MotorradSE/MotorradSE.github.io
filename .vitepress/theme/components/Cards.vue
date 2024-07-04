<script lang="ts" setup>
defineProps([
  'cards',
])
</script>

<template>
  <el-space fill wrap>
    <el-card v-for="(card,index) in cards"
      :key="index"
      :shadow="card.option.shadow"
      class="box-card"
      style="width: 250px"
    >
      <template #header v-if="card.header !== null">
        <div class="card-header">
          <span>{{ card.header }}</span>
        </div>
      </template>
      <div v-for="content in card.contents" class="text item">
        {{ content }}
      </div>
    </el-card>
  </el-space>
</template>

<style lang="scss" scoped>
</style>
