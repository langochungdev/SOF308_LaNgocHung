<template>
  <div class="container mt-5">
    <h2>Thông tin cá nhân</h2>
    <form @submit.prevent="updateProfile">
      <div class="mb-3">
        <label>Tên</label>
        <input v-model="name" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Mật khẩu mới</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Ảnh đại diện (URL)</label>
        <input v-model="avatar" class="form-control" />
      </div>
      <button class="btn btn-primary">Cập nhật</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const user = JSON.parse(localStorage.getItem('user')) || {}
const name = ref(user.name || '')
const email = ref(user.email || '')
const password = ref('')
const avatar = ref(user.avatar || '')
function updateProfile() {
  // Xử lý cập nhật thông tin cá nhân
  localStorage.setItem('user', JSON.stringify({ name: name.value, email: email.value, avatar: avatar.value }))
  alert('Cập nhật thành công!')
}
</script>