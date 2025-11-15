<script setup>
import { useRouter } from "vue-router";
import SharingInfo from "../components/SharingInfo.vue";

const router = useRouter()

const goToChannelList = () => {
    router.push('/channels')
}
</script>

<template>
  <div class="w-[377px] mx-auto flex justify-between mt-10">
    <div>
      <button class="btn btn-primary">Add File</button>
    </div>
    <div>
      <button class="btn btn-error">Delete Channel</button>
      <button @click="goToChannelList" class="btn btn-ghost">
        <i class="pi pi-times"></i>
      </button>
    </div>
  </div>
  <div class="border border-secondary w-[377px] mx-auto rounded-sm mt-2">
    <ul class="list bg-base-100 rounded-box shadow-md">
      <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Sharing files: 12
      </li>

      <li class="list-row">
        <div>
          <i class="pi pi-image m-3 text-green-500"></i>
        </div>
        <div>
          <div>jokeas da a sda 6s4d5a4s5d4 5as4d5ar.jpg</div>
          <div class="text-xs uppercase font-semibold opacity-60">12,5 kb</div>
        </div>
        <button
          class="btn btn-square btn-ghost -mr-4"
          onclick="my_modal_3.showModal()"
        >
          <i class="pi pi-qrcode"></i>
        </button>
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box">
            <SharingInfo title="For download this file" />
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <button class="btn btn-square btn-ghost">
          <i class="pi pi-trash text-red-500"></i>
        </button>
      </li>
      <li class="list-row">
        <div>
          <i class="pi pi-file-pdf m-3 text-red-300"></i>
        </div>
        <div>
          <div>jokeas da ar.jpg</div>
          <div class="text-xs uppercase font-semibold opacity-60">12,5 kb</div>
        </div>
        <button
          class="btn btn-square btn-ghost -mr-4"
          onclick="my_modal_4.showModal()"
        >
          <i class="pi pi-qrcode"></i>
        </button>
        <dialog id="my_modal_4" class="modal">
          <div class="modal-box">
            <SharingInfo title="For download this file" />
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <button class="btn btn-square btn-ghost">
          <i class="pi pi-trash text-red-500"></i>
        </button>
      </li>
      <li class="list-row">
        <div>
          <i class="pi pi-video m-3 text-purple-400"></i>
        </div>
        <div>
          <div>jokeas da ar.jpg</div>
          <div class="text-xs uppercase font-semibold opacity-60">12,5 kb</div>
        </div>
        <button
          class="btn btn-square btn-ghost -mr-4"
          onclick="my_modal_5.showModal()"
        >
          <i class="pi pi-qrcode"></i>
        </button>
        <dialog id="my_modal_5" class="modal">
          <div class="modal-box">
            <SharingInfo title="For download this file" />
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
  </div>
  <SharingInfo />
</template>
