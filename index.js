'use strict'

const fs = require('fs')
const simpleGit = require('simple-git')

// 定时器
setInterval(function () {
  upDataFile()
}, 1000 * 10);

// 修改 README 文件
(function upDataFile() {
  const time = Date()
  fs.appendFile(__dirname + '/README.md', '#### 自动 commit，时间:' + time + '\r\n', err => {
    err ? console.error('缺少 README.md ') : console.log('README 文件追加成功，时间: ' + time)
    gitCommit(time)
  })
})()

// commit 提交
function gitCommit(time){
  simpleGit()
       .add('./*')
       .commit('自动 commit，时间' + time)
       .push(['-u', 'origin', 'master'], (e) => {
          console.log('commit 成功，时间：' + time)
       })
}
