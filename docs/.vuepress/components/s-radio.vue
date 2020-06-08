<template>
    <div>
        <s-radio-group v-model="gender">
            <s-radio label="1">男</s-radio>
            <s-radio label="0">女</s-radio>
        </s-radio-group>
    </div>
</template>

<script>
import SRadio from './sub/radio'
import SRadioGroup from './sub/radio-group'
export default {
    data(){
        return {
            gender:''
        }
    },
    components:{
        SRadio,
        SRadioGroup
    }
}
</script>