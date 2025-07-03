
// post.js: Quản lý bài viết (giả lập localStorage)
const STORAGE_KEY = 'posts'

export function getPosts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function getPostById(id) {
  return getPosts().find(p => p.id === Number(id))
}

export function createPost(post) {
  const posts = getPosts()
  post.id = Date.now()
  posts.push(post)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
  return post
}

export function updatePost(id, data) {
  const posts = getPosts().map(p => p.id === Number(id) ? { ...p, ...data } : p)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}

export function deletePost(id) {
  const posts = getPosts().filter(p => p.id !== Number(id))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
}
