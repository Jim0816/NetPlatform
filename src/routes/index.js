

// 导入自定义页面组件
import Login from '../pages/Login'
import Error from '../pages/Error'
import System from '../pages/System'
import Business from '../pages/Analyse/Business'
import DataFlow from '../pages/Analyse/DataFlow'
import Index from '../pages/Analyse/Index'
import Monitor from '../pages/Monitor'


// 导入图片logo
import net_n from '../asserts/photo/net_n.png'
import map_n from '../asserts/photo/map_n.png'
import analysis_n from '../asserts/photo/analysis_n.png'
import net_y from '../asserts/photo/net_y.png'
import map_y from '../asserts/photo/map_y.png'
import analysis_y from '../asserts/photo/analysis_y.png'

export const mainRoutes = [
    {
        path: '/login',
        title: '登陆',
        component: Login
    },
    {
        path: '/404',
        title: '错误',
        component: Error
    }
]


export const adminRoutes = [
    //  =========== 系统配置 ==============
    {
        path: '/admin/system',
        title: '系统配置',
        component: System,
        children: [],
        exact: true,
        show: false,
        showIcon: map_y,
        hideIcon: map_n,
    },
    //  =========== 专家分析 ==============
    {
        path: '/admin/analyse',
        title: '专家分析',
        component: Business,
        default: '/admin/analyse_business',
        exact: true,
        show: true,
        showIcon: analysis_y,
        hideIcon: analysis_n,
        children: [
            {
                path: '/admin/analyse_business',
                title: '业务分析',
                component: Business,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_dataflow',
                title: '流量分析',
                component: DataFlow,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_index',
                title: '指标分析',
                component: Index,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            }
        ]
    },
    //  =========== 实时监控 ==============
    {
        path: '/admin/monitor',
        title: '实时监控',
        component: Monitor,
        exact: true,
        show: false,
        showIcon: net_y,
        hideIcon: net_n,
        children: []
    },
]