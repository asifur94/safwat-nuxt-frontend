<template>

    <section class="text-end  container">
        <div  style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" ></div>
            
            <h3 class="text-base font-bold px-1" ><span><span >حفظ هذا العرض لوقت لاحق
            </span></span></h3>

            <button class="flex justify-center  bg-gray-200 dc-btn-2 " @click="isShow = !isShow">  <img class="wtsapimg mx-1 h-5" src="~/assets/img/009-whatsapp.png" alt="">ارسله لي عبر الوتس اب</button>
            <div v-show="isShow">
            <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" class="mb-4" ></div>
            <div class="container text-center" >
                <div class=" " >
                    <form class="text-end flex ">
                        <div class="  h-20px   flex-1 border-solid border-2  border-slate-100 rounded-lg    " ><input class=" w-full px-8 " type="number" placeholder="أدخل رقمك" style="background: #f2f2f2;border-style: none;">
                        </div>
                       

                        
                        <div class="flex-1  w-3 wtsbtnbck bg-gray-400"><button @submit.prevent="whatsapp" class="wtsbtn"><img src="~/assets/img/003-check.png" alt=""></button></div>
                       
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