import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
// tree node
import AcademyProfile from '@/components/Tree/AcademyProfile'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/AcademyProfile/index',
      children: [{
        path: '/AcademyProfile/:page',
        name: AcademyProfile,
        component: AcademyProfile
      },
      {
        path: '/News/:page',
        // name: News,
        component: resolve => require(['@/components/Tree/News.vue'], resolve)
      },
      {
        path: '/Notice/:page',
        component: resolve => require(['@/components/Tree/Notice.vue'], resolve)
      }
      ]
    },
    {
      path: '/Student',
      component: resolve => require(['@/components/Identity/Student.vue'], resolve)
    },
    {
      path: '/Alumnus',
      component: resolve => require(['@/components/Identity/Alumnus.vue'], resolve)
    },
    {
      path: '/mobileIndex',
      component: resolve => require(['@/components/mobile/mobileIndex'], resolve)
    }
  ]
})
