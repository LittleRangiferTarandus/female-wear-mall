import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path:'/home',
    name:'home',
    component:()=>import("../views/home/home.vue"),
  },
  {
    path:'/category',
    name:'category',
    component:()=>import("../views/category/category.vue")
  },
  {
    path:'/shopping',
    name:'shopping',
    component:()=>import("../views/shopping/shopping.vue")
  },
  {
    path:'/profile',
    name:'profile',
    component:()=>import("../views/profile/profile.vue")
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:()=>import("../views/detail/detail.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
