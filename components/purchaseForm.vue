<template>
    <section class="text-end px-3">
 
 
     
         <div  class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"  >                 
 
         <div  class="container mt-3"><button class="dc-btn border rounded-lg" ><a href="#first-section">      اطلبه الآن   </a></button></div> 
 
             <WhatsappForm/>
 
 
 
         <div id="first-section" class="container" style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" ></div>
            <main  id="second-section">
             <div class="container text-center" >
                 <div class=" border-solid border-2  border-slate-100 rounded-lg  px-2 pb-3" >
                     <h1 class=" text-2xl text-center mb-4 mt-3"><span><span>اطلبه الآن
                     </span></span></h1>
                     <form v-if="!message" @submit.prevent="purchase" class="text-end">
                         <div  class="mb-2  selt-frm">
                             <input v-model="name" :class="!!errors.name && 'error_border'" class=" pr-3 w-full border rounded-lg pl-8 py-3.5 text-end" type="text" placeholder="الاسم" style="background: #f2f2f2;border-style: none;" />
                         </div>
                         <!--Error-->
                         <p v-if="!!errors.name" class="text_yellow text-right p-2">{{ errors.name[0] }}</p>
 
                         <div class="mb-2 relative border rounded-lg selt-frm">
                             <input v-model="phone" :class="!!errors.phone_number && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 form-control py-3.5" type="number" placeholder="x xxx xxx" style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                             <div class="flex items-center absolute" style="top: 50%;transform: translateY(-50%);left: 20px;" ><span><span style="vertical-align: inherit;"><span style="vertical-align: inherit;"></span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5"></span></span>&nbsp;&nbsp;05</div>
                         </div>
                          <!--Error-->
                         <p v-if="!!errors.phone_number" class="text_yellow text-right p-2">{{ errors.phone_number[0] }}</p>
 
 
                        
 <!--                         
                         <div class="mb-2 relative  selt-frm "  >
                             
                             <select v-model="address"  class="w-full text-end border rounded-lg py-4  selt-frm"  > 
                                 <option class="text-end" value="" disabled selected>    مدينة      </option> 
                                 <option value="Riyadh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الرياض</span></span></option>
                                 <option value="Medina"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مدينة</span></span></option>
                                 <option value="Jeddah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">جدة </span> </span></option>
                                 <option value="Dammam"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الدمام </span></span></option>
                                 <option value="Tabuk"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">تبوك</span></span></option>
                                <option value="Taif"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الطائف</span></span></option>
                                 <option value="Mecca"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مكه</span></span></option>
                                 <option value="Najran"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> نجران</span></span></option>
                                 <option value="Hail"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> مدينة حائل</span></span></option>
                                 <option value="Buraidah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">بريدة </span></span></option>
                                 <option value="Jazan"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  جازان </span></span></option>
                                 <option value="Khamis Mushayt"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">خميس مشيط  </span></span></option>
 
                                 <option value="Al-Hofuf"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الهفوف  </span></span></option>
                                 <option value="Al Qatif"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  القطيف </span></span></option>
                                 <option value="Abha"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> أبها</span></span></option>
                                 <option value="Sakaka"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">سكاكا </span></span></option>
                                 <option value="Al Khobar"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الخبر</span></span></option>
                                 <option value="Al Bahah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الباحة </span></span></option>
                                 <option value="Dhahran"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الظهران</span></span></option>
                                 <option value="Al Kharj"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الخرج</span></span></option>
                                 
                                 <option value="Al Jubail"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الجبيل</span></span></option>
                                 <option value="Hafar Al Batin"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">حفر الباطن </span></span></option>
                                 <option value="Ras Tanura"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> رأس تنورة</span></span></option>
                                 <option value="Turaif"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">طريف </span></span></option>
                                 <option value="Al Duwadimi"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  الدوادمي </span></span></option>
                                <option value="Duba"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  ضباء </span></span></option>
                                 <option value="Rabigh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> رابغ</span></span></option>
                                 <option value="Arar"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  عرعر </span></span></option>
                                 <option value="Badr"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  بدر </span></span></option>
                                 <option value="Ar Rass"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الرس</span></span></option>
                                 <option value="Al Wajh"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  الوجه </span></span></option>
                                 <option value="Az Zulfi"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الزلفي</span></span></option>
                                 <option value="Al Qurayyat"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> القريات  </span></span></option>
                                 <option value="Khafji"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> الخفجي  </span></span></option>
                                 <option value="Bisha"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  بيشة </span></span></option>
                                 <option value="Al-Namas"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> النماص</span></span></option>
                                 <option value="Umluj"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> أملج</span></span></option>
                                 <option value="Unaizah"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">عنيزة </span></span></option>
                                 
                        </select >
                        <font-awesome-icon icon="fa-solid fa-angle-down" />
                        <p class="hdselop"></p>
                         </div> -->
                         <div  class="mb-2 selt-frm" >
                             <!-- <input v-model="address" :class="!!errors.address && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 py-3.5 text-end" type="text" placeholder="مدينة" style="background: #f2f2f2;border-style: none;"> -->
                             <select v-model="address" :class="!!errors.address && 'error_border'" required  class="bg-[#F2F2F2] px-2 border rounded-lg w-full border-r-[12px] border-transparent py-3.5 text-end">
                                 <option value="">اختر مدينة</option>
                                 <option v-for="city in cityes" :key="city" :value="city">{{ city }}</option>
                             </select>
                         </div>
                         <!--Error-->
                         <p v-if="!!errors.address" class="text_yellow text-right p-2">{{ errors.address[0] }}</p>
                         <div  class="mb-2   selt-frm  " >
                             <input v-model="Staddress"  :class="!!errors.Staddress && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 py-3.5 text-end" type="text" placeholder="العنوان (الحي، الشارع)" style="background: #f2f2f2;border-style: none;">
                         </div>
                     <!--Error-->
                     <p v-if="!!errors.Staddress" class="text_yellow text-right p-2">{{ errors.Staddress[0] }}</p>
                        <div class="frm-s flex justify-between selt-frm-txt mt-4">
                             <span>
                                 <span class="vertical-align: inherit;">
                                     <span class="vertical-align: inherit;">
                                         x{{ product.quantity }}
                                     </span>
                                 </span>
                             </span>
                             <span>
                               {{ product.name }}
 
                             </span>
                         </div>
                       <div class="flex justify-between selt-frm-txt mt-3"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> 100 ر.س</span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">السعر شامل الضريبة</span></span></span></div>
                         <div class="flex justify-between selt-frm-txt mt-3"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مجاني</span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الشحن السريع</span></span></span></div>
                         <div class="selt-frm-txt-d "></div>
                         <div class="flex justify-between selt-frm-txt mt-3 flex-row-reverse"><span style="font-weight: bold;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">{{ totalPrice.totalPrice }} ر.س
                         </span></span></span><span class="font-weight: bold;"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الاجمالي </span></span></span></div>
                         
                         <div class="mt-4 px-2"><button type="submit" class="dc-btn">شراء</button></div>
                         
                     </form>
                 </div>
             </div>
         </main>
     </div>
      
    
     </section>
     <section class="flex justify-start"> 
         <div class="w-24 ml-6 mt-12"><img src="~/assets/img/Logo.png"></div> 
     </section>
 
     <section class="flex justify-end"> 
         <div class="w-full max-w-sm mbimg140"><img src="~/assets/img/olivia.webp"></div> 
     </section>
     
 
     <section class="text-end px-3 frmbtm  mt-(-48) pt-48">
         <div class="container px-1  " style="padding-bottom: 38px;" >
             <h2 style="color: #343434;" class="text-4xl px-2 flex justify-end mb-3 mt-5"><span ><span >لماذا صفوة الجوف؟
             </span></span></h2>
             <p class="flex justify-end px-2" style="color: #343434;"><span ><span >لأننا نقدم منتج فاخر وعضوي ١٠٠٪ يعتني بجودة غذائكم وصحتكم..</span></span>
               </p>
             <div >
                 <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-4"><span ><span >&nbsp; جودة المحاصيل
                 </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                 <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >في مزرعتنا أكثر من ٨٠٠,٠٠٠ شجرة زيتون ُتنتج أفضل محصول سنوياً، ومع ذلك نقوم بجرد المحصول لاستبعاد حبات الزيتون المعيبة لضمان أفضل زيت وقت العصر.</span></span>
                   </p>
             </div>
             <div >
                 <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-3"><span ><span >&nbsp; حموضة أقل
                 </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                 <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                   </p>
             </div>
             <div >
                 <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-3"><span ><span >&nbsp; طعم مميز
                 </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                 <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                   </p>
             </div>
             <div class=" mt-3"><button class="dc-btn"> <a href="#first-section">        اطلبه الآن    </a>  </button></div>
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
             Staddress: '',
             message: '',
             errors: {},
             cityes: [
                 'الرياض',
                 'جدة',
                 'مكة المكرمة',
                 'المدينة المنورة',
                 'الأحساء', 'الدمام',
                 'الخبر',
                 'القطيف',
                 'الطائف',
                 'بريدة',
                 'عنيزة',
                 'أبها',
                 'خميس مشيط',
                 'جازان',
                 'تبوك',
                 'نجران',
                 'سكاكا',
                 'حائل',
                 'الباحة',
                 'عرعر',
             ]
         };
     },
 
    
 
 
     props: ['msg', 'product', 'totalPrice'],
     methods: {
       async  purchase() {
             try {
                 const response = await axios.post('https://safwat-backend.scales.agency/api/order', {
                     name: this.name,
                     phone_number: this.phone,
                     address: this.address,
                     Staddress: this.Staddress,
                     selectedProduct: this.product,
                 })
                     this.name = '',
                     this.phone = '',
                         this.address = '',
                         this.Staddress = '',
                         this.message = response.data.message
                     return navigateTo('/message')
             } catch (er) {
                 this.errors = er.response.data.errors
             }
         }
     }
 };
 
 </script>
 
 
 
 <style>
 
 
 </style>