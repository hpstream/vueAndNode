/**
 * 此页面控制权限设置部分
 */
/* Layout */
import Layout from '../views/layout/Layout'
const base = '@/views/setting';
export default   {
        path: '/setting',
        name: '权限设置',
        routerId:'00_00_00',
        component: Layout,
        children: [
          {
            path: 'user',
            name: '用户管理',
            routerId:'00_01_00',
            component: () => import('@/views/setting/user/user'),
            meta: { title: 'user'}
          },
          {
            path: 'role',
            name: '角色管理',
            routerId:'00_02_00',
            component: () => import('@/views/setting/role/role'),
            meta: { title: 'user'}
          }
        ]
      }