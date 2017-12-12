<template>
<div class="project-wrap">
    <div class="title-wrap">
        <sidebar :secondTitle="secondTitle" :descTitle="desc" :currentIndex="myIndex" @select="changeText"></sidebar>
    </div>
    <div class="cont-wrap">
        <div class="news-cont" v-for="(project,index) in projectList" v-show="myIndex===index">
            <div class="title">
                <img :src="project.logo" alt="" width="200">
                <span>{{project.text}}</span>
            </div>
            <div class="cont-list">
                <ul class="_cont-item">
                    <li v-for="(item,index) in project.cont">
                        <div class="img-cont">
                            <img :src="item.large_logo" alt="">
                        </div>
                        <div class="news-item">
                            <div class="small-title">
                                <div class="item-title">{{item.title}}</div>
                                <div class="item-time">{{item.time}}</div>
                            </div>
                            <p class="item-detail">{{item.news}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    import sidebar from '../sidebar/sidebar.vue'
    const Err_ok=0;
    export default{
        data(){
            return{
                myIndex:0,
                projectList: [],
                secondTitle:'项目展示',
                desc:['立体停车','实例展示','智慧停车']
            }
        },
        components:{sidebar},
        mounted(){
            this.$nextTick(() => {
                this.getProject()
            })
        },
        methods: {
            getProject(){
                this.$http.get('static/data.json').then((res) => {
                  this.projectList = res.data.project;
                })
            },
            changeText(index){
                this.myIndex=index
            }
        }
    }

</script>

<style>
@import "project.css";
</style>