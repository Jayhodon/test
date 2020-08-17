import VueRouter from 'vue-router'

import Homecontainer from './components/tabbar/Homecontainer.vue'
import Membercontainer from './components/tabbar/Membercontainer.vue'
import Shopcarcontainer from './components/tabbar/Shopcarcontainer.vue'
import Searchcontainer from './components/tabbar/Searchcontainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


var router = new VueRouter({
	routes:[
		{path:'/',component:Homecontainer},
		{path:'/home',component:Homecontainer},
		{path:'/member',component:Membercontainer},
		{path:'/shopcar',component:Shopcarcontainer},
		{path:'/search',component:Searchcontainer},
		{path:'/home/NewsList',component:NewsList},
    	{path:'/home/newsinfo/:id', component:NewsInfo},
    	{ path: '/home/photolist', component: PhotoList },
    	{ path: '/home/photoinfo/:id', component: PhotoInfo },
    	{ path: '/home/goodslist', component: GoodsList },
    	{ path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    	{ path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
    	{ path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
	],
	linkActiveClass:'mui-active'
})

export default router