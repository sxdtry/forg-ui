# Collapse 折叠面板

可以折叠/展开的区域，可以设置单个内容区域展开。

## 设置默认开启内容

**浏览**

设置默认展开第一个，可在 `selectedItem` 数组中设置默认展开多个，设置single属性可每次只展开一个

<ClientOnly>
<s-collapse-demo></s-collapse-demo>
</ClientOnly>

**代码演示**

```html
<s-collapse :selected.sync="selectedItem">
  <s-collapse-item title="This is panel header 1" name="1">
    <div>Orange is a kind of fruit</div>
  </s-collapse-item>
  <s-collapse-item title="This is panel header 2" name="2">
    <div>Orange is a kind of fruit</div>
  </s-collapse-item>
  <s-collapse-item title="This is panel header 3" name="3">
    <div>Orange is a kind of fruit</div>
  </s-collapse-item>
</s-collapse>
```

```js
data(){
    return{
      selectedItem: ['1'],
    }
  }
```