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
import app from './App.vue'

import './lib/mui/css/mui.min.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

$(function(){
	$('li:odd').css('backgroundColor','cyan')
	$('li:even').css('backgroundColor','darkcyan')
})



var vm = new Vue({
	el:'#app',

	 // render:function(createElements){
	 // 	return createElements(app)
	 // }
	render:c=>c(app)

})