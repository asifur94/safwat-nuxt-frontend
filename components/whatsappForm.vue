<template>

    <section class="text-end px-2">
        <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" ></div>
            
            <h3 style="font-size: 16px;font-weight: bold;"><span><span >حفظ هذا العرض لوقت لاحق
            </span></span></h3>

            <button class="flex justify-center  bg-gray-200 dc-btn-2 " @click="isShow = !isShow">  <img class="wtsapimg mx-1 h-5" src="~/assets/img/009-whatsapp.png" alt="">ارسله لي عبر الوتس اب</button>
            <div v-show="isShow">
            <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" class="mb-4" ></div>
            <div class="container text-center" >
                <div class=" border-solid border-2  border-slate-100 rounded-lg  px-2 pb-3" >
                    <form class="text-end">
                        <div class="mb-2   selt-frm  " ><input class=" pr-3 w-full pl-8 py-3" type="number" placeholder="أدخل رقمك" style="background: #f2f2f2;border-style: none;"></div>
                       

                        
                        <div class="mt-3"><button @submit.prevent="whatsapp" class="dc-btn"><a href="https://wa.me/212612086755">أرسل رسالة</a></button></div>
                        
                    </form>
                </div>
            </div>

           </div>
    </section>










    
</template>


<script>

export default {
    props:['index'],
    name: "ToggleDiv",
    data: function () {
        return {
            isShow: false,
        };
    },

    props: {
        msg: String,
    },

}

</script>