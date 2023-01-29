<template>

    
    <productAll v-for="product in products" :key="product.id" :product="product">

                    

    </productAll>


</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            products: [],
            names: [],

        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8001/api/product')
            .then(response => {
                console.log(response.data);
                this.products = response.data

            })

    },
}
</script>