## 个人脚手架

## 第三方库说明

- [commander.js](https://github.com/tj/commander.js): 可以自动的解析命令和参数，用于处理用户输入的命令
- [download-git-repo](https://www.npmjs.com/package/download-git-repo): 下载并提取 git 仓库，用于下载项目模板
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js): 通用的命令行用户界面集合，用于和用户进行交互
- [ora](https://github.com/sindresorhus/ora): 下载过程久的话，可以用于显示下载中的动画效果。
- [chalk](https://github.com/chalk/chalk): 可以给终端的字体加上颜色
- [log-symbols](https://github.com/sindresorhus/log-symbols): 可以在终端上显示出 √ 或 × 等的图标

### commander.js

- version 用于定义命令程序的版本号
- option 定义命令的选项
  - 第一个参数，它可输入短名字 -i和长名字–-init,使用 | 或者,分隔
  - 第二个参数为描述, 会在 help 信息里展示出来
  - 第三个参数为回调函数，他接收的参数为一个string，有时候我们需要一个命令行创建多个模块，就需要一个回调来处理
  - 第四个参数为默认值
- parse 用于解析process.argv
