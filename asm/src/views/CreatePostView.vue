<template>
  <div class="container mt-5">
    <h2>Đăng bài viết mới</h2>
    <form @submit.prevent="createPost">
      <div class="mb-3">
        <label>Tiêu đề</label>
        <input v-model="title" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Nội dung</label>
        <textarea v-model="content" class="form-control" required></textarea>
      </div>
      <div class="mb-3">
        <label>Hình ảnh (URL)</label>
        <input v-model="image" class="form-control" />
      </div>
      <button class="btn btn-success">Đăng bài</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const title = ref('')
const content = ref('')
const image = ref('')
const router = useRouter()
function createPost() {
  // Xử lý đăng bài (gọi API hoặc cập nhật store)
  alert('Đăng bài thành công!')
  router.push('/')
}
</script>