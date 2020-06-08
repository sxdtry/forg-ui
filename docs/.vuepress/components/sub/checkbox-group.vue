<template>
  <div class="s-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 's-checkbox-group',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
