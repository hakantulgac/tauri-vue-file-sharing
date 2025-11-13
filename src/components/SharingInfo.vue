<script setup>
import exampleQr from "../assets/example-qr.svg";

const props = defineProps({
  title: {
    type: String,
    default: 'For display this channel on another device'
  }
})
</script>
<template>
  <div class="divider w-[377px] mx-auto my-10">
    {{ title }}
  </div>
  <div class="flex w-[377px] flex-col mx-auto mb-10">
    <div class="card bg-base-300 rounded-box grid place-items-center">
      <img class="w-52 h-52 bg-white" :src="exampleQr" alt="" />
    </div>
    <div class="divider">OR</div>
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">
      192.168.1.12:5866/channels/123456
    </div>
  </div>
</template>
