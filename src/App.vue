<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const store = useMessageStore()
const { message } = storeToRefs(store)
const router = useRouter()
const pageSize = ref(3)

const updatePageSize = (size: number) => {
  pageSize.value = size
  router.push({ name: 'event-list-view', query: { size: size } })
}
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialiased">
    <header>
      <div class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel</h1>
      <div class="wrapper">
        <nav class="py-6">
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'event-list-view' }"
            >Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'about' }"
            >About</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'add-event' }"
            >New Event</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'organizer-list-view' }"
            >Organizer</RouterLink
          >
          |
          <RouterLink
            class="font-bold text-gray-700"
            exact-active-class="text-green-500"
            :to="{ name: 'add-organizer' }"
            >New Organizer</RouterLink
          >
        </nav>
        <div>
          <label for="page-size">Events per page:</label>
          <select id="page-size" v-model="pageSize" @change="updatePageSize(pageSize)">
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style></style>
