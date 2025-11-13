<script setup>
import { ref } from "vue";

const downloadOption = ref("channel");
</script>

<template>
  <div class="text-center mt-10">
    <div>
      <select v-model="downloadOption" class="select select-success">
        <option value="channel">Display a file sharing channel</option>
        <option value="direct">Direct download a file</option>
      </select>
    </div>
    <div class="mt-8">
      <input
        type="text"
        placeholder="IP Address Of Target Device"
        class="input"
      />
    </div>
    <div class="mt-3">
      <input type="text" placeholder="Channel Code" class="input" />
    </div>
    <div v-if="downloadOption === 'direct'" class="mt-3">
      <input type="text" placeholder="File Name" class="input" />
    </div>
    <div class="mt-5">
      <Button v-if="downloadOption === 'channel'" class="btn btn-success">
        View Channel
      </Button>
      <Button v-else class="btn btn-success">Download</Button>
    </div>
  </div>
</template>
