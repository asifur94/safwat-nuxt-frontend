<template>
    <section class="text-end">
        <div  class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"  >                 

        <div class="container mt-3"><button class="dc-btn" @click="isShow = !isShow">اطلبه الآن</button></div> 
            
           <div v-show="isShow" >
            <div class="container text-center" >
                <div class=" border-solid border-2  border-slate-100 rounded-lg  px-2 pb-3" >
                    <h1 class=" text-2xl text-center mb-4 mt-3"><span><span>اطلبه الآن
                    </span></span></h1>
                    <form @submit.prevent="purchase" class="text-end">
                        <div  class="mb-2   selt-frm  " >
                            <input v-model="name" class=" pr-3 w-full pl-8 py-3" type="text" placeholder="The name" style="background: #f2f2f2;border-style: none;"></div>
                        <div class="mb-2 relative  selt-frm "  ><input v-model="phone" class=" pr-3 w-full pl-8 form-control py-3" type="text" placeholder="xxx xxx xxx" style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                            <div class="flex items-center absolute" style="top: 50%;transform: translateY(-50%);left: 20px;" ><span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">05&nbsp;&nbsp;</span></span></span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5"></div>
                        </div>
                        <div class="mb-2 frm-s form-select relative py-3 pr-3 pl-8 selt-frm " >
                            <select v-model="address" class="w-full text-end" style="background: #f2f2f2;border-style: none;">
                                <option value="Jaddah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Riyadh</span></span></option>
                                <option value="Makkah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Jeddah</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Mecca</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Medina</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Ad Dammam</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Hufuf</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Buraydah</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Ḩillah</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Aţ Ţaif</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Tabuk</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Khamis Mushayt</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Ḩail</span></span></option>
                                <option value="Jaddah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Qatif</span></span></option>
                                <option value="Makkah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Mubarraz</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Kharj</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Najran</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Yanbu</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Abha</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Arar</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Jazan</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Sakaka</span></span></option>
                                <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Al Bahah</span></span></option>
                       </select><i class="fas fa-chevron-down" style="position: absolute;top: 50%;transform: translateY(-50%);left: 20px;"></i></div>
    
                        <div v-for="product in products" :key="product.id" class="frm-s flex justify-between selt-frm-txt mt-3"  >
                            <span>
                                <span class="vertical-align: inherit;">
                                    <span class="vertical-align: inherit;">
                                      {{ product.name }}
                                    </span>
                                </span>
                            </span>
                            <span>
                                <span class="vertical-align: inherit;">
                                    <span class="vertical-align: inherit;">
                                     <div class="flex items-center gap-2">
                                        <span @click="qntyIncrementAndDecrement(product.id,'increment')" class="bg-green-500 text-white py-1 px-2 rounded cursor-pointer">+</span>
                                        {{ product.quantity }}
                                        <span @click="qntyIncrementAndDecrement(product.id,'decrement')" class="bg-red-500 py-1 text-white px-2 rounded cursor-pointer">-</span>
                                     </div>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div class="flex justify-between selt-frm-txt mt-3"  ><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">السعر شامل الضريبة</span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">100 ر.س</span></span></span></div>
                        <div class="flex justify-between selt-frm-txt mt-3"  ><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الشحن السريع
                        </span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مجاني
                        </span></span></span></div>
                        <div class="selt-frm-txt-d "  ></div>
                        <div class="flex justify-between selt-frm-txt mt-3"  ><span style="font-weight: bold;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">الاجمالي
                        </span></span></span><span class="font-weight: bold;"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">{{ totalPrice.totalPrice }} ر.س</span></span></span></div>
                        
                        <div class="mt-3"><button type="submit" class="dc-btn">شراء</button></div>
                        
                    </form>
                    <p v-if="!!message" class="text-green-500 font-bold text-2xl py-4">{{ message }}</p>

                </div>
            </div>
         </div>
    </div>
      
   
    </section>



    <section class="flex justify-start"> 
        <div class="w-24 ml-6 mt-12"><img src="~/assets/img/Logo.png"></div> 
    </section>

    <section class="flex justify-end"> 
        <div class="w-full max-w-sm mbimg140"><img src="~/assets/img/olivia.webp"></div> 
    </section>
    

    <section class="text-end  frmbtm  mt-(-48) pt-48">
        <div class="container" style="padding-bottom: 38px;" >
            <h2 style="color: #343434;" class="text-4xl flex justify-end mb-3 mt-5"><span ><span >لماذا صفوة الجوف؟
            </span></span></h2>
            <p class="flex justify-end " style="color: #343434;"><span ><span >لأننا نقدم منتج فاخر وعضوي ١٠٠٪ يعتني بجودة غذائكم وصحتكم..</span></span>
              </p>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 flex justify-end mt-4"><span ><span >&nbsp; جودة المحاصيل
                </span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                  </svg></h2>
                <p class="flex justify-end " style="font-size: 16px;color: #343434;"><span ><span >في مزرعتنا أكثر من ٨٠٠,٠٠٠ شجرة زيتون ُتنتج أفضل محصول سنوياً، ومع ذلك نقوم بجرد المحصول لاستبعاد حبات الزيتون المعيبة لضمان أفضل زيت وقت العصر.</span></span>
                  </p>
            </div>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 flex justify-end mt-3"><span ><span >&nbsp; حموضة أقل
                </span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                  </svg></h2>
                <p class="flex justify-end " style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                  </p>
            </div>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 flex justify-end mt-3"><span ><span >&nbsp; طعم مميز
                </span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 flex justify-end chk-icn h-6">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                  </svg></h2>
                <p class="flex justify-end " style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                  </p>
            </div>
            <div class=" mt-3"><button class="dc-btn">اطلبه الآن</button></div>
        </div>
    </section>


</template>


<script>
import axios from 'axios'
export default {
    name: "ToggleDiv",
    data: function () {
        return {
            isShow: false,
            name: '',
            phone: '',
            address: '',
            message: '',
        };
    },

    props: ['msg', 'products', 'totalPrice'],
    methods: {
        qntyIncrementAndDecrement(id,type) {
            this.products.forEach((el) => {
                if (el.id == id) {
                   
                    if (type == 'increment') {
                        el.quantity++
                    } else if (type == 'decrement' && el.quantity>1) {
                        el.quantity--
                    }
                   
                }

            }) 
            this.totalPrice.totalPrice = this.products.reduce((prev, current) => Number(prev) + Number(current.price * current.quantity), 0)
        },

      async  purchase() {
          if (this.products.length > 0) {
              if (this.name.trim().length >0 && this.phone.trim().length>0 && this.address.trim().length>0) {
                  try {
                      const response = await axios.post('http://sawfat-laravel.test/api/order', {
                          name: this.name,
                          phone_number: this.phone,
                          address: this.address,
                          selectedProducts: this.products,
                      })
                          this.name = '',
                          this.phone = '',
                          this.address = '',
                          this.message = response.data.message
                      console.log(response)
                  } catch (error) {
                      console.error(error)
                  }
              } else {
                  alert('Fill All Data');
              }
          } else {
            alert('Add to Cart Please')
         }
        }
    }
};

</script>