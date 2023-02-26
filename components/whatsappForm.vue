<template>
    <div>
<div class="text-end  container">
    <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;"></div>

    <h3 class="text-base font-bold px-1 pb-2"><span><span>حفظ هذا العرض لوقت لاحق
            </span></span></h3>

    <div v-if="!message">
        <button v-show="!isShow" class="flex justify-center  bg-gray-200 dc-btn-2 " @click="isShow = !isShow"> <img class="wtsapimg mx-1 h-5"
                src="~/assets/img/009-whatsapp.png" alt="">ارسله لي عبر الوتس اب</button>
        <div v-show="isShow">
            <form class="container" @submit.prevent="whatsappSubmit">
        
                <div class=" flex justify-between">
        
                    <div class="relative w-full selt-frmmm ">
                        <input :class="!!error && 'error_border'" class="py-4 w-full rounded" v-model="phone" type="number" placeholder="x xxx xxx"
                            style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                        <div class="flex items-center absolute"
                            style="top: 54%;transform: translateY(-50%);left: 20px;  #f2f2f2;border-style: none;">
                            <span></span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png"
                                class="w-5">&nbsp;&nbsp;05
                        </div>
                    </div>
        
        
                    <button href=""><img class="wtsim" src="~/assets/img/wts.png" alt=""> </button>
        
                </div>
            </form>
            <p v-if="!!error" class="text_yellow text-start p-4">{{ error }}</p>
        
        </div>
    </div>
</div>
        <div v-if="!!message" class="flex items-center justify-center">
            <div>
                <p class="bg-[#F2F2F2] py-2 sm:px-12 w-screen sm:w-auto justify-center rounded flex gap-2 items-center">تم الارسال. تحقق من الواتس اب
                    <span class="w-5 h-5 flex justify-center items-center bg-[#B7C226] rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-3 h-3 text-[#F2F2F2]">
                    <path stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span></p>
            </div>
        </div>
    </div>
 
</template>




<script>
import axios from 'axios';
export default {
    props:['index'],
    name: "ToggleDiv",
    data: function () {
        return {
            phone: '',
            message: '',
            error:'',
            isShow: false,
           
        };
    },

    props: {
        msg: String,
    },
    methods: {
        async  whatsappSubmit() {
                try {
                    const response = await axios.post('https://safwat-backend.scales.agency/api/add-whatsapp-number', {
                        phone_number: this.phone,
                    })
                    this.phone = ''
                    this.message = response.data.message
                    this.error = ''
                    console.log(this.city.length)

                } catch (er) {
                    this.error = er.response.data.errors.phone_number[0]
                }
        }
    }

}

</script>