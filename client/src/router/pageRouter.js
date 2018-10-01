/* Layout */
import Layout from '../views/layout/Layout'
export default [
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/form',
    name:'from',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
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