<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal gap-2">
        <li>
            <RouterLink to="/">
              <i class="pi pi-home"></i>
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/channels">
              <i class="pi pi-bars"></i>
            </RouterLink>
        </li>
        <li class="z-20">
          <details>
            <summary><i class="pi pi-cog"></i></summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
