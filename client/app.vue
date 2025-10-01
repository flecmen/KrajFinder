<script setup lang="ts">
import { useKrajByIco } from './libs/ObchodniRejstrik/functions/useKrajByIco'
import { useVrByIco } from './libs/ObchodniRejstrik/functions/useVRByIco'

const { getKrajByIco, getKrajsByManyIcos } = useKrajByIco()

const info = ref()
const isLoading = ref(false)
const ica = ref('')
const icaArr = computed(() => {
  if (isEmpty(ica.value)) {
    return []
  }

  return ica.value
    .split('\n')
    .map(ico => ico.trim())
})

const kraj = ref('')
const companyName = ref('')

async function handleSubmit() {
  isLoading.value = true
  info.value = await getKrajsByManyIcos(icaArr.value)
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
    <TextArea
      v-model="ica"
      placeholder="Vloz seznam IČO"
    />
  </Form>

  <Loader v-if="isLoading" />

  <table>
    <tr
      v-for="item in info"
      :key="item.ico"
    >
      <td>{{ item.ico }}</td>
      <td>{{ item.companyName }}</td>
      <td>{{ item.kraj }}</td>
    </tr>
  </table>
</template>
