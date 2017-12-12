<template>
<div class="sidebar">
    <div class="bread-crumbs">
        <span>您所在的位置:{{secondTitle}}>{{bread}}</span>
    </div>
    <div class="title-list">
        <ul>t
            <li v-for="(bar,index) in descTitle" :class="{'active':index==currentIndex}" @click="changeText(index)">
                {{bar}}
                <img src="../../assets/img/jiantou.png" alt="">
            </li>
        </ul>
    </div>
</div>
</template>
<script>
    const nowIndex=0;
    export default{
        props:{
            currentIndex:{
                type:Number,
                default:nowIndex,
            },
            secondTitle:{
                type:String,
                default:'信息展示'
            },
            descTitle:{
                type:Array,
                default(){
                    return ['公布栏','新闻转载','咨询栏']
                }
            }
        },
        computed:{
            bread(){
                return this.descTitle[this.currentIndex]
            }
        },
        methods:{
            changeText(index){
                this.$emit('select',index)
            }
        }
    }

</script>
<style>
@import "sidebar.css";
</style>