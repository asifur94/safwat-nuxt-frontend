<template>
    <div class="flex items-center justify-center h-screen">
        <div>
            <div class="flex flex-col items-center space-y-2">
                <span><img class="w-[60px] h-[60px]" src="../assets/img/circle-check.png" alt=""></span>
                <h1 class="text-4xl font-bold">شكرًا لك</h1>
                <h3>تم استلام طلبك بنجاح</h3>
                <p>سنؤكد الرسائل القصيرة عبر الواتساب</p>
                <nuxt-link  to='/' class="inline-flex items-center px-4 py-2 text-white rounded-lg btnclr focus:outline-none focus:ring">
                
                    <span class="text-sm font-medium">
                        شارك العرض مع صديق
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware: ["add"]
})
</script>


