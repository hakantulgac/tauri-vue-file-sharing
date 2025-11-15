<script setup>
import { ref } from "vue";
import { getIpAddress } from "../services/channels";
import SharingInfo from "./SharingInfo.vue";

const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  code: {
    type: Number,
    default: 0,
  },
});

const ipAddress = ref("");

const openDialog = async (code) => {
  if (code) {
    try {
      const response = await getIpAddress();
      const { ip_address } = response.data;

      ipAddress.value = ip_address;

      const dialog = document.getElementById("modal-" + code);
      dialog?.showModal();
    } catch (error) {
      console.log("Server Error");
    }
  }
};
</script>

<template>
  <button class="btn btn-square btn-ghost -mr-4" @click="openDialog(code)">
    <i class="pi pi-qrcode"></i>
  </button>
  <dialog :id="'modal-' + code" class="modal">
    <div class="modal-box">
      <SharingInfo :url="`http://${ipAddress}:56866/channels/${code}`" />
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
