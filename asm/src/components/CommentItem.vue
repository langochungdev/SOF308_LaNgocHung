<template>
  <div class="mb-2 border-bottom pb-2">
    <b>{{ comment.user }}</b> <span class="text-muted">({{ comment.time }})</span>
    <div>{{ comment.content }}</div>
  </div>
</template>

<script setup>
const props = defineProps({ comment: Object })
</script>