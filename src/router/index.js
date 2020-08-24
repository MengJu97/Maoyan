import Vue from 'vue'
import VueRouter from "vue-router";
// import Index from "../views/Index";
// import Video from "../views/Video";
// import ShortVideo from "../views/ShortVideo";
// import Show from "../views/Show";
// import Mine from "../views/Mine";
// import MovieDetail from "../views/MovieDetail";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect:'/index/hot'
    },
    {
        path: '/index',
        component: () => import ("../views/Index"),
        children: [
            {
                path:'hot',
                component:()=>import("../components/index/subRoute/Hot")
            },
            {
                path: 'cinema',
                component:()=>import("../components/index/subRoute/Cinema")
            },
            {
                path: 'coming',
                component:()=>import("../components/index/subRoute/Coming")
            },
            {
                path: 'classic',
                component:()=>import("../components/index/subRoute/Classic")
            }
            ]
    },
    {
        path: '/video',
        component: () => import("../views/Video")
    },
    {

        path: '/short',
        component: () => import("../views/ShortVideo")
    },
    {
        path: '/show',
        component: () => import("../views/Show")
    },
    {
        path: '/mine',
        component: () => import("../views/Mine")
    },
    {
        path: '/detail/:id',
        component:()=>import("../views/MovieDetail")
    }
]

const router = new VueRouter({
    routes
})

export default router;