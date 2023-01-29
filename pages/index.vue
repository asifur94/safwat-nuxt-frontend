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



                <productAll v-for="product in products" :key="product.id" :product="product">

                    

                </productAll>


               
                
                <WhatsappForm/>
                
               

                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
            
            
          

           
            
            
        </div>
    </section>

    

    <PurchaseForm/>
    
    



    







<review/>

    
   
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
  mounted(){
  axios.get('http://127.0.0.1:8001/api/product')
      .then(response => {
    console.log(response.data);
    this.products = response.data

  })
    
  },
};

</script>