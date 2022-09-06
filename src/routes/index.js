

// 导入自定义页面组件
import Login from '../pages/Login'
import Error from '../pages/Error'
import System from '../pages/System'
import BusinessAnalyse from '../pages/Analyse/BusinessAnalyse'
import BusinessTrace from '../pages/Analyse/BusinessTrace'
import SignalToken from '../pages/Analyse/SignalToken'
import Report from '../pages/Analyse/Report'
import CheckState from '../pages/Analyse/CheckState'
import Alarm from '../pages/Analyse/Alarm'
import Offline from '../pages/Analyse/Offline'


import Catch from '../pages/DataStore/Catch'
import Filter from '../pages/DataStore/Filter'
import Online from '../pages/DataStore/Online'
import Classify from '../pages/DataStore/Classify'
import Export from '../pages/DataStore/Export'
import Sync from '../pages/DataStore/Sync'
import Import from '../pages/DataStore/Import'
import Mirror from '../pages/DataStore/Mirror'


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
        children: [
            {
                path: '/admin/system_config',
                title: '网元配置',
                component: System,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/system_base',
                title: '基站配置',
                component: System,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
        ]
    },
    //  =========== 专家分析 ==============
    {
        path: '/admin/analyse',
        title: '数据分析',
        component: BusinessAnalyse,
        default: '/admin/analyse_business',
        exact: true,
        show: true,
        showIcon: analysis_y,
        hideIcon: analysis_n,
        children: [
            {
                path: '/admin/analyse_business',
                title: '业务分析',
                component: BusinessAnalyse,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_trace',
                title: '业务跟踪',
                component: BusinessTrace,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_signal_token',
                title: '网络信令数据分析',
                component: SignalToken,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_report',
                title: '报表分析',
                component: Report,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_check_state',
                title: '设备自检及状态指示',
                component: CheckState,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_alarm',
                title: '告警',
                component: Alarm,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/analyse_offline',
                title: '离线分析',
                component: Offline,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            }
        ]
    },
    //  =========== 数据存储 ==============
    {
        path: '/admin/datastore',
        title: '数据存储',
        component: Catch,
        default: '/admin/datastore_catch',
        exact: true,
        show: false,
        showIcon: net_y,
        hideIcon: net_n,
        children: [
            {
                path: '/admin/datastore_catch',
                title: '数据捕捉',
                component: Catch,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_filter',
                title: '数据过滤',
                component: Filter,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_classify',
                title: '数据分类',
                component: Classify,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_online',
                title: '在线分析',
                component: Online,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_export',
                title: '数据导出',
                component: Export,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_import',
                title: '数据导入',
                component: Import,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            },
            {
                path: '/admin/datastore_mirror',
                title: '数据镜像',
                component: Mirror,
                exact: true,
                show: false,
                showIcon: net_y,
                hideIcon: net_n,
            }
        ]
    },
]