<script setup lang="ts">
import { useKrajByIco } from './libs/ObchodniRejstrik/functions/useKrajByIco'
import { useVrByIco } from './libs/ObchodniRejstrik/functions/useVRByIco'

const { getKrajByIco } = useKrajByIco()

const icoLocal = ref('')
const kraj = ref('')

async function handleSubmit() {
  kraj.value = await getKrajByIco(icoLocal.value)
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

  {{ kraj }}
</template>
