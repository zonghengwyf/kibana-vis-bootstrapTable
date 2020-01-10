# kibana-vis-bootstrapTable

1. 能根据字段的原始数据自定义bootstrap-Table的表格

版本一：
> 自定义参数Url，通过三方web路由处理ES数据为bootstrapTable的数据结构，自动生成表格

**注意**：
> 1. 三方路由在登录kibana浏览器有会话的痕迹
> 2. 三方路由结果得满足bootstrapTable数据结构，即包含rows字段

---

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start`

    Start kibana and have it include this plugin

  - `npm start -- --config kibana.yml`

    You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`

  - `npm run build`

    Build a distributable archive

  - `npm run test:browser`

    Run the browser tests in a real web browser

  - `npm run test:server`

    Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.
