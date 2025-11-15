<script setup>
import { deleteChannel } from '../services/channels';

const props = defineProps({
    channelId: String
});

const emit = defineEmits(["update"]);

const deleteChannelHandler = async (id) => {
    try {
        await deleteChannel(id);
        emit("update", id);
    } catch (error) {
        console.log("Server error");
    }
}

</script>

<template>
  <div class="dropdown dropdown-left">
    <div tabindex="0" role="button" class="btn btn-square btn-ghost">
      <i class="pi pi-trash text-red-500"></i>
    </div>
    <div
      tabindex="0"
      class="dropdown-content card card-sm bg-base-100 z-50 w-64"
    >
      <div class="card-body">
        <p>This channel will be deleted!</p>
        <div>
          <button class="btn btn-warning" @click="deleteChannelHandler(channelId)">Delete</button>
          <button class="btn ml-1" onclick="document.activeElement.blur()">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
