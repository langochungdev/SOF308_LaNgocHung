<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <div class="p-3 bg-secondary-subtle rounded-3">
                    <h3 class="mb-4 text-center">Form Đăng Ký</h3>
                    <form @submit.prevent="signUp" class="was-validated">
                        <div class="mb-3">
                            <label for="name" class="form-label">Họ tên:</label>
                            <input type="text" v-model="formData.hoTen" class="form-control" id="name" placeholder="Nhập họ tên" required>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" v-model="formData.email" class="form-control" id="email" placeholder="Nhập email" required>
                        </div>

                        <div class="mb-3">
                            <label for="password" class="form-label">Mật khẩu:</label>
                            <input type="password" v-model="formData.matKhau" class="form-control" id="password" placeholder="Nhập mật khẩu" required>
                        </div>

                        <div class="mb-3">
                            <label for="dob" class="form-label">Ngày sinh:</label>
                            <input type="date" v-model="formData.ngaySinh" class="form-control" id="dob" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Giới tính:</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="formData.gioiTinh" name="gender" id="male" value="Nam" required>
                                    <label class="form-check-label" for="male">Nam</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="formData.gioiTinh" name="gender" id="female" value="Nữ" required>
                                    <label class="form-check-label" for="female">Nữ</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" v-model="formData.gioiTinh" name="gender" id="other" value="Khác" required>
                                    <label class="form-check-label" for="other">Khác</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Ngôn ngữ:</label>
                            <div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="language-vn" value="Tiếng Việt" v-model="formData.ngonNgu">
                                    <label class="form-check-label" for="language-vn">Tiếng Việt</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="language-en" value="Tiếng Anh" v-model="formData.ngonNgu">
                                    <label class="form-check-label" for="language-en">Tiếng Anh</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="language-jp" value="Tiếng Nhật" v-model="formData.ngonNgu">
                                    <label class="form-check-label" for="language-jp">Tiếng Nhật</label>
                                </div>
                            </div>

                            <div v-if="!isLanguageSelected && isFormSubmitted" class="text-danger mt-2">
                                Vui lòng chọn ít nhất một ngôn ngữ.
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Đăng ký</button>
                    </form>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-3 bg-success text-light rounded-3" v-if="dataDangKy">
                    <h3 class="mb-4 text-center">Thông tin đã đăng ký:</h3>
                    <p><strong>Họ tên:</strong> {{ showDangKy.hoTen }}</p>
                    <p><strong>Email:</strong> {{ showDangKy.email }}</p>
                    <p><strong>Ngày sinh:</strong> {{ showDangKy.ngaySinh }}</p>
                    <p><strong>Giới tính:</strong> {{ showDangKy.gioiTinh }}</p>
                    <p><strong>Ngôn ngữ:</strong> {{ showDangKy.ngonNgu.join(', ') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
    hoTen: '',
    email: '',
    matKhau: '',
    ngaySinh: '',
    gioiTinh: '',
    ngonNgu: []
})

const showDangKy = ref({})
const dataDangKy = ref(false)
const isFormSubmitted = ref(false)
const isLanguageSelected = ref(true)


const signUp = () => {
    isFormSubmitted.value = true
    if (formData.value.ngonNgu.length === 0) {
        isLanguageSelected.value = false
        return
    } else {
        isLanguageSelected.value = true
    }

    showDangKy.value = { ...formData.value }
    dataDangKy.value = true

    formData.value = {
        hoTen: '',
        email: '',
        matKhau: '',
        ngaySinh: '',
        gioiTinh: '',
        ngonNgu: []
    }
    isFormSubmitted.value = false
}
</script>
