<template>
    <div id="app" class="d-block">
        <h1>Ứng dụng Blog nhỏ với Vue. js</h1>
        <CreatePost @add-post="addPost" />
        <PostList :posts="posts" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from '../components/CreatePost.vue'
import PostList from '../components/PostList.vue'

const posts = ref([])

function addPost(post) {
    posts.value.push(post)
}
</script>

<style>
#app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}
</style>