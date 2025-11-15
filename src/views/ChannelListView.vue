<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getChannels } from "../services/channels";
import ShareDialogButton from "../components/ShareDialogButton.vue";
import DeleteChannelButton from "../components/DeleteChannelButton.vue";

const router = useRouter();
const channel_list = ref([]);

const navigateToChannelDetail = (id) => {
  router.push(`/channels/${id}`);
};

const updateChannels = (id) => {
  channel_list.value = channel_list.value.filter(i => i.id !== id);
}

onMounted(async () => {
  try {
    const response = await getChannels();
    channel_list.value = response.data;
  } catch (error) {
    console.log("Server error");
  }
});
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md p-2">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">
      File Sharing Channels
    </li>

    <li
      v-for="channel in channel_list"
      :key="channel.id"
      class="list-row bg-primary text-primary-content my-1 border border-green-500 opacity-90 hover:opacity-100 transition"
    >
      <i class="pi pi-folder text-green-500 text-2xl mt-2"></i>
      <div @click="navigateToChannelDetail(channel.id)" class="cursor-pointer">
        <div>CODE: {{ channel.code }}</div>
        <div class="text-xs uppercase font-semibold opacity-60">
          {{ channel.file_count }} Files - {{ channel.total_size }} byte -
          {{ new Date(channel.date_created).toLocaleString() }}
        </div>
      </div>
      <ShareDialogButton :code="channel.code" />
      <DeleteChannelButton :channelId="channel.id" @update="updateChannels" />
    </li>
  </ul>
</template>
