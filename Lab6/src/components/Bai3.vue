<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            <div class="col-sm-4 d-flex align-items-stretch" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.image" class="img-fluid" alt="Hình ảnh" />
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
const items = ([
    { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là...', image: img1 },
    { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại...', image: img2 },
    { title: '9 loại đậu bổ dưỡng nên dùng', content: 'Đậu lăng...', image: img3 },
])
</script>

<style scoped></style>
