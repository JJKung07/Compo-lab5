<script setup lang="ts">
import Uploader from 'vue-media-upload'
import { ref } from 'vue'

interface Props {
  modelValue?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: () => []
})

const emit = defineEmits(['update:modelValue'])

const convertStringToMedia = (str: string[] = []): any => {
  return str.map((element: string) => ({
    name: element
  }))
}

const convertMediaToString = (media: any): string[] => {
  return media.map((element: any) => element.name)
}

const media = ref(convertStringToMedia(props.modelValue))
const uploadUrl = ref(import.meta.env.VITE_UPLOAD_URL)

const onChanged = (files: any) => {
  if (files.length > 1) {
    alert('You can only upload one image.')
    // Keep only the first image and ignore others
    files = files.slice(0, 1)
  }

  console.log('Files uploaded:', files)
  media.value = files
  emit('update:modelValue', convertMediaToString(files))
}
</script>

<template>
  <Uploader :server="uploadUrl" @change="onChanged" :media="media"></Uploader>
</template>
