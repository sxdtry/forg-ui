<template>
  <div>
    <s-input type="text" placeholder="请输入账号" v-model="user" clearable></s-input>
    <s-input type="password" placeholder="请输入密码" v-model="password" showPassword></s-input>
  </div>
</template>

<script>
import Input from './sub/input'
export default {
  components:{
    's-input': Input,
  },
  data(){
    return {
      user: '',
      password:''
    }
  },
}
</script>

<style>

</style>