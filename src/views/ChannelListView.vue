<script setup>
import { useRouter } from "vue-router";
import SharingInfo from "../components/SharingInfo.vue";

const router = useRouter();

const navigateToChannelDetail = () => {
  router.push(`/channels/${123}`);
};
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md p-2">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
      File Sharing Channels
    </li>

    <li
      class="list-row bg-primary text-primary-content my-1 border border-green-500 opacity-90 hover:opacity-100 transition"
    >
      <div class="grid grid-cols-2 gap-1">
        <i class="pi pi-images text-green-500"></i>
        <i class="pi pi-file-pdf text-red-500"></i>
        <i class="pi pi-video text-purple-500"></i>
        <i class="pi pi-file text-blue-500"></i>
      </div>
      <div @click="navigateToChannelDetail" class="cursor-pointer">
        <div>CODE: 845246</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          6 Files, 845mb, 12.06.2020
        </div>
      </div>
      <button
        class="btn btn-square btn-ghost -mr-4"
        onclick="my_modal_2.showModal()"
      >
        <i class="pi pi-qrcode"></i>
      </button>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <SharingInfo />
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <button class="btn btn-square btn-ghost">
        <i class="pi pi-trash text-red-500"></i>
      </button>
    </li>
  </ul>
</template>
