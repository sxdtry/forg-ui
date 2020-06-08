<template>
  <div>
     <s-row>
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
        <s-col span="8">8</s-col>
      </s-row>
      <s-row>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
        <s-col span="6">6</s-col>
      </s-row>
      <s-row>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
        <s-col span="4">4</s-col>
      </s-row>
      <s-row>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
        <s-col span="3">3</s-col>
      </s-row>
  </div>
</template>

<script>
import Row from './sub/row'
import Col from './sub/col'
export default {
  components:{
    's-row': Row,
    's-col': Col,

  },
  
}
</script>