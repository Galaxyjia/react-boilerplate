## webpack安装
- 安装本地的webpack
- webpack webpack-cli -D

## webpack可以进行0配置
- 打包工具 ->   输出后的结果（js模块）

***
#####   初始化
yarn init -y
#####   安装webpack
yarn add webpack webpack-cli -D
#####   新建src目录
新建index.js文件
新建index.html文件

##### 新增webpack.config.js
添加配置规则

##### 添加scripts 快捷命令

##### 加载Css
yarn add style-loader css-loader -D
必须在服务器模式下，才能正常显示

##### 加载图片
yarn add file-loader -D

##### 加载数据
yarn add csv-loader xml-loader -D

##### 修改html引用
yarn add html-webpack-plugin -D

##### 清理文件夹
yarn add clean-webpack-plugin -D

// =============================分割线==============================
 
// 正确写法
 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
 
...
 
plugins: [
    new CleanWebpackPlugin()
]

// 官网例子太老

##### 使用source map
webpack.config.js 中添加

// 不要用于生产环境
devtool: 'inline-source-map', 

***

##### webpack-dev-server
yarn add webpack-dev-server -D

***
##### 生产环境不同配置
yarn add webpack-merge -D

##### js压缩
yarn add uglifyjs-webpack-plugin -D

##### 抽离css插件
yarn add mini-css-extract-plugin -D

##### css压缩插件
yarn add optimize-css-assets-webpack-plugin -D

##### 自动添加浏览器前缀
yarn add postcss-loader autoprefixer -D

##### Es6转为Es5
yarn add babel-loader @babel/core @babel/cli @babel/preset-env -D
##### polyfill安装为开发依赖
yarn add @babel/polyfill

##### 跨域，在devserver 配置 代理
yarn add @babel/preset-react -D

##### 安装react react-dom
yarn add react react-dom -D

##### 格式化时间库 moment
yarn add moment -D

##### DLLPlugin进行动态链接
DLLPlugin进行动态链接，降低打包体积

##### happypack进行多线程打包
yarn add happypack -D 

##### webpack自带优化功能

##### 懒加载

##### 热更新

##### 应用Es6新特性会报错，需要babel.config.json里配置plugins
yarn add @babel/plugin-proposal-class-properties 

##### lazy Suspense
组件懒加载
getDerivedStateFromError 更优雅

###### normalize.css 统一浏览器默认样式
yarn add normalize.css -D

##### react-router-dom
yarn add react-router-dom -D

##### antd 美化
yarn add antd -D

##### antd icon
yarn add @ant-design/icons -D

##### withRouter
组件里跳转路由


#####  antd dataSource columns 等列表渲染必须要设置key