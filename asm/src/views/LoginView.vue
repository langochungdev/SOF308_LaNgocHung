<template>
  <div class="container mt-5">
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label>Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button class="btn btn-primary">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const email = ref('')
const password = ref('')
const router = useRouter()
function login() {
  // Xử lý đăng nhập, ví dụ lưu vào localStorage
  localStorage.setItem('user', JSON.stringify({ email: email.value }))
  router.push('/')
}
</script>