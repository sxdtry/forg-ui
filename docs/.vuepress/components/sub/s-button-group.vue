<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'s-button-group',
    mounted(){
        let VNodeArray = this.$slots.default
        for(let VNode of VNodeArray){
            if(VNode.tag !== 'vue-component-1-s-button'){
                console.warn('请使用s-button组件')
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .s-button-group{
        display: inline-block;
        vertical-align: middle;
        .s-button{
            border-radius:0;
            &:not(:last-child){
                margin-right:1px;
            }
            &:first-child{
                border-right: -1px;
                border-radius:4px 0 0 4px;
            }
            &:last-child{
                border-left: -1px;
                border-radius:0 4px 4px 0;
            }
        }
    }
</style>