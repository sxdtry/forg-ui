<template>
    <div>
        <s-checkbox-group v-model="hobby">
            <s-checkbox label="大呱呱"></s-checkbox>
            <s-checkbox label="二呱呱"></s-checkbox>
            <s-checkbox label="三呱呱"></s-checkbox>
        </s-checkbox-group>
    </div>
</template>

<script>
import SCheckbox from './sub/checkbox'
import SCheckboxGroup from './sub/checkbox-group'
export default {
    data(){
        return {
            hobby:[]
        }
    },
    components:{
        SCheckbox,
        SCheckboxGroup
    }
}
</script>