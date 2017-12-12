<template>
    <div class="show-news-wrap">
        <div class="title-wrap">
            <sidebar  :currentIndex="myIndex" @select="changeText"></sidebar>
        </div>
        <div class="cont-wrap">
            <div class="news-cont" v-for="(news,index) in newsList" v-show="myIndex===index">
                <div class="title">
                    <img :src="news.logo" alt="">
                    <span>{{news.title}}</span>
                </div>
                <div v-if="news.title=== '咨询栏' " class="console-title">
                    <ul class="title-list">
                        <li>咨询标题</li>
                        <li>姓名</li>
                        <li>咨询时间</li>
                        <li>回复时间</li>
                        <li>操作</li>
                    </ul>
                </div>
                <div class="cont-list">
                    <ul class="_cont-item">
                        <li v-for="(item,index) in news.cont">
                            <div class="text-item" v-if="item.text">{{item.text}}</div>
                            <div class="name" v-if="item.name">{{item.name}}</div>
                            <div class="askTime" v-if="item.askTime">{{item.askTime}}</div>
                            <div class="returnTime" v-if="item.returnTime">{{item.returnTime}}</div>
                            <div class="time" v-if="item.time">{{item.time}}</div>
                            <div class="check" v-if="item.check">{{item.check}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sidebar from '../sidebar/sidebar.vue'
    const Err_ok = 0;
    export default{
        data(){
            return{
                myIndex:0,
                newsList: []
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.getnews()
            })
        },
        components:{sidebar},
        methods: {
            getnews(){
                this.$http.get('static/data.json').then((res) => {
                  this.newsList = res.data.news;
                })
            },
            changeText(index){
                this.myIndex=index;
            }
        }
    }

</script>

<style>
@import "news.css";
</style>