<template>
    <div id="app">
        <nav>
            <router-link to="/">Trang chủ</router-link> |
            <router-link to="/blog">Blog</router-link> |
            <router-link to="/profile/info">Hồ sơ</router-link> |
            <router-link to="/dashboard">Dashboard</router-link> |
            <router-link to="/login">Đăng nhập</router-link>
        </nav>

        <hr />

        <router-view />
    </div>
</template>

<style scoped>
nav {
    background-color: #f0f0f0;
    padding: 10px;
}

nav a {
    margin-right: 10px;
    text-decoration: none;
    color: #333;
}

nav a.router-link-exact-active {
    font-weight: bold;
    color: blue;
}
</style>
  
