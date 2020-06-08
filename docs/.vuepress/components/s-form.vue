<template>
  <s-form :model="model" label-width="80px">
    <s-form-item label="用户名">
      <s-input v-model="model.username" placeholder="请输入用户名" clearable></s-input>
    </s-form-item>
    <s-form-item label="用户密码">
      <s-input v-model="model.password" placeholder="请输入用户密码" showPassword></s-input>
    </s-form-item>
    <s-form-item label="即时配送">
      <s-switch v-model="model.soon" active-color="green" inactive-color="red"></s-switch>
    </s-form-item>
    <s-form-item label="爱好">
      <s-checkbox-group v-model="model.hobby">
        <s-checkbox label="篮球"></s-checkbox>
        <s-checkbox label="足球"></s-checkbox>
        <s-checkbox label="乒乓球"></s-checkbox>
      </s-checkbox-group>
    </s-form-item>
    <s-form-item label="性别">
      <s-radio-group v-model="model.gender">
        <s-radio label="1">男</s-radio>
        <s-radio label="0">女</s-radio>
      </s-radio-group>
    </s-form-item>
  </s-form>
</template>

<script>
import SForm from './sub/form'
import SFormItem from './sub/form-item'
import SInput from './sub/input'
import SSwitch from './sub/switch'
import SRadio from './sub/radio'
import SRadioGroup from './sub/radio-group'
import SCheckbox from './sub/checkbox'
import SCheckboxGroup from './sub/checkbox-group'
export default {
    data(){
        return {
            model:{
                username:'',
                password:'',
                soon:false,
                hobby:[],
                gender:'',
            }
        }
    },
    components:{
        SForm,
        SFormItem,
        SSwitch,
        SRadio,
        SRadioGroup,
        SCheckbox,
        SCheckboxGroup,
        SInput,
    }
}
</script>