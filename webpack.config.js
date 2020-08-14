var path = require('path')
var webpack = require('webpack')
var htmlwebpackplugin = require('html-webpack-plugin')
var vueLoaderPlugin=require('vue-loader/lib/plugin') 

module.exports={
	entry:path.join(__dirname,'./src/main.js'),
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new vueLoaderPlugin(),
		new htmlwebpackplugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		})
	],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			{test:/\.vue$/,use:'vue-loader'},
			{test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}
		]
	}
}

