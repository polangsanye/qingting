<template>
    <div class="about-us-wrap">
        <div class="title-wrap">
            <sidebar :secondTitle="secondTitle" :descTitle="desc" :currentIndex="myIndex" @select="changeText"></sidebar>
        </div>
        <div class="cont-wrap">
            <div class="cont-list" v-show="myIndex===0">
                <h3>公司简介</h3>
                <img class="company_logo" src="../../assets/img/pt_one.png" alt="">
                <p class="company_p">
                    首钢适建于1919年，迄今已有百年历史。首钢历经苦痛磨难、快速发展、改革腾飞、搬迁调整的历史阶段，目前已发展成为经营钢铁业、矿产资源业、环境产业、装备与汽车零部件制造业、建筑及房地产业、生产性服务业、金融服务业、海外产业等跨行业、跨地区、跨所有制、跨国经营跻身世界500强的大型企业集团，全资、控股及参股企业544家，集团员工10.6万人。
                </p>
                <p class="company_p">
                    首钢静态交通产业秉持“政企合作、服务城市、共赢发展”理念，借力供给侧结构性改革，整合城市运营资源组建大型平台公司-北京首钢城运控股有限公司。 城运公司以智能立体停车库的投资、建设、运营为核心业务，为缓解城市停车难题提供个性化解决方案、未用户提供城市级静态交通规划设计、全类型停车设施的定制设计、投资建设、停车设备制造安装、停车资产管理、停车场运营、新能源汽车充电、车库光伏发电及储能等全产业链综合服务。
                </p>
            </div>
            <div class="cont-list" v-show="myIndex===1">
                <h3>联系我们</h3>
                <ul class="ul-list">
                    <li>
                        <img src="../../assets/img/shangwu.png" alt="">
                        <p>商务联系</p>
                        <p>shangwu@shiaohd.cn</p>
                    </li>
                    <li>
                        <img src="../../assets/img/kefu.png" alt="">
                        <p>客服热线</p>
                        <p>400-800-8000</p>
                    </li>
                    <li>
                        <img src="../../assets/img/qiye.png" alt="">
                        <p>企业合作</p>
                        <p>qiyehezuo@shiaohd.cn</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from '../sidebar/sidebar.vue'
    export default{
        data(){
            return {
                secondTitle: '关于我们',
                myIndex: 0,
                desc: ['公司简介', '联系我们']
            }
        },
        components: {
            sidebar
        },
        methods: {
            changeText(index){
                this.myIndex = index
            }
        }
    }

</script>

<style>
    @import "about_us.css";
</style>