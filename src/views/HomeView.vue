<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import vh1 from '@/components/core/vh1.vue'

const counter = useCounterStore()
</script>

<template>
  <vh1 class="mb-[5rem] text-center">Home</vh1>

  <div
    class="mx-auto grid max-w-[20rem] grid-cols-3 items-center justify-items-center gap-[2rem]"
  >
    <div>
      {{ counter.count }}
    </div>

    <div>
      {{ counter.doubleCount }}
    </div>
    <button class="bg-[#ddd] p-[2rem]" @click="counter.increment()">+</button>
  </div>
</template>
