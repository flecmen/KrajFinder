import { useCodebook } from '~/libs/codebook/functions/useCodebook'
import { useVrByIco } from '~/libs/ObchodniRejstrik/functions/useVRByIco'

export function useKrajByIco() {
  async function getCompanyInfo(ico: string) {
    return aresApi.ekonomickeSubjektyVr.vratEkonomickySubjektVr({ ico }) as Promise<EkonomickySubjektVr>
  }

  async function getKrajByIco(ico: string) {
    const companyData = await getCompanyInfo(ico)
    console.log('companyData', companyData)

    const kraj = companyData?.zaznamy?.[0]?.adresy?.[0]?.adresa?.nazevKraje

    const companyName = companyData?.zaznamy?.[0]?.obchodniJmeno?.[0]?.hodnota

    return { kraj, companyName }
  }

  return {
    getKrajByIco,
  }
}
