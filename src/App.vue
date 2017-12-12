<template>
    <div id="app">
        <div class="top">
            <div class="detail-wrap">
                <div class="head-wrap">
                    <div class="head">
                        <div class="logo">
                            <img src="./assets/img/logo.png" alt="">
                            <span>中钢城发科技有限公司</span>
                        </div>
                        <div class="tab">
                            <div class="tab_item">
                                <router-link to="/homepage">首页</router-link>
                            </div>
                            <div class="tab_item">
                                <router-link to="/show_news">信息展示</router-link>
                            </div>
                            <div class="tab_item">
                                <router-link to="/show_project">项目展示</router-link>
                            </div>
                            <div class="tab_item">
                                <router-link to="/about_us">关于我们</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <router-view></router-view>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-in">版权所有：北京市交通委员会 技术支持：北京首钢城运控股有限公司 京ICP备05050505号 京公网安备11010602060206号</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabIndex: 0
            };
        },
        methods: {

        }
    }
</script>

<style lang="less" rel="stylesheet/less">
    #app {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #f2f2f2;
        .top {
            min-height: 100%;
            .detail-wrap {
                padding-bottom: 30px;
                .head-wrap {
                    box-shadow: 0 2px 0 0 #20a0ff;
                    background: #fff;
                    .head {
                        width: 990px;
                        margin: 0 auto;
                        display: flex;
                        .logo {
                            flex: 0 0 252px;
                            height: 56px;
                            line-height: 56px;
                            font-size: 18px;
                            img {
                                vertical-align: middle;
                            }
                        }
                        .tab {
                            flex: 1;
                            display: flex;
                            justify-content: flex-end;
                            .tab_item {
                                flex: 0 0 100px;
                                font-size: 18px;
                                text-align: center;
                                height: 56px;
                                line-height: 56px;
                                margin-right: 5px;
                                a {
                                    display: block;
                                    color: #333;
                                    &:hover {
                                        background: #dddfe6;
                                    }
                                    &.router-link-active{
                                        background: #dddfe6;
                                    }
                                }
                                &:last-child{
                                    margin-right: 0;
                                }

                            }
                        }
                    }
                }
            }
        }
        .bottom {
            height: 30px;
            margin-top: -30px;
            line-height: 30px;
            background-color: #003B7A;
            .bottom-in {
                width: 990px;
                margin: 0 auto;
                text-align: center;
                font-size: 12px;
                color: #FFFFFF;
            }
        }
    }
</style>