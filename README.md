# v-ueditor

> UMeditor 1.2.3 的Vue版本。
> 加入自定义UI，适应现代风格

[完整DEMO](https://jakelaoyu.github.io/v-umeditor/static/index.html?1234)

[代码DEMO](https://github.com/JakeLaoyu/v-umeditor/blob/master/src/views/index.vue)

*图片上传请参考官方DEMO文档，需要后端配合 [https://ueditor.baidu.com/website/download.html#mini](https://ueditor.baidu.com/website/download.html#mini)*

## 安装

```sh
npm i v-umeditor -S
```
或
```sh
yarn add v-umeditor
```

### 全局引用

```js
import vUeditor from 'v-umeditor'

Vue.use(vUeditor)
```

### 在组件内引用

```js
import vUeditor from 'v-ueditor'

components: {
  vUeditor
}
```

## 使用

```vue
<v-ueditor
  :config="config"
  @ready="ueditorReady"
></v-ueditor>
```

*注：* 开启vue `keep-alive`时，当使用ready参数保存返回的编辑器实例，当第二次进入页面时，通过返回实例获取内容报错。建议使用`window.UM.getEditor(id)`方式获取实例

## props

| 字段     | 必填 | 类型    | 默认值 | 描述                                                                                             |
|:-------- |:---- |:------- |:------ |:------------------------------------------------------------------------------------------------ |
| id       | 是   | String  | 无     | 当前编辑器 id                                                                                    |
| content  | 否   | String  | 无     | 初始化数据内容                                                                                   |
| config   | 否   | Object  | {}     | 配置参数，详细参考 https://github.com/JakeLaoyu/v-umeditor/blob/master/static/umeditor.config.js |
| newstyle | 否   | Boolean | true   | 是否使用新样式                                                                                   |


## Events

| 字段   | 描述                                                                                                       | return |
|:------ |:---------------------------------------------------------------------------------------------------------- |:------ |
| ready  | UEditor初始化后返回UEditor实例对象，可以调用实例方法，文档： http://ueditor.baidu.com/doc/#UE.Editor       | UE实例 |
| change | 监听UEditor内容改变，返回UEditor实例对象，可以调用实例方法，文档： http://ueditor.baidu.com/doc/#UE.Editor | UE实例 |

*注：* 目前发现`contentchange`事件在选中删除时不触发，建议同时监听`contentchange`和`selectionchange`事件，使用`window.UM.getEditor(id).getContent()`获取内容

或者

```js
// 获取实例
window.UM.getEditor(id)
```
