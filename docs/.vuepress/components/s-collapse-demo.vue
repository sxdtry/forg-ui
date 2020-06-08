<template>
  <div>
    <s-collapse :selected.sync="selectedItem">
        <s-collapse-item title="大呱呱" name="1">
          <div>呱呱同学</div>
        </s-collapse-item>
        <s-collapse-item title="二呱呱" name="2">
          <div>呱呱同学</div>
        </s-collapse-item>
        <s-collapse-item title="三呱呱" name="3">
          <div>呱呱同学</div>
        </s-collapse-item>
      </s-collapse>
  </div>
</template>

<script>
import Collapse from './sub/collapse'
import CollapseItem from './sub/collapse-item'
export default {
  components:{
    's-collapse': Collapse,
    's-collapse-item': CollapseItem,
  },
  data(){
    return{
      selectedItem: ['1'],
    }
  }
  
}
</script>