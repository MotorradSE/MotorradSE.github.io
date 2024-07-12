<script lang="ts" setup>
defineProps([
  'timelines',
])
</script>

<template>
  <el-timeline class="timeline">
    <el-timeline-item v-for="(timeline,index) in timelines"
      :key="index"
      :timestamp="timeline.timestamp"
      :hide-timestamp="timeline.hide"
      :center="timeline.center"
      :placement="timeline.placement"
      :type="timeline.type"
      :color="timeline.color"
      :size="timeline.size"
      :icon="timeline.icon"
      :hollow="timeline.hollow"
    >
      <div v-if="timeline.is_card">
        <el-card>
          <h4>{{ timeline.title }}</h4>
          <div v-for="content in timeline.contents">{{ content }}</div>
        </el-card>
      </div>
      <div v-else>
        <div v-for="content in timeline.contents">{{ content }}</div>
      </div>
    </el-timeline-item>
  </el-timeline>
</template>

<style lang="scss" scoped>
  .timeline {
    max-width: 600px;
  }
</style>
