<template>
    

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
    
    <!-- <button type="submit" class="btn btn-default" @click="Counter -= 1">
        <p v-text="Counter"></p>
    </button> -->
</template>

<script>
    export default {
        data() {
            return {
                count: 1,
               
                
           }
    },
    props:['index']
    }
</script>
