<template>


    <section>
        <div class="container-fluid pl-0 pr-0" ><img class="w-full" src="~/assets/img/hero.png" ></div>
    </section>


    <section class="text-end ">
        <div class="container" >
            <div class="flex flex-row-reverse items-end pt-0 mt-3" >
                <div class=" flex justify-end p-2" >
                    <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                        <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                            <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                    <span class="flex justify-end" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" icon-clr w-5 h-5">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" /></svg>       </span>
                
                                        
                                    
                </div>
                <span class="flex text-center p-1 font-xs me-1"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">48,120</font></font></span>
            </div>
            <h2  class="text-3xl red-700  mb-3"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Safwat Al Jouf olive oil</font></font></h2>
            <h3  class="text-base mb-4"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Excellent virgin first squeeze</font></font></h3>
            <p ><font class="text-base vertical-align: inherit;"><font class="vertical-align: inherit;">Safwat Al-Jouf olive oil, like pure gold, we picked from our best crops, our farms in Al-Jouf, where 100% organic extra-virgin olive oil is produced by first cold pressing.</font></font></p><img src="~/assets/img/Rectangle.png" class="w-full mt-5 ">
        </div>
    </section>
    

    <section class="mt-4 text-end ">
        <div class="container" >
            <h3 class="text-base font-bold mb-4"><font ><font >Width</font></font></h3>
            <div  class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"  >                 

            <section
                class="w-fit   mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

            <div v-for="product in products" :key="product.id" class="w-52 bg-white shadow-md flex justify-end rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <div>
                    <NuxtLink v-on:click="count += 1">
                        <img :src="product.image" alt="" class="h-52 w-52 object-cover rounded-t-xl">
                        <h1>{{ product.name }}</h1>
                    </NuxtLink>
                    <div class="px-4 py-3 w-52">
            
                        <p class="text-lg font-bold text-black truncate block capitalize">{{ product.name }}</p>
                        <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.description }} </span>
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-red-700 cursor-auto my-3">{{ product.price }}</p>
                            <del>
                                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del>
                            <div class="ml-auto">
            
                                <button v-if="!this.adtProducts.find((el)=>el.id == product.id)" @click="addToCart(product)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="cursor-pointer bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z">
                                        </path>
                                        <path
                                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z">
                                        </path>
                                    </svg>
                                </button>
                                <p v-else class="bg-green-500 text-white py-1 px-2 text-sm">Added</p>
            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </section>
 
                <WhatsappForm/>

                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            
        </div>
    </section>


    <PurchaseForm :products="adtProducts" :totalPrice="totalPrice" />

<review/>

   
</template>



<script>
 import axios from 'axios';
export default {


    data() {
        return {
            products: [],
            names: [],
            adtProducts: [],
            selectedProduct: [],
            totalPrice:{'totalPrice':0}
            
        }
    },
    mounted(){
        axios.get('http://sawfat-laravel.test/api/product')
        .then(response => {
        console.log(response.data);
          this.products = response.data.products
       })  
    },
    methods: {
        addToCart(product) {
            this.adtProducts = [...this.adtProducts, { ...product, quantity: 1 }];
            this.totalPrice.totalPrice = this.adtProducts.reduce((prev, current) => Number(prev) + Number(current.price * current.quantity), 0)  
            
        }
    }
};

</script>