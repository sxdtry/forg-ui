# Grid 栅格

Grid 网格，最多可分为24网格，可以设置gutter。

## 默认栅格

**浏览**

<ClientOnly>
<s-grid-demo></s-grid-demo>
</ClientOnly>

**代码演示**

``` html
<template>
  <div>
     <s-row>
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
      </s-row>
      <s-row>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
      </s-row>
      <s-row>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
      </s-row>
      <s-row>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
      </-row>
  </div>
</template>
```
## 设置gutter

**浏览**

<ClientOnly>
<s-grid-gutter-demo></s-grid-gutter-demo>
</ClientOnly>

**代码演示**

```html
<template>
  <div>
      <s-row gutter="20">
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
      </s-row>
      <s-row gutter="10">
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
      </s-row>
  </div>
</template>
```