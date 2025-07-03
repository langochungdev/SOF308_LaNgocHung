<template>
    <div>
        <Login v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

        <BaiViet v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './Login.vue'
import BaiViet from './BaiViet.vue'

const isLoggedIn = ref(false)
const loggedInUser = ref('')

function handleLoginSuccess(username) {
    loggedInUser.value = username
    isLoggedIn.value = true
}
</script>