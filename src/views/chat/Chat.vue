<template>
    <el-container class="box">
        <aside-list :userList="userList" @aside="list"></aside-list>
        <main-write :chatList="chatList"></main-write>
    </el-container>
</template>
<script>
import asideList from './modules/Aside'
import mainWrite from './modules/main'
export default {
    data() {
        return {
            chatList: {id: '', avatar: '',uname: '', context: null,},
            userList: [
                {
                    id: 2,
                    uname: '赵旭小狗',
                    context: [{id:1,type: 'text',conmp: '', context: '赵旭是个狗der', uid: 1}, 
                    {id:2,type: 'text', conmp:'',context:'赵旭是傻子', uid: 1},
                    {id:3,type: 'text', conmp:'',context:'赵旭不当人', uid: 1},
                    {id:4,type: 'text', conmp:'',context:'赵旭是傻子', uid: 1}],
                    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    time: '12:00'
                },
                {
                    id: 3,
                    uname: '小叮当',
                    context: [{id:1,type: 'text',conmp: '', context: 'helloword', uid: 2}],
                    avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg',
                    time: '13:00'
                },
                {
                    id: 4,
                    uname: '你好',
                    context: [{id:1,type: 'text',conmp: '', context: '你好世界', uid: 3}],
                    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    time: '昨天'
                }
            ]
        }
    },
    components: {
        asideList,
        mainWrite
    },
    methods: {
        list(arr) {
            this.chatList.id = arr.id,
            this.chatList.avatar = arr.avatar,
            this.chatList.uname = arr.uname,
            this.chatList.context = arr.context
        }
    }
}
</script>
<style lang="scss" scope>
    .box {
        width: 100%;
        height: 100%;
    }
</style>