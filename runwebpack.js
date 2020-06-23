const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const {exec, fork} = require('child_process')

const config = require('./webpack.config.js')
const compiler = webpack(config)
const server = new webpackDevServer(compiler, config.devServer)
server.listen(9000,'localhost',()=>{
  console.log('listening now')
})
  .on('error',(err)=>{
    console.log(err)
  })