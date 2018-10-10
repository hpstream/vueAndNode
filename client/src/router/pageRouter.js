/* Layout */
import Layout from '../views/layout/Layout'
export default [
  {
    path: '/setting',
    name: '权限设置',
    component: Layout,
    children: [
      {
        path: 'user',
        name: '用户管理',
        component: () => import('@/views/user/user'),
        meta: { title: 'user', icon: 'form' }
      },
      {
        path: 'part',
        name: '部门管理',
        component: () => import('@/views/user/user'),
        meta: { title: 'user', icon: 'form' }
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/user/user'),
        meta: { title: 'user', icon: 'form' }
      },
      {
        path: 'auth',
        name: '权限设置',
        component: () => import('@/views/user/user'),
        meta: { title: 'user', icon: 'form' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]