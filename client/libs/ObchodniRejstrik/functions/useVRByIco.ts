export const useVrByIco = defineQuery(() => {
  const ico = ref<string | null>(null)

  const query = useQuery({
    key: () => ['subjectVRbyIco', ico.value ?? ''],
    query: () => aresApi.ekonomickeSubjektyVr.vratEkonomickySubjektVr({ ico: ico.value ?? '' }) as unknown as Promise<EkonomickySubjektVr>,
    enabled: () => !isNil(ico.value),
  })

  return {
    company: query.data,
    query,
    ico,
  }
})
