<template>
    <el-container class="chatWin">
        <el-header>
            <span class="username" v-if="chat.uname==''">请选择联系人</span>
            <span class="username" v-else>{{chat.uname}}</span>
        </el-header>
        <el-main v-if="chat.uname==null"></el-main>
        <el-main v-else>
            <ul>
                <li class="adverse" v-for="item in chat.context" :key="item.id">
                    <!-- 对方消息 -->
                    <div class="info">
                        <div class="chatBox">
                            <div class="winAvatar" draggable="true">
                                <el-image :src="chat.avatar"></el-image>
                            </div>
                            <div class="message">
                                <div class="time">{{chat.time}}</div>
                                <div class="messInfo" v-if="item.type=='text'">{{item.context}}</div>
                                <div class="messInfo" v-else>{{item.conmp}}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="myinfo" v-for="index in myChat" :key="index.id">
                    <!-- 我的消息 -->
                    <div class="adminInfo" v-if="chat.uname==index.uname">
                        <div class="message">
                            <div class="messInfo" v-if="index.type=='text'">{{index.context}}</div>
                            <div class="messInfo" v-else>{{index.conmp}}</div>
                        </div>
                        <div class="winAvatar" draggable="true">
                            <el-image :src="myAvatar"></el-image>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                
            </div>
        </el-main>
        <div ref="rowResize" class="rowResize" @mousedown="rowResize" @mouseup="topUp"></div>
        <el-footer id="write" height="30%">
            <el-input
                type="textarea"
                placeholder="在此处编辑信息"
                v-model="textarea"
                autosize>
            </el-input>
            <el-button class="send" size="mini" type="primary">点击发送&#x3000;(s)</el-button>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    props: ['chatList'],
    data() {
        return {
            textarea: '',
            chat: this.$props.chatList,
            myChat: [{
                id: 1, type: 'text', conmp: '', context: '是的是的，你说的真对',uname: '赵旭小狗'
            },
            {
                id: 2, type: 'text', conmp: '', context: '是的是的，你说的真对',uname: '赵旭小狗'
            }],
            myAvatar: window.sessionStorage.getItem('avatar'),
            id: window.sessionStorage.getItem('token')
        }
    },
    watch: {
        chatList(val) {
            this.chat = val
        }
    },
    methods: {
        rowResize(event) {
            const write = document.getElementById('write')
            const rowResize = this.$refs.rowResize
            let firstY = event.clientY
            let writeHeight = write.offsetHeight
            const minHeight = 200
            const maxHeight = 500
            document.onmousemove = e =>{
                let height = writeHeight - (e.clientY - firstY)
                if(height < maxHeight && height > minHeight) {
                    rowResize.style.bottom = height + 'px'
                    write.style.height = height + 'px'
                }else {
                    document.onmousemove = null
                }
            }
            console.log(this.chat)
        },
        topUp() {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}
</script>
<style lang="scss" scope>
    .chatWin {
        position: relative;
        .el-header,.el-main,.el-footer {
            padding: 0;
        }
        .el-header {
            text-align: left;
            border-bottom: 1px solid #e6e6e6;
            line-height: 70px;
            .username {
                font-size: 18px;
                padding: 20px;
            }
        }
        .rowResize {
            width: 100%;
            cursor: n-resize;
            border-top: 1px solid #e6e6e6;
            position: absolute;
            bottom: 30%;
        }
        .el-footer {
            position: relative;
            .el-textarea__inner {
                border:none;
                resize: none;
                overflow-y: hidden;
                font-size: 12px;
            }
            .send {
                position: absolute;
                right: 5%;
                bottom: 15%;
            }
        }
        .el-main {
            ul {
                clear: both;
                width: 100%;
            }
            .adverse {
                align-self: flex-start;
                margin-top: 10px;
                margin-left: 10px;
                .info {
                    .chatBox {
                        display: flex;
                        // justify-content: center;
                        .winAvatar {
                            width: 40px;
                            height: 40px;
                            border: 1px solid #e6e6e6;
                            border-radius: 4px;
                            box-sizing: border-box;
                            .el-image {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .message {
                            // position: relative;
                            margin-left: 10px;
                            margin-bottom: 10px;
                            .messInfo {
                                padding-top: 10px;
                                padding-bottom: 10px;
                                padding: 10px;
                                border-radius: 4px;
                                background-color: #888;
                                max-width: 200px;
                                display: block;
                            }
                        }
                    }
                }
            }
            // 我的消息
            .myinfo {
                clear: both;
                display: block;
                margin-top: 10px;
                margin-right: 10px;
                list-style-type: none;
                .adminInfo {
                    float: right;
                    display: flex;
                    .message {
                        margin-right: 10px;
                        margin-bottom: 10px;
                        .messInfo {
                            padding-top: 10px;
                            padding-bottom: 10px;
                            padding: 10px;
                            border-radius: 4px;
                            background-color: #ff9645;
                            max-width: 200px;
                            display: block;
                        }
                    }
                    .winAvatar {
                        width: 40px;
                        height: 40px;
                        border: 1px solid #e6e6e6;
                        border-radius: 4px;
                        box-sizing: border-box;
                        .el-image {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>