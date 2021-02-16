<template >
    <div>
        <h1>may tinh</h1>
        <div class="row">
            <div class="col-3 d-flex">
                <input type="text" v-model="a">
                <input type="text" style="width : 40px; margin-left : 65px" v-model="tinh">
            </div>
            <div class="col-3">
                <input type="text" v-model="b"> = 
            </div>
            <div class="col-3">{{$store.state.tong}}</div>
            <div class="col-3"><button @click="tinhtong({a, b, tinh})">tinh</button></div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props : ['ten'],
    data() {
        return {
            a : null,
            b : null,
            tinh : ''
        }
    },
    methods: {
        ...mapActions(['tinhtong'])
    }
}
</script>

<style lang="">
    
</style>