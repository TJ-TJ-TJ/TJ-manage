<template>
    <el-container>
        <el-aside width="68px">
            <div class="avatar">
                <el-badge is-dot type='success' class="state">
                    <el-image 
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
                </el-badge>
                
            </div>
            <el-menu class="topMenu"
            collapse
            active-text-color="#ff9645"
            default-active="1"
            router>
                <el-menu-item index='/info'>
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index='/chat'>
                    <i class="el-icon-chat-dot-round"></i>
                    <span slot="title">消息</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-star-on"></i>
                    <span slot="title">收藏</span>
                </el-menu-item>
            </el-menu>
            <el-menu class="bottomMenu" collapse>
                <el-menu-item>
                    <i class="el-icon-menu"></i>
                    <span slot="title">更多</span>
                </el-menu-item>
                <el-menu-item>
                    <i class="el-icon-setting"></i>
                    <span slot="title">设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
    created() {
        window.document.title = '途家-管理面板'
    }
}
</script>
<style lang="scss" scope>
    .el-container {
        width: 100%;
        height: 100%;
        min-height: 717px;
        .el-aside {
            border-right: 1px solid #e6e6e6;
            overflow: hidden;
            .avatar {
                width: 50px;
                height: 50px;
                border: 1px solid #e6e6e6;
                border-radius: 4px;
                margin: 30% 5px;
            }
            .state {
                width: 100%;
                height: 100%;
            }
            .el-image {
                width: 100%;
                height: 100%;
                border-radius: 3px;
            }
            .el-menu {
                border: none;
            }
            .bottomMenu {
                margin-top: 350px;
            }
        }
        .el-main {
            padding: 0;
        }
    }
</style>