<template>
    <div class="s-input">
        <input class="s-input-value" :class="[{'is-disabled':disabled}]" :disabled="disabled" :type="passwordVisible ? 'text' : type" :value="value" :placeholder="placeholder" @input="handleInput" />
        <button class="s-suffix" v-if="suffix" v-show="value" >
            <i class="iconfont icon-guanbi" @click="handleClear" v-if="clearable"></i>
            <i class="iconfont icon-yanjing" @click="handleShow" v-if="showPassword"></i>
        </button>
    </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        },
        value:null,
        disabled:{
            type:Boolean,
            default:false
        },
        clearable:{
            type:Boolean,
            default:false
        },
        showPassword:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            passwordVisible:false
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input', e.target.value)
        },
        handleClear(){
            this.$emit('input','')
        },
        handleShow(){
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        suffix(){
            return this.clearable || this.showPassword
        },
    },
}
</script>

<style lang="scss" scoped>
    .s-input{
        position: relative;
        display: inline-block;
        width: 100%;
        font-size:14px;
        .s-input-value{
            box-sizing:border-box;
            width: 100%;
            height:40px;
            padding:0 15px;
            border-radius: 4px;
            font-size:inherit;
            background-color: #fff;
            border:1px solid #dcdfe6;
            outline: 0;
            transition:border-color .2s cubic-bezler(.645,.045,.355,1);
            &:focus{
                outline: 0;
                border-color: #409eff;
            }
            &.is-disable{
                background-color: #f5f7fa;
                border-color: #e4e7ed;
                color:#c0c4cc;
                cursor:not-allowed;
            }
        }
        .s-suffix{
            -webkit-appearance:none;
            border:none;
            background-color: #fff;
            outline: 0;
            position: absolute;
            top:13px;
            right:15px;
            padding:0;
            i{
                font-size:14px;
            }
        }
    }
</style>