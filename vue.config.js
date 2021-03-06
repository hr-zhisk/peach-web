module.exports = {
	chainWebpack: config => {
		//删除编译后的独立js文件上的预获取操作
		config.plugins.delete("prefetch")
	},
	devServer: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:3000",
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	}
}
