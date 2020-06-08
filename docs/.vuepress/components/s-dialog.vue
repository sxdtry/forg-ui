<template>
  <div>
    <s-button type="primary" @click="fn">点击</s-button>
    <s-dialog title="哈喽" :isshow.sync="isshow">
      <template v-slot:body>
        <h1>我是内容</h1>
      </template>
      <template v-slot:floot>
        <s-button>取消</s-button>
        <s-button type="primary">确认</s-button>
      </template>
    </s-dialog>
  </div>
</template>

<script>
import SButton from './sub/button.vue'
import SDialog from './sub/dialog.vue'
export default {
  data(){
    return {
      isshow:false
    }
  },
  methods: {
    fn() {
      this.isshow = !this.isshow
    }
  },
  components:{
    SDialog,
    SButton
  }
};
</script>
