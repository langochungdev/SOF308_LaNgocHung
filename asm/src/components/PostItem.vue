<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.content }}</p>
      <p class="card-text"><small class="text-muted">Tác giả: {{ post.author }}</small></p>
      <router-link :to="'/post/' + post.id" class="btn btn-outline-primary btn-sm">Xem chi tiết</router-link>
      <button v-if="canEdit" @click="$emit('delete', post.id)" class="btn btn-outline-danger btn-sm ms-2">Xóa</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ post: Object })
const canEdit = computed(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  return user && user.email === props.post.author
})
</script>