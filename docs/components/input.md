# Input 输入框

## 常用示例

**浏览**

<ClientOnly>
<s-input></s-input>
</ClientOnly>

**代码演示**

```html
<div>
  <s-input type="text" placeholder="请输入账号" v-model="user" clearable></s-input>
  <s-input type="password" placeholder="请输入密码" v-model="password" showPassword></s-input>
</div>
```
