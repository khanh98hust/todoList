<template>
    <div>
        <div class="container">
            <h1>tac gia store :  {{$store.state.tacgia}}</h1>
            <h5>Ten cong viec : </h5>
            <input v-model="tenCongViec" type="text" class="form-control">
            <br>
            <h5>Noi dung :</h5>
            <input v-model="noiDung" type="text" class="form-control">
            <br>
            <button class="btn btn-success" @click="themcongviec">Them</button>
            <hr>
            <div v-for="item in list" :key="item._id">
                <p>ten : {{item.ten}} - noi dung : {{item.noidung}}</p>
                <button class="btn btn-danger" @click="xoa(item._id)">xoa</button>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../services/callApi'
export default {
    data() {
        return {
            tenCongViec : '',
            noiDung : '',
            list : []
        }
    },
    methods: {
        themcongviec(){
            api.post('/add', {ten : this.tenCongViec, noidung : this.noiDung})
            this.tenCongViec = ''
            this.noiDung = ''
            this.laycongviec()
        },
        async laycongviec(){
            this.list = (await api.get('/all')).data
        },
        async xoa(id){
            await api.delete(`/xoa/${id}`)
            this.laycongviec()
        }
    },
    mounted() {
        this.laycongviec()
    },
}
</script>

<style lang="">
    
</style>