<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p><b>Tác giả:</b> {{ post.author }}</p>
    <hr>
    <h4>Bình luận</h4>
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <form @submit.prevent="addComment" v-if="isAuthenticated">
      <input v-model="newComment" class="form-control" placeholder="Nhập bình luận..." required />
      <button class="btn btn-secondary mt-2">Gửi</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CommentItem from '../components/CommentItem.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const post = ref({ id: route.params.id, title: 'Tiêu đề', content: 'Nội dung', author: 'User1' })
const comments = ref([
  { id: 1, user: 'User2', content: 'Hay quá!', time: '2025-07-02' }
])
const newComment = ref('')
const isAuthenticated = !!localStorage.getItem('user')
function addComment() {
  comments.value.push({
    id: Date.now(),
    user: JSON.parse(localStorage.getItem('user')).email,
    content: newComment.value,
    time: new Date().toLocaleString()
  })
  newComment.value = ''
}
</script>