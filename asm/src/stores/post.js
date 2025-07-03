
// post.js: Pinia store quản lý bài viết
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: JSON.parse(localStorage.getItem('posts')) || []
  }),
  actions: {
    setPosts(posts) {
      this.posts = posts
      localStorage.setItem('posts', JSON.stringify(posts))
    },
    addPost(post) {
      post.id = Date.now()
      this.posts.push(post)
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },
    updatePost(id, data) {
      this.posts = this.posts.map(p => p.id === id ? { ...p, ...data } : p)
      localStorage.setItem('posts', JSON.stringify(this.posts))
    },
    deletePost(id) {
      this.posts = this.posts.filter(p => p.id !== id)
      localStorage.setItem('posts', JSON.stringify(this.posts))
    }
  }
})
