<template>
  <div>
    <h1>Trang chủ Blog</h1>
    <PostItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete="deletePost"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PostItem from '../components/PostItem.vue'
// Giả lập dữ liệu, sau này thay bằng API hoặc store
const posts = ref([
  { id: 1, title: 'Bài viết 1', content: 'Nội dung 1', author: 'User1' },
  { id: 2, title: 'Bài viết 2', content: 'Nội dung 2', author: 'User2' }
])
function deletePost(id) {
  posts.value = posts.value.filter(p => p.id !== id)
}
</script>