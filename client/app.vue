<script setup lang="ts">
import { useKrajByIco } from './libs/ObchodniRejstrik/functions/useKrajByIco'
import { useVrByIco } from './libs/ObchodniRejstrik/functions/useVRByIco'

const { getKrajByIco } = useKrajByIco()

const icoLocal = ref('')
const kraj = ref('')

const isLoading = ref(false)

async function handleSubmit() {
  isLoading.value = true
  kraj.value = await getKrajByIco(icoLocal.value)
  isLoading.value = false
}
</script>

<template>
  <Form
    :submit-btn-props="{

    }"

    :submit-confirmation="false"
    @submit="handleSubmit"
  >
    <TextInput
      v-model="icoLocal"
      label="IČO"
      name="ico"
    />
  </Form>

  <Loader v-if="isLoading" />

  {{ kraj }}
</template>
