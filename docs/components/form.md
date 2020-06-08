# Form 表单

## 常用示例

**浏览**

<ClientOnly>
<s-form />
</ClientOnly>

**代码演示**

```html
 <s-form :model="model" label-width="80px">
    <s-form-item label="用户名">
      <s-input v-model="model.username" placeholder="请输入用户名" clearable></s-input>
    </s-form-item>
    <s-form-item label="用户密码">
      <s-input v-model="model.password" placeholder="请输入用户密码" show-password></s-input>
    </s-form-item>
    <s-form-item label="即时配送">
      <hm-switch v-model="model.soon" active-color="green" inactive-color="red"></hm-switch>
    </s-form-item>
    <s-form-item label="爱好">
      <s-checkbox-group v-model="model.hobby">
        <s-checkbox label="篮球"></s-checkbox>
        <s-checkbox label="足球"></s-checkbox>
        <s-checkbox label="乒乓球"></s-checkbox>
      </s-checkbox-group>
    </s-form-item>
    <s-form-item label="性别">
      <s-radio-group v-model="model.gender">
        <s-radio label="1">男</s-radio>
        <s-radio label="0">女</s-radio>
      </s-radio-group>
    </s-form-item>
  </s-form>
```
