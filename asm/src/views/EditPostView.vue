<template>
  <div class="container mt-5">
    <h2>Chỉnh sửa bài viết</h2>
    <form @submit.prevent="editPost">
      <div class="mb-3">
        <label>Tiêu đề</label>
        <input v-model="title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Nội dung</label>
        <textarea v-model="content" class="form-control" required></textarea>
      </div>
      <button class="btn btn-primary">Lưu thay đổi</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const title = ref('Tiêu đề cũ')
const content = ref('Nội dung cũ')
function editPost() {
  // Xử lý lưu thay đổi
  alert('Đã lưu thay đổi!')
  router.push('/')
}
</script>