module.exports = {
  publicPath: "/", // 默认情况下，Vue CLI假定您的应用程序将部署在域的根目录（例如）https://www.my-app.com/。如果您的应用程序部署在子路径中，则需要使用此选项指定该子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，则设置publicPath为'/my-app/'。
  outputDir: "dist", // 构建输出目录
  assetsDir: "assers", // 静态资源目录(js, css, img, fonts)
  indexPath: "index.html", // 指定生成的输出路径index.html（相对于outputDir）。也可以是绝对路径。
  css: {
    loaderOptions: {
        // 全局使用sass变量
      sass: {
        prependData: `
          @import "@/assets/gload/golads.scss";
        `
      }
    }
  },
  devServer: {
    open: true, // 是否自动打开页面
    host: "localhost", // 域名
    port: "8081", // 端口号
    https: false, // 是否使用https
    hotOnly: true // 热更新
    //   proxy: {
    //     // 配置跨域
    //     '/api': {
    //       target: 'http://localhost:3000/api/',
    //       ws: true,
    //       changeOrigin: true,
    //       pathRewrite: {  // 使用 '/api代替target'
    //         '^/api': ''
    //       }
    //     }
    //   }
  }
};
