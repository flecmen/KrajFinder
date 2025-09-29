export const useCodebook = defineQuery(() => {
  const codebookCode = ref<string | null>(null)

  const { data, ...rest } = useQuery({
    key: () => ['codebook', codebookCode.value ?? ''],
    query: () => aresApi.ciselnikyNazevniky.vyhledejCiselnik({ kodCiselniku: codebookCode.value ?? '' }) as unknown as Promise<CiselnikyNazevnikSeznam>,
  })

  return {
    codebook: data.value?.ciselniky?.[0],
    ...rest,
    codebookCode,
  }
})
