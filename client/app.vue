<script setup lang="ts">
import { useKrajByIco } from './libs/ObchodniRejstrik/functions/useKrajByIco'
import { useVrByIco } from './libs/ObchodniRejstrik/functions/useVRByIco'

const { getKrajByIco } = useKrajByIco()

const icoLocal = ref('')
const isLoading = ref(false)

const kraj = ref('')
const companyName = ref('')

async function handleSubmit() {
  isLoading.value = true
  const info = await getKrajByIco(icoLocal.value)
  kraj.value = info?.kraj || 'Nenalezeno'
  companyName.value = info?.companyName || 'Nenalezeno'
  isLoading.value = false
}
</script>

<template>
  <Form
    :submit-btn-props="{
      ui: {
        btnClass: 'dark:color-white color-black',
      },
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

  <b>
    Nazev:
  </b> {{ companyName }}

  <br>
  <b>
    Kraj:
  </b>
  {{ kraj }}
</template>
