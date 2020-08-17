import $ from 'jquery'
//const $ = require('jquery')
import './css/index.css'
import './css/index.less'
import './css/index.scss'

	//webpack默认只能打包处理JS类in的文件
	//若要处理非JS文件，我们要安装一ie合适的第三方loader加载器，
	//1.要打包css文件，要安装npm i style-loader css-loader -D
	//2.打开webpack.config.js这个配置文件，在里面加一个配置节点，module，他是对iang；
	//	在这个module对iang上有一个rules属ing，他是个数组 存放了所有第三方文件的匹配和处理规则
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
import router from './router.js'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

import app from './App.vue'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//隔行变色
// $(function(){
// 	$('li:odd').css('backgroundColor','cyan')
// 	$('li:even').css('backgroundColor','darkcyan')
// })



var vm = new Vue({
	el:'#app',

	 // render:function(createElements){
	 // 	return createElements(app)
	 // }
	render:c=>c(app),
	router

})