# v-ueditor

> UEditor的Vue版本

## 安装

```js
npm i @dxy/v-ueditor -S
```
### 全局引用

```js
import vUEditor from '@dxy/v-ueditor'

Vue.use(vUEditor)
```

### 在组件内引用

```js
import vUEditor from '@dxy/v-ueditor'

components: {
  vUEditor
}
```

## 使用

```vue
<vUEditor
  :config="config"
  @ready="ueditorReady"
></vUEditor>
```

## props

| 字段   | 类型   | 默认值 | 描述                                                                                                       |
|:-------|:-------|:-------|:-----------------------------------------------------------------------------------------------------------|
| config | Object | {}     | 配置参数，详细参考(http://fex.baidu.com/ueditor/#start-config)[http://fex.baidu.com/ueditor/#start-config] |


## Events

| 字段  | 描述                                                                                                 | return |
|:------|:-----------------------------------------------------------------------------------------------------|:-------|
| ready | UEditor初始化后返回UEditor实例对象，可以调用实例方法，(API)[http://ueditor.baidu.com/doc/#UE.Editor] | UE实例 |
