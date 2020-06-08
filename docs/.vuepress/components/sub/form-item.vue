<template>
    <div class="s-form-item">
        <label class="s-form-label" :style="{width:this.Form.labelWidth}">{{label}}</label>
        <div class="s-form-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'s-form-item',
    props:{
        label:{
            type:String,
            default:''
        }
    },
    inject:['Form']
}
</script>

<style lang="scss" scoped>
    .s-form-item{
        margin-bottom:25px;
        .s-form-label{
            text-align:right;
            vertical-align: middle;
            float:left;
            font-size:14px;
            line-height:40px;
            padding:0 12px 0 0;
            box-sizing:border-box;
        }
        .s-form-content{
            line-height: 40px;
            position: relative;
            font-size: 14px;
            overflow: hidden;
        }
    }
</style>