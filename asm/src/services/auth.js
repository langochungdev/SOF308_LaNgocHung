
// auth.js: Xử lý đăng ký, đăng nhập, đăng xuất (giả lập localStorage)
export function login(email, password) {
  // Giả lập đăng nhập, thực tế nên gọi API
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.email === email) {
    return true
  }
  return false
}

export function register(name, email, password) {
  // Giả lập đăng ký, thực tế nên gọi API
  localStorage.setItem('user', JSON.stringify({ name, email }))
  return true
}

export function logout() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}
