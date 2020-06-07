# dialog 弹出框

预览

<ClientOnly>
<d-dialog/>
</ClientOnly>

代码演示
```html
<template>
    <s-button type="primary" @click="fn">点击</s-button>
    <s-dialog title="温馨提示" :isshow.sync="isshow">
        <template v-slot:body>
            <h1>一段文字</h1>
        </template>
        <template v-slot:floot>
            <s-button>取消</s-button>
            <s-button type="primary">确认</s-button>
        </template>
    </s-dialog>
</template>
<script>
    export default{
        data(){
            return {
                isshow:false
            }
        },
    }
</script>
```