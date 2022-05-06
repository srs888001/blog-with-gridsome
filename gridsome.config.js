// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
      }
    },
    // 获取strapi里面数据
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,
        contentTypes: ['post', 'tag'],//StrapiPost
        // 默认名字，可以修改。  
        // typeName: "Strapi",
        singleTypes: ['general'],
        
        // // 需要用户登录获取
        // loginData: {
        //   identifier: 'zhangsan',
        //   password: 'zhangsan'
        // }
      }
    }
  ],
  templates: {
    // typeName 和 contentType 拼接而成
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag: [
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ],
  }
}
