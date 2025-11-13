<script setup>
import { ref } from "vue";

import ShareTab from "../components/ShareTab.vue";
import DownloadTab from "../components/DownloadTab.vue";

const tab = ref("share");

const changeTab = (_tab) => {
  tab.value = _tab;
};
</script>

<template>
  <div class="flex">
    <div role="tablist" class="tabs tabs-box tabs-sm bg-primary mx-auto mt-2">
      <a
        @click="changeTab('share')"
        role="tab"
        :class="`tab ${tab === 'share' ? 'tab-active' : ''}`"
      >
        <i class="pi pi-share-alt m-2"></i>
        Share
      </a>
      <a
        @click="changeTab('download')"
        role="tab"
        :class="`tab ${tab === 'download' ? 'tab-active' : ''}`"
      >
        <i class="pi pi-download m-2"></i>
        Download
      </a>
    </div>
  </div>
  <ShareTab v-if="tab === 'share'" />
  <DownloadTab v-else />
</template>
