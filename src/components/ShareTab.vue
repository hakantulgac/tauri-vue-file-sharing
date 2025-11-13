<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const showFileList = ref(false);

const router = useRouter();

const changeShowFileList = () => showFileList.value = !showFileList.value

const navigateToChannelDetail = () => {
  router.push(`/channels/${123}`);
}

</script>

<template>
    <div
    class="w-3/4 border-2 border-primary border-dashed mx-auto my-10 rounded-lg text-center pt-10"
  >
    <div class="flex items-center">
      <input type="file" class="file-input file-input-md ml-auto" />
      <div class="indicator ml-2 z-50 mr-auto">
        <span class="indicator-item badge badge-success rounded-2xl">12</span>
        <button class="btn" @click="changeShowFileList">
          <i v-if="!showFileList" class="pi pi-angle-double-down"></i>
          <i v-else class="pi pi-angle-double-up"></i>
        </button>
      </div>
    </div>
    <div v-if="showFileList" class="border border-secondary w-[377px] mx-auto rounded-sm mt-2">
      <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Added files
        </li>

        <li class="list-row">
          <div>
            <i class="pi pi-image m-3 text-green-500"></i>
          </div>
          <div>
            <div>jokeas da ar.jpg</div>
            <div class="text-xs uppercase font-semibold opacity-60">
              12,5 kb
            </div>
          </div>
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
            <div class="text-xs uppercase font-semibold opacity-60">
              12,5 kb
            </div>
          </div>
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
            <div class="text-xs uppercase font-semibold opacity-60">
              12,5 kb
            </div>
          </div>
          <button class="btn btn-square btn-ghost">
            <i class="pi pi-trash text-red-500"></i>
          </button>
        </li>
      </ul>
    </div>
    <button 
      @click="navigateToChannelDetail" 
      class="btn btn-active btn-success -mb-1 mt-10 w-full rounded-lg opacity-90 hover:opacity-100"
    >
      Share
    </button>
  </div>
</template>