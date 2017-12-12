<template>
    <div class="shouye">
        <div class="swipper-wrap">
            <ul>
                <li v-for="(imgsrc,index) in shouyeMsg.imgList">
                    <img :src="imgsrc" width="688" height="300" v-show="index===currentIndex">
                </li>
            </ul>
        </div>
        <div class="news-wrap">
            <ul class="title">
                <li class="title-item" @mouseenter="changeText(index)" v-for="(item,index) in title" :class="{'active':index===activeIndex}">{{item}}</li>
            </ul>

            <div class="text">
                <ul class="text-wrap" v-for="(texts,index) in shouyeMsg.text" v-show="index===activeIndex">
                    <li class="text-item" v-for="(text,index) in texts">
                        <a href="#">{{text}}</a>
                    </li>
                    <li class="text-item" v-show="texts.length===0"><a href="">暂无咨询</a></li>
                </ul>
            </div>
        </div>
        <div class="details-wrap">
            <ul>
                <li class="detail-item" v-for="(detail,index) in shouyeMsg.details">
                    <div class="title">
                        <div class="left">
                            <img :src="detail.logo" >
                            <span>{{detail.title}}</span>
                        </div>
                        <a href="" class="more">更多></a>
                    </div>
                    <div>
                        <img :src="detail.large_logo" alt="">
                    </div>
                    <p>{{detail.sub_title}}</p>
                    <p>{{detail.content}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    const ERROK = 0;
    export default{
        data(){
            return {
                shouyeMsg:{},
                currentIndex: 0,
                title:["公布栏","新闻转载","咨询栏"],
                activeIndex:0,
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.shouyeData();
                this.changeImg();
            })
        },
        methods: {
            shouyeData(){
                this.$http.get('static/data.json').then((res) => {
                  this.shouyeMsg = res.data.homepage;
                })
            },
            changeImg(){
                setInterval(() => {
                    this.currentIndex += 1;
                    if (this.currentIndex === this.shouyeMsg.imgList.length) {
                        this.currentIndex = 0
                    }
                }, 2000)
            },
            changeText(index){
                this.activeIndex=index;
            }
        }
    }

</script>

<style>
    @import "homepage.css";
</style>