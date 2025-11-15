<script setup>
import { ref, watch } from "vue";
import QRCode from "qrcode";

const props = defineProps({
  title: {
    type: String,
    default: "For display this channel on another device",
  },
  url: {
    type: String,
    default: "",
  },
});

const qrSrc = ref("");

watch(
  () => props.url,
  async (newUrl) => {
    if (!newUrl) return;
    qrSrc.value = await QRCode.toDataURL(newUrl, {
      width: 200,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#ffffff"
      },
    });
  },
  { immediate: true }
);
</script>
<template>
  <div class="divider w-[377px] mx-auto my-10">
    {{ title }}
  </div>
  <div class="flex w-[377px] flex-col mx-auto mb-10">
    <div class="card bg-base-300 rounded-box grid place-items-center">
      <img class="w-52 h-52 bg-white" :src="qrSrc" alt="" />
    </div>
    <div class="divider">OR</div>
    <div class="card bg-base-300 rounded-box grid h-20 place-items-center">
      {{ url }}
    </div>
  </div>
</template>
