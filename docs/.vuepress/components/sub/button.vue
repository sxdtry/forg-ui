<template>
  <button
    class="s-button"
    :class="[`s-button-${type}`,{'is-disabled':disabled}]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "s-button",
  props: {
    //props校验
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods:{
      handleClick(){
          this.$emit('click')
      }
  }
};
</script>

<style lang="scss" scoped>
.s-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  letter-spacing: 1px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  // -webkit-appearance:none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 4px;
}
.s-button-default {
  &:hover {
    border-color: #c6e2ff;
  }
  &:active {
    color: #409eff;
    background-color: #ecf5ff;
  }
}
//主要按钮
.s-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    border-color: #66b1ff;
  }
  &:active {
    background-color: #66b1ff;
    color: #fff;
  }
}

//成功按钮
.s-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover {
    border-color: #85ce61;
  }
  &:active {
    background-color: #85ce61;
    color: #fff;
  }
}

//信息按钮
.s-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover {
    border-color: #a6a9ad;
  }
  &:active {
    background-color: #a6a9ad;
    color: #fff;
  }
}

//警告按钮
.s-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    border-color: #ebb563;
  }
  &:active {
    background-color: #ebb563;
    color: #fff;
  }
}

//危险按钮
.s-button-danger {
  color: #fff;
  background-color: #f78989;
  border-color: #f78989;
  &:hover {
    border-color: #dd6161;
  }
  &:active {
    background-color: #dd6161;
    color: #fff;
  }
}

//禁用按钮
.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
  &:hover {
    border-color: #ebeef5;
  }
  &:active {
    background-color: #fff;
    color: #c0c4cc;
  }
}
</style>