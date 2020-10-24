<template>
    <div>
    </div>
</template>
<script>
import Oreders from '@/api/orders'
export default {
    data() {
        return {
            order : null
        }
    },
    props:{
        product :{
            tybe:Object,
            required : true
        }
    },
    async created(){
        this.order = await Orders.create(this.product)  
    }
}
</script>