<template>
  <div>
    <s-button-group>
      <s-button type="primary">上一页</s-button><s-button type="primary">下一页</s-button>
    </s-button-group>
  </div>
</template>
<script>
import SButton from './sub/button.vue'
import SButtonGroup from './sub/button-group.vue'
export default {
    components:{
      SButtonGroup,
      SButton
    }
}
</script>
