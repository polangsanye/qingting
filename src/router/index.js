import Vue from 'vue'
import Router from 'vue-router'
import homepage from '../components/homepage/homepage.vue'
import show_news from '../components/show_news/show_news.vue'
import show_project from '../components/show_project/show_project.vue'
import about_us from '../components/about_us/about_us.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/homepage',
            component: homepage
        },
        {
            path: '/show_news',
            component: show_news
        },
        {
            path: '/show_project',
            component: show_project
        },
        {
            path: '/about_us',
            component: about_us
        },
        {
            path:'*',redirect:'/homepage'
        }
    ]
})
