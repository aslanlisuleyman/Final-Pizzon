import React from 'react'
import AboutUs from '../pages/Site/AboutUs/AboutUs'
import BlogDetail from '../pages/Site/BlogDetail/BlogDetail'
import ErrorPage from '../pages/Site/ErrorPage/ErrorPage'
import Home from '../pages/Site/Home/Home'
import OurMenu from '../pages/Site/OurMenu/OurMenu'
import OurTeam from '../pages/Site/OurTeam/OurTeam'
import Cart from '../pages/Site/Cart/Cart'
import Detail from '../pages/Site/Detail/Detail'
import BlogRight from '../pages/Site/BlogRight/BlogRight'
import BlogLeft from '../pages/Site/BlogLeft/BlogLeft'
import BookNow from '../pages/Site/BookNow/BookNow'
import CheckOut from '../pages/Site/CheckOut/CheckOut'
import Contact from '../pages/Site/Contact/Contact'

import ShopList from '../pages/Site/ShopList/ShopList'
import SiteRoot from '../pages/Site/SiteRoot'
import Register from '../pages/Site/Register/Register'
import Login from '../pages/Site/Login/Login'





const Routes = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path:'',
        element:<Home/>
    },{
        path:'AboutUs',
        element:<AboutUs/>
    },{
        path:'BlogDetail',
        element:<BlogDetail/>
    },{
        path:'ErrorPage',
        element:<ErrorPage/>
    },{
        path:'OurMenu',
        element:<OurMenu/>
    },{
        path:'Cart',
        element:<Cart/>
    }
    ,{
        path:'OurTeam',
        element:<OurTeam/>
    },{
        path:'BlogRight',
        element:<BlogRight/>
    },{
        path:'BlogLeft',
        element:<BlogLeft/>
    },{
        path:'BookNow',
        element:<BookNow/>
    },{
        path:'CheckOut',
        element:<CheckOut/>
    },{
        path:'Contact',
        element:<Contact/>
    },{
        path:'ShopList',
        element:<ShopList/>
    }
    ,{
        path:'Register',
        element:<Register/>
    },{
        path:'Login',
        element:<Login/>
    }
    
    ,{
        path:'/:id',
        element:<Detail/>
    },{}]

// },{
//     path:'/admin',
//     element:<AdminRoot/>,
//     children:[{
//         path:'',
//         element:<Books/>
//     },{
//         path:'Books',
//         element:<Books/>
//     },{
//         path:'Orders',
//         element:<Orders/>
//     }]
}]

export default Routes