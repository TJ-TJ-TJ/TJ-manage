<template>
    <div>
        <input type="text" v-model="uname">
        <input type="text" v-model="upwd">
        <button @click="login">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            uname: '',
            upwd: '',
            uid: 1,
        }
    },
    methods: {
        login() {
            if(this.uname=='1234'&& this.upwd == '123') {
                window.sessionStorage.setItem('token', this.uid)
                window.sessionStorage.setItem('avatar', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
                this.$router.push('/')
            }
        }
    }
}
</script>
<style lang="">
    
</style>