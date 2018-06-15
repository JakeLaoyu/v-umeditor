# v-ueditor

> UEditor 1.4.3.3的Vue版本

[Demo](http://gitlab.dxy.net/biz-developer-f2e/dxy-vue-ueditor/blob/master/src/views/index.vue)

[仓库地址](http://gitlab.dxy.net/biz-developer-f2e/dxy-vue-ueditor)

## 安装

```js
npm i @dxy/v-ueditor -S
```
### 全局引用

```js
import vUeditor from '@dxy/v-ueditor'

Vue.use(vUeditor)
```

### 在组件内引用

```js
import vUeditor from '@dxy/v-ueditor'

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

## props

| 字段   | 必填 | 类型   | 默认值 | 描述                                                          |
|:-------|:-----|:-------|:-------|:--------------------------------------------------------------|
| id     | 是   | String | 无     | 当前编辑器 id                                                 |
| config | 否   | Object | {}     | 配置参数，详细参考 http://fex.baidu.com/ueditor/#start-config |


## Events

| 字段  | 描述                                                                                                 | return |
|:------|:-----------------------------------------------------------------------------------------------------|:-------|
| ready | UEditor初始化后返回UEditor实例对象，可以调用实例方法，文档： http://ueditor.baidu.com/doc/#UE.Editor | UE实例 |

或者

```js
// 获取实例
window.UE.getEditor(id)
```
