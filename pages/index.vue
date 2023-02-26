
<template>
  <section>
    <div class="container-fluid pl-0 pr-0"><img class="w-full" src="~/assets/img/hero.png"></div>
  </section>
  
  <section class="text-end px-2">
    <div class="container">
      <div class="flex flex-row-reverse items-end pt-0 mt-3">
        <div class=" flex justify-end p-2">
          <span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class=" icon-clr w-5 h-5">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd" />
            </svg> </span>
  
          <span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class=" icon-clr w-5 h-5">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd" />
            </svg> </span>
  
          <span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class=" icon-clr w-5 h-5">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd" />
            </svg> </span>
  
          <span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class=" icon-clr w-5 h-5">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd" />
            </svg> </span>
  
          <span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class=" icon-clr w-5 h-5">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd" />
            </svg> </span>
  
  
  
        </div>
        <span class="flex text-center text-gray-500 p-2 text-xs me-1"><span class="vertical-align: inherit;"><span
              class="text-xs vertical-align: inherit;">48,120</span></span></span>
      </div>
      <h2 class="text-3xl red-700 px-2  mb-3"><span class="vertical-align: inherit;"><span
            class="vertical-align: inherit;">زيت زيتون صفوة الجوف</span></span></h2>
      <h3 class="text-base px-2 mb-4"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">بكر
            ممتاز عصرة اولى</span></span></h3>
      <p class="px-2"><span class="text-base px-2 vertical-align: inherit;"><span class="vertical-align: inherit;">زيت
            زيتون صفوة الجوف، بمثابة الذهب الخالص، انتقيناه من أفضل محاصيلنا مزارعنا بالجوف، حيث يتم إنتاج زيت زيتون بكرة
            عضوي ١٠٠٪؜ عصرة أولى على البارد.</span></span></p><img src="~/assets/img/Rectangle.png"
        class="w-full mt-5 px-2">
    </div>
  </section>
  
  
 
  <section class="mt-4  text-end">
    <div class="container mx-auto  ">
      <h3 class="text-base px-3 font-bold  mb-4">العرض</h3>
  
      <div class=" mb-6 truncate ">
        <carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="product in products" :key="product.id" class="prbt">
            <div class="cprbt">
              <div class=" prdtgg">
                <div class="mt-2">
                  <div class=" prdimg1 w-20 "><img class="w-full" :src="product.image"><span
                      class=" absolute prdtbg "><span><span>{{product.namEe}}</span></span><br></span></div>
                  <div class=" prdimg2 w-20 "><img class="w-full" :src="product.image"><span
                      class=" absolute prdtbg "><span><span>{{product.namEe}}</span></span><br></span></div>
                  <div class=" prdimg3 w-20"><img class="w-full" :src="product.image"><span
                      class=" absolute prdtbg "><span><span>{{product.namEe}}</span></span><br></span></div>
                </div>
                <div class="mt-28 text-right">
                  <h3 class="text-base px-1 mr-2">{{ product.name }}</h3>
                  <h4 class="text-xs px-1 mr-2">{{ product.description }}</h4>
                  <p class="text-gray-500 px-1 font-normal mr-1 mt-2 text-base line-through">{{product.DiscountPrice}}
                  </p>
                  <p class="text-base px-1 font-medium mr-1  text-red-700 cursor-auto ">ر.س {{ product.price }}</p>
                </div>
                  <div class="crtbtnn flex">
                  
                    <button v-if="adtProduct.id != product.id" @click="addToCart(product)">
                      <div class="flex-1 ml-3 mt-5"><span class="befrcrt"><span class="dtbtn">.</span></span></div>
                  
                    </button>
                    <div v-else class="abtnw"><span class=" aftercrt"> <span class="atbtn">.</span></span></div>
                  
                  </div>
              </div>
            </div>
          </Slide>
          <template #addons>
            <div class="sm:block hidden ">
              <navigation />
            </div>
          </template>
        </carousel>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
      <div class="flex items-center justify-between mb-6">
        <div class="flex justify-between items-center"
          style="width: 250px;padding: 10px 25px;border-radius: 5px;color: rgb(0,0,0);border: 1px solid #F2F2F2 ;">
          <span @click="qntyIncrementAndDecrement('increment')" class="fnicn cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
</span>
          {{ quantity }}
          <span  @click="qntyIncrementAndDecrement('decrement')" class="fnicn cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
          </svg>
</span>
        </div>
        
        
        <h3 class="text-base px-3 font-bold ">الكمية</h3>
      </div>
  
    </div>
  </section>
  <PurchaseForm :product="adtProduct" :totalPrice="totalPrice" />
  
  <review />
</template>


<script>

import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {

  components: {
    Carousel,
    Slide,
    Navigation,
  },
    data() {
        return {
            products: [],
            names: [],
            adtProduct: {},
            selectedProduct: [],
            totalPrice: { 'totalPrice': 0 },
            quantity: 1,


          settings: {
            // carousel settings
            settings: {
              itemsToShow: 2,
              snapAlign: 'center',
              dir: 'rtl'
            },
            breakpoints: {
              300: {
                itemsToShow: 2.4,
                touchDrag:true,
                snapAlign: 'start',
                transition:500,
                dir: 'rtl'
              },

              700: {
                itemsToShow: 5,
                snapAlign: 'start',
                dir: 'rtl'
              },

              1024: {
                itemsToShow:8,
                snapAlign: 'start',
                dir: 'rtl'
              },
            }
          }
            
        }
    },
    mounted(){
      axios.get('https://safwat-backend.scales.agency/api/product')
        .then(response => {
        // console.log(response.data);
          this.products = response.data.products

          if (this.products.length > 0) {
            this.adtProduct = { ...this.products[0], quantity: 1 };
          }
       })  
    },
    methods: {
        addToCart(product) {
          this.adtProduct = { ...product, quantity: this.quantity };
          console.log(this.adtProduct)
          this.totalPrice.totalPrice = Number(this.adtProduct.price * this.adtProduct.quantity)  
        },
        qntyIncrementAndDecrement(type) {

            if (type == 'increment') {
                this.quantity++
            } else if (type == 'decrement' && this.quantity > 1) {
                this.quantity--
            }
        },


        
    },
    
    
        
};

</script>