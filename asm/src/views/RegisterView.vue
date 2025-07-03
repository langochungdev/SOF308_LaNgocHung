<template>
  <div class="container mt-5">
    <h2>Đăng ký</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label>Tên</label>
        <input v-model="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button class="btn btn-success">Đăng ký</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
function register() {
  // Xử lý đăng ký, ví dụ lưu vào localStorage
  localStorage.setItem('user', JSON.stringify({ name: name.value, email: email.value }))
  router.push('/')
}
</script>