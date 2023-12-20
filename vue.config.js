const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'https://api.jisuapi.com/recipe',
        changOrigin:true,//允许跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
