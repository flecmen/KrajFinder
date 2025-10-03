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

    if (sanitizedIcos.length === 0) {
      return []
    }

    try {
      const response = await aresApi.ekonomickeSubjektyVr.vyhledejSeznamEkonomickychSubjektuVr({
        ico: sanitizedIcos,
      }) as any as EkonomickeSubjektyVrSeznam

      const results = sanitizedIcos.map(ico => {
        const companyData = response.ekonomickeSubjekty?.find(
          (subjekt: EkonomickySubjektVr) => subjekt.icoId === ico,
        )

        if (!companyData) {
          return {
            ico,
            kraj: undefined,
            companyName: undefined,
            error: 'Company not found in response',
          }
        }

        const kraj = companyData.zaznamy?.[0]?.adresy?.[0]?.adresa?.nazevKraje
        const companyName = companyData.zaznamy?.[0]?.obchodniJmeno?.[0]?.hodnota

        return {
          ico,
          kraj,
          companyName,
        }
      })

      return results
    }
    catch (error) {
      // If the batch request fails, return error for all ICOs
      return sanitizedIcos.map(ico => ({
        ico,
        kraj: undefined,
        companyName: undefined,
        error: error instanceof Error ? error.message : String(error),
      }))
    }
  }

  return {
    getKrajByIco,
    getKrajsByManyIcos,
  }
}
