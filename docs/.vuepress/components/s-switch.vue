<template>
    <div>
        <s-switch v-model="flag" active-color="green" inactive-color="red"></s-switch>
    </div>
</template>

<script>
import SSwitch from './sub/switch'
export default {
    data(){
        return {
            flag:false
        }
    },
    components:{
        SSwitch
    }
}
</script>