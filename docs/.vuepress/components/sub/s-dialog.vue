<template>
  <transition name="dialog-fade">
    <div class="s-dialog-wrapper" v-show="isshow">
      <div class="s-dialog">
        <div class="s-dialog-header">
          <slot name="title">
            <span class="s-dialog-title">{{title}}</span>
          </slot>
          <button class="s-dialog-headerclose" @click="close">
            <i class="iconfont icon-guanbi"></i>
          </button>
        </div>
        <div class="s-dialog-body">
          <slot name="body">
            <span>这是一段信息</span>
          </slot>
        </div>
        <div class="s-dialog-floot" v-if="$slots.floot">
          <slot name="floot"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "s-dialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    isshow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close() {
      this.$emit("update:isshow", false);
    }
  }
};
</script>

<style lang="less" scope>
.s-dialog-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  .s-dialog {
    position: relative;
    min-width: 450px;
    width: 30%;
    margin: 25vh auto 50px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    .s-dialog-header {
      padding: 20px 20px 10px;
      .s-dialogr-title {
        line-height: 24px;
        font-size: 18px;
        font-weight: 600;
      }
      .s-dialog-headerclose {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .s-dialog-body {
      padding: 30px 20px;
      font-size: 14px;
      word-break: break-all;
    }
    .s-dialog-floot {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .s-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: run 0.1s 1;
}
.dialog-fade-leave-active {
  animation: run 0.1s 1 reverse;
}
@keyframes run {
  0% {
    opacity: 0;
    transform:translateY(-20px);
  }
  100% {
    opacity: 1;
    transform:translateY(-0);
  }
}
</style>