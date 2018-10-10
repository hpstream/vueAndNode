/**
 * 此页面控制商城部分
 */
/* Layout */
import Layout from '@/views/layout/Layout'
const base = '@/views/shopping';
export default   {
        path: '/shopping',
        name: '商城',
        routerId:'01_00_00',
        component: Layout,
        children: [
          {
            path: 'user',
            name: '道具管理',
            routerId:'01_01_00',
            component: () => import('@/views/shopping/tools/tools'),
            meta: { title: 'user'}
          },
          {
            path: 'role',
            name: '食品管理',
            routerId:'01_02_00',
            component: () => import('@/views/shopping/food/food'),
            meta: { title: 'user'}
          }
        ]
      }