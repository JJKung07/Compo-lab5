<script setup lang="ts">
import type { Organizer } from '@/types'
import OrganizerService from '@/services/OrganizerService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const organizer = ref<Organizer>({
  id: 0,
  name: ''
})
const router = useRouter()
const store = useMessageStore()

function saveOrganizer() {
  OrganizerService.saveOrganizer(organizer.value) // Adjusted method to save organizer
    .then((response) => {
      router.push({ name: 'organizer-detail-view', params: { id: response.data.id } })
      store.updateMessage('You have successfully added a new organizer with ID ' + response.data.id)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
}
</script>

<template>
  <div>
    <h1>Create an Organizer</h1>
    <form @submit.prevent="saveOrganizer">
      <h3>Name & Describe the Organizer</h3>
      <label>Name</label>
      <input v-model="organizer.name" type="text" placeholder="Name" class="field" required />

      <button class="button" type="submit">Submit</button>
    </form>

    <pre>{{ organizer }}</pre>
  </div>
</template>
