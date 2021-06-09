<template>
  <el-aside width="200px" id="list">
    <div class="search">
      <el-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="el-icon-search"
        v-model="search"
        v-if="searchBtn == false ? true : false"
      >
      </el-input>
      <el-popover
        placement="right-start"
        visible-arrow
        width="200"
        trigger="click"
        v-if="searchBtn"
      >
        <el-input
          size="medium"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          clearable
          v-model="search"
        >
        </el-input>
        <el-button slot="reference" icon="el-icon-search"></el-button>
      </el-popover>
    </div>
    <div class="friendList">
      <div class="user" draggable="true" v-for="index in list" :key="index.id" @click="liao(index.id)">
        <div class="userAvatar">
          <el-image
            :src="index.avatar"
          ></el-image>
        </div>
        <div class="info">
          <div class="uname">{{index.uname}}</div>
          <div class="news" v-if="index.context[index.context.length-1].type=='text'">{{index.context[index.context.length-1].context}}</div>
          <div class="news" v-else>{{index.context[index.context.length-1].conmp}}</div>
          
        </div>
        <div class="infoTime">
            <span ref="time">{{index.time}}</span>
        </div>
      </div>
    </div>
    <div
      ref="colResize"
      class="colResize"
      @mousedown="resizeRight"
      @mouseup="rightUp"
    ></div>
  </el-aside>
</template>
<script>
export default {
    props:['userList'],
	data() {
        return {
            search: '',
            searchBtn: false,
            list: this.$props.userList
        }
    },
    watch: {
        userList(val) {
            this.list = val
        }
    },
    methods: {
        resizeRight(event) {
            const list = document.getElementById('list')
            // console.log(list)
            // const colResize = this.$refs.colResize
            // console.log(colResize)
            const times = this.$refs.time
            const minWidth = 80
            const maxWidth = 680
            let firstX = event.clientX
            let listWidth = list.offsetWidth
            document.onmousemove = e =>{
                let width = listWidth + (e.clientX - firstX)
                if(width<minWidth) {
                    this.searchBtn = true
                    for(var time of times) {
                        time.style.display = 'none'
                    }
                    document.onmousemove = null
                    return
                }else if(width>minWidth&&width<maxWidth) {
                    this.searchBtn = false
                    for(var time of times) {
                        time.style.display = 'block'
                    }
                    list.style.width = width + 'px'
                }else if(width>maxWidth) {
                    document.onmousemove = null
                    return
                }
            }
        },
        rightUp() {
            document.onmousemove = null
            document.onmouseup = null
        },
        liao(id) {
            for(var key in this.list) {
                if(this.list[key].id===id) {
                    this.$emit('aside', this.list[key])
                }
            }
        }
    }
};
</script>
<style lang="scss" scope>
        #list {
            overflow-y: auto;
        }
        #list::-webkit-scrollbar {
            /*设置滚动条的宽度*/
            width: 8px;
        }
        #list::-webkit-scrollbar-thumb {
            /*设置滚动条圆角*/
            border-radius: 4px;
            /*设置滚动条颜色*/
            background-color: #e6e6e6;
        }

        #list::-webkit-scrollbar-track {
            /*设置轨道颜色, 与背景色相同, 以便隐藏*/
            background: #fff;
        }
        .el-aside {
            border: none;
            height: 100%;
            position: relative;
            .search {
                margin: 35px auto;
                .el-input {
                    width: 80%;
                }
                .el-button {
                    border: none;
                }
                .el-button:hover {
                    color: #fc6719;
                }
            }
            .friendList {
                .user {
                    height: 60px;
                    position: relative;
                    padding-top: 10px;
                    cursor: pointer;
                    .userAvatar {
                        width: 50px;
                        height: 50px;
                        border: 1px solid #e6e6e6;
                        border-radius: 4px;
                        position: absolute;
                        left: 15px;
                    }
                    .el-image {
                        width: 100%;
                        height: 100%;
                        border-radius: 3px;
                    }
                    .info {
                        position: relative;
                        position: absolute;
                        left: 80px;
                        .uname {
                            font-size: 16px;
                        }
                        .news {
                            font-size: 10px;
                            color: #aaa;
                        }
                        .uname,
                        .news {
                            padding: 5px;
                            text-align: left;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                    .infoTime {
                        font-size: 12px;
                        color: #888;
                        z-index: 100;
                        position: absolute;
                        right: 10px;
                    }
                }
                .user:hover {
                    background-color: #e6e6e6;
                }
            }
            .colResize {
                height: 100%;
                border-right: 1px solid #e6e6e6;
                position: absolute;
                top: 0;
                right: 0;
                cursor: w-resize;
            }
        }
    .el-popover {
        height: 400px;
    }
</style>