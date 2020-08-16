import VueRouter from 'vue-router'

import Homecontainer from './components/tabbar/Homecontainer.vue'
import Membercontainer from './components/tabbar/Membercontainer.vue'
import Shopcarcontainer from './components/tabbar/Shopcarcontainer.vue'
import Searchcontainer from './components/tabbar/Searchcontainer.vue'

var router = new VueRouter({
	routes:[
		{path:'/',component:Homecontainer},
		{path:'/home',component:Homecontainer},
		{path:'/member',component:Membercontainer},
		{path:'/shopcar',component:Shopcarcontainer},
		{path:'/search',component:Searchcontainer}
	],
	linkActiveClass:'mui-active'
})

export default router