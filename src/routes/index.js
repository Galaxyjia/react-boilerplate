import Login from "../pages/Login/Login";
import Index from "../pages/admin/dashboard/Index";
import List from "../pages/admin/products/List";
import Edit from "../pages/admin/products/Edit";
import PageNotFound from "../pages/pagenotfound/PageNotFound";
import {AreaChartOutlined} from '@ant-design/icons';

export const mainRoutes = [
    {
        path:'/login',
        component: Login
    },
    {
        path:'/404',
        component:PageNotFound
    }
];

export const adminRoutes = [
    {
        path:'/admin/dashboard',
        component:Index,
        isShow:true,
        title:'看板',
        icon:AreaChartOutlined
    },
    {
        path:'/admin/products',
        component:List,
        isShow:true,
        exact:true,
        title:'商品管理',
        icon:AreaChartOutlined
    },
    {
        path:'/admin/products/edit',
        component:Edit,
        isShow:false,
        exact:true
    },
    {
        path:'/admin/products/edit/:id',
        component:Edit,
        isShow:false
    }
];