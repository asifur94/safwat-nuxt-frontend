<template>

    <section class="text-end  container">
        <div  style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" ></div>
            
            <h3 class="text-base font-bold px-1" ><span><span >حفظ هذا العرض لوقت لاحق
            </span></span></h3>

            <button class="flex justify-center  bg-gray-200 dc-btn-2 " @click="isShow = !isShow">  <img class="wtsapimg mx-1 h-5" src="~/assets/img/009-whatsapp.png" alt="">ارسله لي عبر الوتس اب</button>
            <div v-show="isShow">
            <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" class="mb-4" ></div>
            <div class="container " >
                
                    <div class=" flex justify-between">
                        
                        <div class=" relative w-full selt-frmmm "  >
                            <input class="h-4 py-3 w-full whtsinp " type="text" placeholder="xxx xxx xxx" style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                            <div class="flex   items-center absolute" style="top: 50%;transform: translateY(-50%);left: 20px;  #f2f2f2;border-style: none;" ><span>05&nbsp;&nbsp;</span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5"></div>
                        </div>

                        
                        <a href=""><img class="wtsim" src="~/assets/img/wts.png" alt=""> </a>
                       
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