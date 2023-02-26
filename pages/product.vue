<template>
   
    <section
        class="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-8 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        <!--   ✅ Product card 1 - Starts Here 👇 -->
        <product v-for="product in products" :key="product.id" :product="product" >
            
            </product>
    
    </section>
    

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
        axios.get('https://scales.agency/safwat-backend/public/api/product')
            .then(response => {
                console.log(response.data);
                this.products = response.data

            })

    },
   
}
</script>