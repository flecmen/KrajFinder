<script setup lang="ts">
import { TableColumn } from '$ui'
import { useKrajByIco } from './libs/ObchodniRejstrik/functions/useKrajByIco'
import { useVrByIco } from './libs/ObchodniRejstrik/functions/useVRByIco'

const { getKrajByIco, getKrajsByManyIcos } = useKrajByIco()

const info = ref()
const isLoading = ref(false)
const ica = ref('25304046')
const icaArr = computed(() => {
  if (isEmpty(ica.value)) {
    return []
  }

  return ica.value
    .split('\n')
    .map(ico => ico.trim())
})

async function handleSubmit() {
  isLoading.value = true
  info.value = await getKrajsByManyIcos(icaArr.value)
  isLoading.value = false
}

const columns = computed<TableColumn[]>(() => [
  // ico
  new TableColumn({
    field: 'ico',
    label: 'IČO',
  }),

  // kraj
  new TableColumn({
    field: 'kraj',
    label: 'Kraj',
  }),
])
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
    <TextArea
      v-model="ica"
      placeholder="Vloz seznam IČO"
    />
  </Form>

  <Loader v-if="isLoading" />

  <Table
    v-model:rows="info"
    :columns="columns"
  />
</template>
