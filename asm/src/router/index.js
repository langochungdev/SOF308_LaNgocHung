import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PostDetailView from '../views/PostDetailView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import EditPostView from '../views/EditPostView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/post/:id', name: 'PostDetail', component: PostDetailView, props: true },
  { path: '/create', name: 'CreatePost', component: CreatePostView, meta: { requiresAuth: true } },
  { path: '/edit/:id', name: 'EditPost', component: EditPostView, meta: { requiresAuth: true }, props: true },
  { path: '/profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Navigation guard cho các route cần đăng nhập
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user') // hoặc kiểm tra từ store
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router