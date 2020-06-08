<template>
  <div>
    <s-button>普通按钮</s-button>
    <s-button type="primary">主要按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger" @click="fn">危险按钮</s-button>
    <s-button type="danger" disabled>禁用按钮</s-button>
  </div>
</template>

<script>
import SButton from './sub/button.vue'
export default {
  components:{
    SButton,
  }
}
</script>
