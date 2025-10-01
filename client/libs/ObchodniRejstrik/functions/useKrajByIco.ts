const RATE_LIMIT_PER_MINUTE = 500
const MS_PER_MINUTE = 60_000
const MIN_DELAY_BETWEEN_CALLS = Math.ceil(MS_PER_MINUTE / RATE_LIMIT_PER_MINUTE)

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function useKrajByIco() {
  async function getCompanyInfo(ico: string) {
    return aresApi.ekonomickeSubjektyVr.vratEkonomickySubjektVr({ ico }) as Promise<EkonomickySubjektVr>
  }

  async function getKrajByIco(ico: string) {
    const companyData = await getCompanyInfo(ico)

    const kraj = companyData?.zaznamy?.[0]?.adresy?.[0]?.adresa?.nazevKraje

    const companyName = companyData?.zaznamy?.[0]?.obchodniJmeno?.[0]?.hodnota

    return { kraj, companyName, ico }
  }

  async function getKrajsByManyIcos(icos: string[]) {
    const sanitizedIcos = icos
      .map(ico => ico?.trim())
      .filter((ico): ico is string => Boolean(ico && ico.length > 0))

    const results: Array<{
      ico: string
      kraj: string | undefined
      companyName: string | undefined
      error?: string
    }> = []

    for (let index = 0; index < sanitizedIcos.length; index++) {
      const ico = sanitizedIcos[index]

      try {
        const result = await getKrajByIco(ico)
        results.push({ ico, ...result })
      }
      catch (error) {
        results.push({
          ico,
          kraj: undefined,
          companyName: undefined,
          error: error instanceof Error ? error.message : String(error),
        })
      }

      if (index < sanitizedIcos.length - 1) {
        await delay(MIN_DELAY_BETWEEN_CALLS)
      }
    }

    return results
  }

  return {
    getKrajByIco,
    getKrajsByManyIcos,
  }
}
