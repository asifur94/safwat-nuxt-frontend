<template>
 

 


    <section  class="w-fit   mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                      
      <!--   ✅ Product card 1 - Starts Here 👇 -->
      <div v-for="products in product" class="w-52 bg-white shadow-md flex justify-end rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div >
          <NuxtLink  v-on:click="count += 1">
          <img :src="products.image" :alt="products.title" class="h-52 w-52 object-cover rounded-t-xl">
          <!-- <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white"><path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path></svg></div> -->
          </NuxtLink>
          <div class="px-4 py-3 w-52">
           
            <p class="text-lg font-bold text-black truncate block capitalize">{{ products.name }}</p>
            <span class="text-gray-400 mr-3 uppercase text-xs">{{  products.description  }} </span>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-red-700 cursor-auto my-3">{{products.price}}</p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">{{products.DiscountPrice}}</p>
              </del>
              <div class="ml-auto ">
  
                <svg   xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="    cursor-pointer bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"></path>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                </svg>
  
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </section>
  
      <section>
        <div class="d-flex justify-content-between align-items-center" >
          <div class="flex justify-between  items-center" >

        <div  class="flex justify-between items-center" style="width: 250px;padding: 10px 25px;border-radius: 5px;color: rgb(0,0,0);border: 1px solid #F2F2F2 ;" ><svg v-on:click="count -= 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
        </svg>
        <span id="quantity-text" style="font-size: 18px;"><font ><font >   
          
          <p v-text="count"></p>
          </font></font></span>
          
          <svg v-on:click="count += 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
        </div>

                
                   
        <h3 class="text-base font-bold "><font ><font >Quantity</font></font></h3>
      </div>
     
      <!-- <button class="dc-btn">Order Now</button> -->

  </div>
      </section>
     
      
      
  </template>
  
  <script>
  
export default {
  props: ['product'],

  data() {
            return {
                count: 1,
               
                
           }
    },
   
    
};
  
    

  
  </script>
  