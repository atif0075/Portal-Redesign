import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/profile',
        component: () => import('../views/MainContant/Profile.vue')
      },
      {
        path: '/results',
        component: () => import('../views/MainContant/Results.vue')
      },
      {
        path: '/enrollment',
        component: () => import('../views/MainContant/Enrollment.vue')
      },
      {
        path: '/all-enrollments',
        component: () => import('../views/MainContant/AllEnrollment.vue')
      },
      {
        path: '/timetable',
        component: () => import('../views/MainContant/Timetable.vue')
      },
      {
        path: '/attendance',
        component: () => import('../views/MainContant/Attendance.vue')
      },
      {
        path: '/datesheet',
        component: () => import('../views/MainContant/Datesheet.vue')
      },
      {
        path: '/qec-evaluation',
        component: () => import('../views/MainContant/QEC.vue')
      },
      {
        path: '/dsa-evaluation',
        component: () => import('../views/MainContant/DSA.vue')
      },
      {
        path: '/rollno',
        component: () => import('../views/MainContant/Roll.vue')
      },
      {
        path: '/membership',
        component: () => import('../views/MainContant/Membership.vue')
      },
      {
        path: '/memberships',
        component: () => import('../views/MainContant/Membership.vue')
      },
      {
        path: '/visits',
        component: () => import('../views/MainContant/Visits.vue')
      },
      {
        path: '/messageboard',
        component: () => import('../views/MainContant/Message.vue')
      },
      {
        path: '/qualification',
        component: () => import('../views/MainContant/Qualification.vue')
      },
      {
        path: '/settings',
        component: () => import('../views/MainContant/Settings.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
