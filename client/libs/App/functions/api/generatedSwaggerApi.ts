/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Chybové kódy. */
export enum KodChybyEnum {
  OBECNA_CHYBA = "OBECNA_CHYBA",
  CHYBA_VSTUPU = "CHYBA_VSTUPU",
  NENALEZENO = "NENALEZENO",
  NENI_IMPLEMENTOVANO = "NENI_IMPLEMENTOVANO",
  NEPRIHLASENY_UZIVATEL = "NEPRIHLASENY_UZIVATEL",
  NENI_OPRAVNENI = "NENI_OPRAVNENI",
}

/** Adresa - obecný předek  */
export interface Adresa {
  /**
   * Kód státu (ciselnikKod: Stat)
   * @minLength 3
   * @maxLength 3
   */
  kodStatu?: string;
  /**
   * Název státu
   * @maxLength 32
   */
  nazevStatu?: string;
  /**
   * Kód kraje
   * @min 0
   * @max 999
   */
  kodKraje?: number;
  /**
   * Název kraje
   * @maxLength 32
   */
  nazevKraje?: string;
  /**
   * Kód okresu
   * @format int32
   * @min 0
   * @max 9999
   */
  kodOkresu?: number;
  /**
   * Název okresu
   * @maxLength 32
   */
  nazevOkresu?: string;
  /**
   * Kód obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodObce?: number;
  /**
   * Název obce
   * @maxLength 48
   */
  nazevObce?: string;
  /**
   * Kód správního obvodu Prahy
   * @min 0
   * @max 999
   */
  kodSpravnihoObvodu?: number;
  /**
   * Název správního obvodu Prahy
   * @maxLength 32
   */
  nazevSpravnihoObvodu?: string;
  /**
   * Kód městského obvodu Prahy
   * @min 0
   * @max 999
   */
  kodMestskehoObvodu?: number;
  /**
   * Název městského obvodu Prahy
   * @maxLength 32
   */
  nazevMestskehoObvodu?: string;
  /**
   * Kód městské části statutárního města
   * @format int32
   * @min 0
   * @max 999999
   */
  kodMestskeCastiObvodu?: number;
  /**
   * Kód ulice, veřejného prostranství ze zdroje
   * @format int32
   * @min 0
   * @max 9999999
   */
  kodUlice?: number;
  /**
   * Název městské části statutárního města
   * @maxLength 48
   */
  nazevMestskeCastiObvodu?: string;
  /**
   * Název ulice, veřejného prostranství
   * @maxLength 48
   */
  nazevUlice?: string;
  /**
   * Číslo domovní
   * @max 9999
   */
  cisloDomovni?: number;
  /**
   * Doplňující informace adresního popisu
   * @maxLength 1500
   */
  doplnekAdresy?: string;
  /**
   * Kód časti obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodCastiObce?: number;
  /**
   * Číslo orientační - číselná část
   * @max 999
   */
  cisloOrientacni?: number;
  /**
   * Číslo orientační - písmenná část
   * @maxLength 1
   */
  cisloOrientacniPismeno?: string;
  /**
   * Název části obce
   * @maxLength 48
   */
  nazevCastiObce?: string;
  /**
   * Kód adresního místa
   * @min 0
   * @max 999999999
   */
  kodAdresnihoMista?: number;
  /** Poštovní směrovací číslo adresní pošty */
  psc?: number;
  /**
   * Nestrukturovaná adresa (formátovaná adresa)
   * @maxLength 1500
   */
  textovaAdresa?: string;
  /**
   * Nestrukturované číslo/a použíté v adrese
   * @maxLength 255
   */
  cisloDoAdresy?: string;
  /** Stav standardizace adresy dle RÚIAN */
  standardizaceAdresy?: boolean;
  /**
   * Psč zahraničních nebo nestandardně definovaných čísel
   * @max 255
   */
  pscTxt?: string;
  /**
   * Typ čísla domu - kód (ciselnikKod: TypCislaDomovniho)
   * @max 9999
   */
  typCisloDomovni?: number;
}

/** Osoba v angažmá ekonomického subjektu */
export interface AngazovanaOsoba {
  /**
   * Jméno fyzické osoby
   * @maxLength 100
   */
  jmeno?: string;
  /**
   * Příjmení fyzické osoby
   * @maxLength 100
   */
  prijmeni?: string;
  /**
   * Titul před jménem fyzické osoby
   * @maxLength 32
   */
  titulPredJmenem?: string;
  /**
   * Titul za jménem fyzické osoby
   * @maxLength 32
   */
  titulZaJmenem?: string;
  /**
   * Datum narození fyzické osoby
   * @format date
   */
  datumNarozeni?: string;
}

/** Základní informace o ekonomickém subjektu - obecný předek */
export interface EkonomickySubjektZaklad {
  /**
   * Identifikační číslo osoby - IČO
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico?: string;
  /**
   * Obchodní jméno ekonomického subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /** Sídlo ekonomického subjektu */
  sidlo?: Adresa;
  /**
   * Právní forma - kód (ciselnikKod: PravniForma, zdroj: res, com)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
  /**
   * Správně příslušný finanční úřad - kód (ciselnikKod: FinancniUrad, zdroj:ufo)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  financniUrad?: string;
  /**
   * Datum vzniku ekonomického subjektu
   * @format date
   */
  datumVzniku?: string;
  /**
   * Datum zániku ekonomického subjektu
   * @format date
   */
  datumZaniku?: string;
  /**
   * Datum aktualizace záznamu
   * @format date
   */
  datumAktualizace?: string;
  /** Daňové identifikační číslo ve formátu CZNNNNNNNNNN */
  dic?: string;
}

/** Adresa doručovací dle vyhlášky 359/2011 sb. */
export interface AdresaDorucovaci {
  /**
   * 1. řádek doručovací adresy
   * @maxLength 255
   */
  radekAdresy1?: string;
  /**
   * 2. řádek doručovací adresy
   * @maxLength 255
   */
  radekAdresy2?: string;
  /**
   * 3. řádek doručovací adresy
   * @maxLength 255
   */
  radekAdresy3?: string;
}

/** Seznam nalezených záznamů - obecný předek. */
export interface Seznam {
  /**
   * Počet prvků seznamu.
   * @format int32
   * @min 0
   */
  pocetCelkem?: number;
}

/** Předek pro všechny seznamy obsahující stránkování a řazení. Defaultní parametry pro všechny aplikace s komplexním filtrem: [+/-]icoiD [+/-]obchodniJmeno [+/-]nazevObce  */
export interface StrankovaniARazeni {
  /**
   * Offset pro stránkování (poloha prvního vráceného prvku).
   * @format int32
   * @min 0
   */
  start?: number;
  /**
   * Počet prvků k výstupu.
   * @format int32
   * @min 0
   */
  pocet?: number;
  razeni?: string[];
}

export interface Chyba {
  /** Číselníkový kód chyby */
  kod?: KodChybyEnum;
  /** Popis chyby */
  popis?: string;
  /** Subkod chyby */
  subKod?: string;
}

export interface Chyby {
  chyby?: Chyba[];
}

/** Adresa s platností */
export interface AdresaAres {
  /** Sídlo */
  sidlo?: Adresa;
  /** Primární záznam */
  primarniZaznam?: boolean;
  /**
   * Platnost údaje od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost údaje od data
   * @format date
   */
  platnostDo?: string;
}

/** Další údaje o ekonomickém subjektu */
export interface EkonomickySubjektDalsiUdaje {
  obchodniJmeno?: ObchodniJmenoAres[];
  sidlo?: AdresaAres[];
  /**
   * Právní forma - kód (ciselnikKod: PravniForma, zdroj: res, com)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
  /**
   * Aktuální spisová značka ve tvaru ODDIL xx/SOUD (např. B 100/MSPH) - poskytováno pouze pro zdroj: Veřejné rejstříky
   * @maxLength 32
   */
  spisovaZnacka?: string;
  /**
   * Identifikace primárního zdroje dat - kód (ciselnikKod: TypZdroje, zdroj: com)
   * @maxLength 30
   */
  datovyZdroj?: string;
}

/** Obchodní jméno s platností */
export interface ObchodniJmenoAres {
  /**
   * Platnost údaje od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost údaje do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Obchodní jméno ekonomického subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /** Primární záznam  */
  primarniZaznam?: boolean;
}

/** Filtr pro vyhledání seznamu ekonomických subjektů */
export type EkonomickeSubjektyKomplexFiltr = EkonomickeSubjektyZakladFiltr & {
  czNace?: string[];
};

/** Seznam registrací ekonomického subjektu v jednotlivých zdrojích */
export interface SeznamRegistraci {
  /**
   * Stav ekonomického subjektu ve zdroji VR (Veřejné rejstříky) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeVr?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RES (Registr ekonomických subjektů) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRes?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RŽP (Registr živnostenského podnikání) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRzp?: string;
  /**
   * Stav ekonomického subjektu ve zdroji NRPZS (Národní registr poskytovatelů zdrovotnických služeb) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeNrpzs?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RPSH (Registr politických stran a hnutí) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRpsh?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RCNS(Registr církví a náboženských společenství) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRcns?: string;
  /**
   * Stav ekonomického subjektu ve zdroji  SZR(Společný zemědělský registr) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeSzr?: string;
  /**
   * Stav ekonomického subjektu ve zdroji DPH(Registr plátců daně s přidané hodnoty) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeDph?: string;
  /**
   * Stav ekonomického subjektu ve zdroji SD(Registr plátců spotřební daně) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeSd?: string;
  /**
   * Stav ekonomického subjektu ve zdroji ISIR(Insolvenční rejstřík) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeIr?: string;
  /**
   * Stav ekonomického subjektu ve zdroji CEÚ(Centrální evidence úpadců) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeCeu?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RŠ(Registr škol) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRs?: string;
  /**
   * Stav ekonomického subjektu ve zdroji RED(Registr evidence dotací) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeRed?: string;
  /**
   * Stav ekonomického subjektu ve zdroji MONITOR(Monitor účetních jednotek státu) - kód (ciselnikKod: StavZdroje, zdroj: com)
   * @minLength 1
   * @maxLength 64
   */
  stavZdrojeMonitor?: string;
}

/** Seznam ekonomických subjektů ARES */
export type EkonomickeSubjektySeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjekt[];
};

/** Základní informace o ekonomickém subjektu */
export type EkonomickySubjekt = EkonomickySubjektZaklad & {
  /**
   * Ičo ekonomického subjektu, pokud je ičo přidělené. Id ekonomického subjektu, pokud je ičo nepřidělené.
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  /** Doručovací adresa sídla ekonomického subjektu */
  adresaDorucovaci?: AdresaDorucovaci;
  /** Seznam registraci ekonomického subjektu v jednotlivých datových zdrojích */
  seznamRegistraci?: SeznamRegistraci;
  /**
   * Identifikace primárního zdroje dat.
   * @maxLength 30
   */
  primarniZdroj?: string;
  dalsiUdaje?: EkonomickySubjektDalsiUdaje[];
  czNace?: string[];
  /** Indeftifikátor sub-registru zdroje SZR - kód (ciselnikKod: SubRegistrSzr, zdroj:com)  */
  subRegistrSzr?: string;
  /** Daňové identifikační číslo skupiny plátce DPH ve formátu CZNNNNNNNNNN  */
  dicSkDph?: string;
};

/** Angažná - fyzická osoba */
export type AngazmaFyzickaOsobaVr = DatumZapisuVymazuUdajeVr & {
  /** Členství */
  clenstvi?: AngazmaClenstviVr;
  /** Fyzická osoba */
  fyzickaOsoba?: FyzickaOsobaVr;
  /**
   * Název angažmá - nestandardní
   * @maxLength 255
   */
  nazevAngazma?: string;
  /**
   * Typ angažmá  - kód (ciselnikKod: TypAngazma, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Angažovaná osoba */
export type AngazmaOsobaVr = DatumZapisuVymazuUdajeVr & {
  /** Skrytý údaj */
  skrytyUdaj?: ObecnyTextVr;
  /**
   * Typ angažmá  - kód (ciselnikKod: TypAngazma, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
  /** Členství */
  clenstvi?: AngazmaClenstviVr;
  /**
   * Název angažmá - nestandardní
   * @maxLength 255
   */
  nazevAngazma?: string;
  /** Právnická osoba */
  pravnickaOsoba?: PravnickaOsobaVr;
  /** Fyzická osoba */
  fyzickaOsoba?: FyzickaOsobaVr;
};

/** Seznam ekonomických subjektů ze zdroje VR */
export type EkonomickeSubjektyVrSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektVr[];
};

/** Ekonomický subjekt */
export interface EkonomickySubjektVr {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamVr[];
}

/** Insolvence */
export type InsolvencniRizeniVr = DatumZapisuVymazuUdajeVr & {
  spravce?: AngazmaOsobaVr[];
  insolvencniZapis?: InsolvencniZapisVr[];
};

/** Konkurzní řízení */
export type KonkursVr = DatumZapisuVymazuUdajeVr & {
  spravce?: AngazmaOsobaVr[];
  /**
   * Typ konkursu - kód (ciselnikKod: TypKonkursu)
   * @maxLength 50
   */
  typKonkursu?: string;
  /**
   * Datum rozhodnutí okresního soudu
   * @format date
   */
  datumRozhodnutiOs?: string;
  /**
   * Datum vyvěšení rozhodnutí
   * @format date
   */
  datumVyveseni?: string;
  /**
   * Spisová značka konkurzního řízení
   * @maxLength 255
   */
  spisZnOs?: string;
  /** Vlastní informace o konkurzním řízení */
  text?: string;
  zruseniKonkursu?: ObecnyTextVr[];
};

/** Odštěpný závod */
export type OdstepnyZavodVr = DatumZapisuVymazuUdajeVr & {
  vedouci?: AngazmaOsobaVr[];
  ostatniSkutecnosti?: ObecnyTextVr[];
  /** Předmět podnikání, předmět činnosti, účel */
  cinnosti?: CinnostiVr;
  ico?: IcoVr[];
  sidlo?: AdresaVr[];
  pravniForma?: PravniFormaVr[];
  obchodniJmeno?: ObchodniJmenoVr[];
};

/** Řídící orgán - obecný předek */
export type OrganVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Název orgánu - nestandardní
   * @maxLength 255
   */
  nazevOrganu?: string;
  pocetClenu?: PocetClenuVr[];
  clenoveOrganu?: AngazmaOsobaVr[];
  /**
   * Typ orgánu - kód (ciselnikKod: TypOrganu, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typOrganu?: string;
  /**
   * Název angažmá - nestandardní
   * @maxLength 255
   */
  nazevAngazma?: string;
  /**
   * Typ orgánu - kód (ciselnikKod: TypOrganu, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Podnikatel */
export type PodnikatelVr = DatumZapisuVymazuUdajeVr & {
  bydliste?: AdresaVr[];
  /** Informace o osobě podnikatele */
  osobaPodnikatel?: AngazmaFyzickaOsobaVr;
  pobyt?: AdresaVr[];
  /**
   * Typ angažmá  - kód (ciselnikKod: TypAngazma, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
  /**
   * Název angažmá - nestandardní
   * @maxLength 255
   */
  nazevAngazma?: string;
};

/** Právnická osoba */
export type PravnickaOsobaVr = OsobaVr & {
  /**
   * Idenitifikační číslo právnické osoby
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico?: string;
  /**
   * Název právnické osoby
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  zastoupeni?: AngazmaFyzickaOsobaVr[];
  /**
   * Právní forma - kód (ciselnikKod: PravniForma, zdroj: res, com)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
};

/** Společníci */
export type SpolecniciVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Název orgánu - nestandardní
   * @maxLength 255
   */
  nazevOrganu?: string;
  spolecnik?: SpolecnikVr[];
  spolecnyPodil?: SpolecnyPodilVr[];
  /**
   * Typ orgánu - kód (ciselnikKod: TypOrganu, zdroj: vr)
   * @minLength 1
   * @maxLength 64
   */
  typOrganu?: string;
  uvolnenyPodil?: UvolnenyPodilVr[];
  /**
   * Název orgánu - nestandardní
   * @maxLength 255
   */
  nazev?: string;
};

/** Společník */
export type SpolecnikVr = DatumZapisuVymazuUdajeVr & {
  podil?: PodilVr[];
  /** Právnická nebo fyzická osoba v angažmá společník */
  osoba?: AngazmaOsobaVr;
};

/** Společný podíl */
export type SpolecnyPodilVr = DatumZapisuVymazuUdajeVr & {
  podilnik?: AngazmaOsobaVr[];
  podil?: PodilVr[];
};

/** Statutární orgán */
export type StatutarniOrganVr = OrganVr & {
  zpusobJednani?: ObecnyTextVr[];
};

/** Detailní informace o ekonomickém subjektu ze zdroje VR */
export type ZaznamVr = ZaznamVrZaklad & {
  ostatniOrgany?: OrganVr[];
  statutarniOrgany?: StatutarniOrganVr[];
  podnikatel?: PodnikatelVr[];
  spolecnici?: SpolecniciVr[];
  odstepneZavody?: OdstepnyZavodVr[];
  insolvence?: InsolvencniRizeniVr[];
  konkursy?: KonkursVr[];
};

/** Adresa */
export type AdresaVr = DatumZapisuVymazuUdajeVr & {
  /** Adresa */
  adresa?: Adresa;
  /**
   * Typ typu adresy - kód (ciselnikKod: TypAdresy, zdroj:vr)
   * @minLength 1
   * @maxLength 64
   */
  typAdresy?: string;
};

/** Členství v angažmá  */
export interface AngazmaClenstviVr {
  /** Doplňující text k osobě */
  textZaOsobu?: string;
  /** Členství osoby v angažmá */
  clenstvi?: ClenstviVr;
  /** Funkce osoby v angažmá */
  funkce?: FunkceVr;
  /** Doplňující text k zrušení  osoby */
  textZruseni?: string;
}

/** Činnosti */
export interface CinnostiVr {
  predmetPodnikani?: ObecnyTextVr[];
  doplnkovaCinnost?: ObecnyTextVr[];
  predmetCinnosti?: ObecnyTextVr[];
  ucel?: ObecnyTextVr[];
}

/** Členství */
export interface ClenstviVr {
  /**
   * Datum vzniku členství
   * @format date
   */
  vznikClenstvi?: string;
  /**
   * Datum zániku členství
   * @format date
   */
  zanikClenstvi?: string;
}

/** Datum */
export type DatumVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Datum
   * @format date
   */
  hodnota?: string;
};

/** Datum zápisu, výmazu údaje - obecný předek */
export interface DatumZapisuVymazuUdajeVr {
  /**
   * Datum zápisu údaje
   * @format date
   */
  datumZapisu?: string;
  /**
   * Datum výmazu údaje
   * @format date
   */
  datumVymazu?: string;
}

/** Emise akcie */
export type EmiseAkcieVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Typ akcie - kód (ciselnikKod: TypAkcie)
   * @maxLength 50
   */
  typAkcie?: string;
  /**
   * Podoby akcií (listinná, zaknihovaná, imobilizovaná)  - kód (ciselnikKod: PodobaAkcie)
   * @maxLength 50
   */
  podobaAkcie?: string;
  /**
   * Počet akcií v emisi
   * @format int32
   * @min 0
   */
  pocet?: number;
  /** Doplňkový text za akcií */
  text?: string;
  /** Hodnota akcie */
  hodnota?: ObnosVr;
};

/** Funkce */
export interface FunkceVr {
  /**
   * Datum vzniku funkce
   * @format date
   */
  vznikFunkce?: string;
  /**
   * Datum zániku funkce
   * @format date
   */
  zanikFunkce?: string;
  /**
   * Název funkce
   * @maxLength 255
   */
  nazev?: string;
}

/** Fyzická osoba - obecný předek */
export type FyzickaOsobaVr = OsobaVr & {
  /** Adresa bydliště fyzické osoby */
  bydliste?: Adresa;
  /**
   * Datum narození
   * @format date
   */
  datumNarozeni?: string;
  /**
   * Jméno
   * @maxLength 100
   */
  jmeno?: string;
  /**
   * Příjmení
   * @maxLength 100
   */
  prijmeni?: string;
  /**
   * Státní občanství osoby - kod (ciselnikKod: Stat)
   * @minLength 3
   * @maxLength 3
   */
  statniObcanstvi?: string;
  /**
   * Titul před jménem
   * @maxLength 32
   */
  titulPredJmenem?: string;
  /**
   * Titul za jménem
   * @maxLength 32
   */
  titulZaJmenem?: string;
};

/** Ićo */
export type IcoVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Hodnota IČO
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  hodnota?: string;
};

/** Insolvenční zápis */
export type InsolvencniZapisVr = DatumZapisuVymazuUdajeVr & {
  /** Text insolvenčního zápisu */
  text?: string;
  /**
   * Typ insolvenčního zápisu- kód (ciselnikKod: TypInsolvencnihoZapisu)
   * @maxLength 50
   */
  typZapisu?: string;
};

/** Kategorie zahraniční organizace */
export type KategorieZoVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Typ kategorie zahraniční osoby - kód (ciselnikKod: KategorieZo)
   * @maxLength 50
   */
  typKategorieZo?: string;
};

/** Obecný text */
export type ObecnyTextVr = DatumZapisuVymazuUdajeVr & {
  /** Obecný text */
  hodnota?: string;
};

/** Obchodní jméno - cizí */
export type ObchodniJmenoCiziVr = ObchodniJmenoVr & {
  /**
   * jazyk
   * @maxLength 255
   */
  jazyk?: string;
};

/** Obchodní jméno - obecný předek */
export type ObchodniJmenoVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Hodnota obchodního jména
   * @minLength 1
   * @maxLength 2000
   */
  hodnota?: string;
};

/** Obnos */
export interface ObnosVr {
  /**
   * Typ obnosu - kód (ciselnikKod: TypObnosu)
   * @maxLength 50
   */
  typObnos?: string;
  /** Hodnota */
  hodnota?: string;
}

/** Osoba - obecný předek */
export interface OsobaVr {
  /** Doplňková informace k osobě */
  textOsoba?: string;
  /**
   * Platnost doplňkové informace o osobě od data
   * @format date
   */
  textOsobaOd?: string;
  /** Primární adresa dané osoby (u fyzické pobyt, u právnické sídlo) */
  adresa?: Adresa;
  /**
   * Platnost doplňkové informace o osobě od data
   * @format date
   */
  textOsobaDo?: string;
}

/** Počet členů orgánu */
export type PocetClenuVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Počet členů orgánu
   * @format int32
   * @min 0
   */
  pocetClenu?: number;
  /**
   * Maximální počet členů orgánu
   * @format int32
   * @min 0
   */
  maxPocetClenu?: number;
  /**
   * Typ počet členů - kód (ciselnikKod: TypPocetClenu)
   * @maxLength 15
   */
  typ?: string;
};

/** Podíl */
export type PodilVr = DatumZapisuVymazuUdajeVr & {
  /** Text k podílu */
  text?: string;
  /** Vklad */
  vklad?: ObnosVr;
  /** Velikost podílu */
  velikostPodilu?: ObnosVr;
  /** Splacenost podílu */
  splaceni?: ObnosVr;
  zastavniPravo?: ZastavniPravoVr[];
};

/** Právní forma */
export type PravniFormaVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Hodnota pravní formy - kód (ciselnikKod: PravniForma, zdroj:res, com)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  hodnota?: string;
};

/** Spisová značka */
export type SpisovaZnackaVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Obchodní soud - kód (ciselnikKod: SoudVr, zdroj: vr)
   * @maxLength 15
   */
  soud?: string;
  /**
   * Oddíl spisové značky
   * @maxLength 20
   */
  oddil?: string;
  /** Vlozka spisové značky */
  vlozka?: number;
};

/** Uvolněný podíl */
export type UvolnenyPodilVr = DatumZapisuVymazuUdajeVr & {
  /** Text k uvolněnému podílu */
  clenstvi?: AngazmaClenstviVr;
  podil?: PodilVr[];
};

/** Vklady */
export type VkladVr = DatumZapisuVymazuUdajeVr & {
  /** Vklad */
  vklad?: ObnosVr;
  /** Text k vkladu */
  text?: string;
  /**
   * Typ vkladu - kód (ciselnikKod: TypObnosu)
   * @maxLength 50
   */
  typVkladu?: string;
};

/**  Základní kapitál */
export type ZakladniKapitalVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Typ jmění - kód (ciselnikKod: TypJmeni)
   * @maxLength 50
   */
  typJmeni?: string;
  /** Doplňující text */
  text?: string;
  /** Celkový vklad */
  vklad?: ObnosVr;
  /** Informace o splacení */
  splaceni?: ObnosVr;
};

/** Zástavní právo */
export type ZastavniPravoVr = DatumZapisuVymazuUdajeVr & {
  /** Text zástavního práva */
  text?: string;
  /**
   * Vznik zástavního práva
   * @format date
   */
  vznikZastavnihoPrava?: string;
  /**
   * Zánik zástavního práva
   * @format date
   */
  zanikZastavnihoPrava?: string;
};

/** Detailní informace o ekonomickém subjektu - obecný předek */
export interface ZaznamVrZaklad {
  akcie?: EmiseAkcieVr[];
  /**
   * Typ veřejného rejstříku (VR) - kód (ciselnikKod: TypRejstriku )
   * @maxLength 15
   */
  rejstrik?: string;
  /** Primární záznam */
  primarniZaznam?: boolean;
  spisovaZnacka?: SpisovaZnackaVr[];
  ico?: IcoVr[];
  obchodniJmeno?: ObchodniJmenoVr[];
  vklady?: VkladVr[];
  obchodniJmenoCizi?: ObchodniJmenoCiziVr[];
  zakladniKapital?: ZakladniKapitalVr[];
  pravniForma?: PravniFormaVr[];
  /**
   * Finanční úřad - kód (ciselnikKod: FinancniUrad, zdroj: ufo)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  financniUrad?: string;
  adresy?: AdresaVr[];
  ostatniSkutecnosti?: ObecnyTextVr[];
  /**
   * Datum aktualizace
   * @format date
   */
  datumAktualizace?: string;
  /**
   * Stav ekonomického subjektu v ARES - kód (ciselnikKod: StavZdroje, zdroj:com)
   * @minLength 1
   * @maxLength 64
   */
  stavSubjektu?: string;
  datumVzniku?: DatumVr[];
  /**
   * Datum zápisu subjektu do VR
   * @format date
   */
  datumZapisu?: string;
  /**
   * Datum výmazu subjektu z VR
   * @format date
   */
  datumVymazu?: string;
  zpusobRizeni?: ZpusobRizeniVr[];
  kategorieZO?: KategorieZoVr[];
  pravniDuvodVymazu?: ObecnyTextVr[];
  /** Předmět podnikání, předmět činnosti, účel */
  cinnosti?: CinnostiVr;
  nazevNejvyssihoOrganu?: ObecnyTextVr[];
  exekuce?: ObecnyTextVr[];
}

/** Způsob řízení */
export type ZpusobRizeniVr = DatumZapisuVymazuUdajeVr & {
  /**
   * Způsob řízení - kód (ciselnikKod: TypZpusobuRizeni)
   * @maxLength 50
   */
  typ?: string;
};

/** Statistické informace o subjektu */
export interface StatistickeUdaje {
  /**
   * Institucinální sektor dle ESA2010 - kód (ciselnikKod: FceVladnichInstituci)
   * @minLength 5
   * @maxLength 5
   * @pattern ^\d{5}$
   */
  institucionalniSektor2010?: string;
  /**
   * Kategorie dle počtu pracovníků - kód (ciselnikKod: KategoriePoctuPracovniku, zdroj: res)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  kategoriePoctuPracovniku?: string;
}

/** Detailní informace o ekonomickém subjektu ze zdroje RES */
export type ZaznamRes = EkonomickySubjektZaklad & {
  /**
   * Právní forma ROS - kód (ciselnikKod: PravniFormaRos, zdroj:res)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniFormaRos?: string;
  czNace?: string[];
  doplnkovePravniFormy?: string[];
  /** Statistické údaje ekonomického subjektu */
  statistickeUdaje?: StatistickeUdaje;
  /**
   * Základní územní jednotka sídla organizace - kód (ciselnikKod: ZakladniUzemniJednotka)
   * @minLength 6
   * @maxLength 6
   * @pattern ^\d{6}$
   */
  zakladniUzemniJednotka?: string;
  /** Logická informace o primárním(hlavním) záznamu ekonomického subjektu.  */
  primarniZaznam?: boolean;
  /**
   * Převažující CZ-NACE ekonomického subjektu - kód (ciselnikKod: CzNace, zdroj:res)
   * @minLength 1
   * @maxLength 5
   */
  czNacePrevazujici?: string;
  /**
   * Okres sídla - kód NUTS/LAU (ciselnikKod: okresLau, zdroj:res)
   * @maxLength 6
   */
  okresNutsLau?: string;
};

/** Seznam ekonomických subjektů ze zdroje RES */
export type EkonomickeSubjektyResSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektRes[];
};

/** Ekonomický subjekt  */
export interface EkonomickySubjektRes {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamRes[];
}

/** Adresa  */
export type AngazovanySubjektAdresa = Adresa & {
  /**
   * Platnost adresy od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost adresy do data
   * @format date
   */
  platnostDo?: string;
};

/** Právnické osoby v angažmá ekonomického subjektu.  */
export interface AngazovanySubjektRzpZaklad {
  /**
   * Typ angažmá osoby u subjektu ve zdroji RŽP (Registr živnostenského podnikání) - kód (ciselnikKod: TypAngazma, zdroj: rzp)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
  /**
   * Platnost angažmá subjektu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost angažmá subjektu do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Ičo angažovaného subjektu
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico?: string;
  /**
   * obchodní jméno angažovaného subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /** Adresa sídla angažovaného subjektu */
  sidlo?: AngazovanySubjektAdresa;
  /**
   * Typ subjektu - kód (ciselnikKod: TypSubjektu, zdroj: rzp)
   * @minLength 1
   * @maxLength 64
   */
  typSubjektu?: string;
  /**
   * Právní forma - kód (ciselnikKod: PravniForma, zdroj:com, res)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
  /**
   * Kód státu (ciselnikKod: Stat, zdroj:com)
   * @minLength 3
   * @maxLength 3
   */
  kodStatu?: string;
}

/** Vazební tabulka adres */
export type EkonomickySubjektRzpAdresa = Adresa & {
  /**
   * Platnost adresy od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost adresy do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Typ adresy  - kód (ciselnikKod: TypAdresy, zdroj: rzp)
   * @minLength 1
   * @maxLength 64
   */
  typAdresy?: string;
};

/** Události v rámci insolvenčního řízení */
export interface InsolvencniRizeni {
  /**
   * Datum zápisu události
   * @format date
   */
  datumZapisu?: string;
  /**
   * Datum zplatnění události
   * @format date
   */
  platnostOd?: string;
}

/** Provozovna - obecný předek */
export interface ProvozovnaZaklad {
  /**
   * identifikační číslo provozovny
   * @minLength 10
   * @maxLength 10
   */
  icp?: number;
  /** Adresa sídla provozovny */
  sidloProvozovny?: Adresa;
  /**
   * Umístění provozovny
   * @maxLength 254
   */
  umisteniProvozovny?: string;
  /**
   * Platnost provozovny od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost provozovny do data
   * @format date
   */
  platnostDo?: string;
  pozastaveniProvozovny?: ZivnostProvozovnaPozastaveni[];
  /**
   * Typ provozovny - kód (ciselnikKod: TypProvozovny)
   * @minLength 1
   * @maxLength 1
   * @pattern ^\d{1}$
   */
  typProvozovny?: string;
  /**
   * Název provozovny
   * @maxLength 254
   */
  nazev?: string;
}

/** Stav provozovny */
export interface ProvozovnyRzpStav {
  /**
   * Celkový počet provozoven
   * @format int32
   * @min 0
   */
  pocetCelkem?: number;
  /**
   * Celkový počet zaniklých provozoven
   * @format int32
   * @min 0
   */
  pocetZaniklych?: number;
  /**
   * Celkový počet aktivnich provozoven
   * @format int32
   * @min 0
   */
  pocetAktivnich?: number;
  /**
   * Celkový počet zaniklých provozoven
   * @format int32
   * @min 0
   */
  pocetPozastavenych?: number;
}

/** Detailní informace o ekonomickém subjektu ze zdroje RŽP */
export type ZaznamRzpZaklad = EkonomickySubjektZaklad & {
  /** Události v rámci insolvenčního řízení */
  insolvencniRizeni?: InsolvencniRizeni;
  /**
   * Datum doručení prvního výpisu sloužícího jako průkaz živnostenského podnikání,
   * @format date
   */
  datumDoruceniVypisu?: string;
  adresySubjektu?: EkonomickySubjektRzpAdresa[];
  /**
   * Typ subjektu - kód (ciselnikKod: TypSubjektu, zdroj: rzp)
   * @minLength 1
   * @maxLength 64
   */
  typSubjektu?: string;
  /**
   * Živnostenský úřad – kód (ciselnikKod: ZivnostenskyUrad, zdroj: rzp)
   * @pattern ^\d{6}$
   */
  zivnostenskyUrad?: string;
  /**
   * Název organizační složky
   * @minLength 1
   * @maxLength 2000
   */
  organizacniSlozka?: string;
  /** Stav živnosti - kód (ciselnikKod: StavZivnosti)  */
  zivnostiStav?: ZivnostiRzpStav;
  /**
   * Datum zápisu do Obchodního nebo podobného rejstříku
   * @format date
   */
  datumZapisuVr?: string;
  /** Stav provozovny - kód (ciselnikKod: StavProvozovny)  */
  provozovnyStav?: ProvozovnyRzpStav;
  /** Identifikace primárního záznamu  pozn.: U multiplicitních registrací je pouze jedna registrace primární */
  primarniZaznam?: boolean;
  /**
   * Kód státu  (ciselnikKod: Stat, zdroj:com)
   * @minLength 3
   * @maxLength 3
   */
  kodStatu?: string;
};

/** Živnost bez odpovědného zástupce */
export interface ZivnostBezOZ {
  /**
   * Zahájení vykonávání živnosti bez odpovědného zástupce od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Ukončení vykonávání živnosti bez odpovědného zástupce od data
   * @format date
   */
  platnostDo?: string;
}

/** Stav živnosti */
export interface ZivnostiRzpStav {
  /**
   * Celkový počet aktivních živností
   * @format int32
   * @min 0
   */
  pocetAktivnich?: number;
  /**
   * Celkový počet zaniklých živností
   * @format int32
   * @min 0
   */
  pocetZaniklych?: number;
  /**
   * Celkový počet pozastavených živností
   * @format int32
   * @min 0
   */
  pocetPozastavenych?: number;
  /**
   * Celkový počet přerušených živností
   * @format int32
   * @min 0
   */
  pocetPrerusenych?: number;
  /**
   * Celkový počet živností
   * @format int32
   * @min 0
   */
  pocetCelkem?: number;
}

/** Živnost - obor činnosti */
export interface ZivnostOborCinnosti {
  /**
   * Platnost záznamu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost záznamu do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Název oboru
   * @minLength 5
   * @maxLength 750
   */
  oborNazev?: string;
}

/** Podmínky pro vykonávání živnosti */
export interface ZivnostPodminky {
  /**
   * Platnost podmínky od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost podmínky do data
   * @format date
   */
  platnostDo?: string;
  /** Text podmínky provozování živnosti */
  podminka?: string;
}

/** Přerušení živnosti */
export interface ZivnostPreruseni {
  /**
   * Platnost přerušení živnosti od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost přerušení živnosti do data
   * @format date
   */
  platnostDo?: string;
}

/** Pozastavení provozovny nebo živnosti */
export interface ZivnostProvozovnaPozastaveni {
  /**
   * Platnost pozastavení živnosti od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost pozastavení živnosti do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Popis rozsahu pozastavení živnosti
   * @maxLength 1024
   */
  rozsahPozastaveni?: string;
}

/** Živnosti, které ekonomický subjekt provozuje nebo provozoval - obecný předek */
export interface ZivnostZaklad {
  /**
   * Datum vzniku živnosti
   * @format date
   */
  datumVzniku?: string;
  /**
   * Datum zániku živnosti
   * @format date
   */
  datumZaniku?: string;
  /**
   * Platnost živnosti do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Předmět podnikáni živnosti
   * @minLength 5
   * @maxLength 750
   */
  predmetPodnikani?: string;
  pozastaveniZivnosti?: ZivnostProvozovnaPozastaveni[];
  podminkyProvozovaniZivnosti?: ZivnostPodminky[];
  preruseniZivnosti?: ZivnostPreruseni[];
  zivnostBezOz?: ZivnostBezOZ[];
  /**
   * Datum aktualizace záznamu
   * @format date
   */
  datumAktualizace?: string;
  /**
   * Druh živnosti - kód (ciselnikKod: DruhZivnosti)
   * @minLength 1
   * @maxLength 1
   */
  druhZivnosti?: string;
}

/** Angažovaná osoba zdroje RŽP */
export type AngazovanaOsobaRzp = AngazovanaOsoba & {
  /**
   * Platnost angažmá osoby od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost angažmá osoby do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Státní občanství osoby - kód (ciselnikKod: Stat, zdroj:com)
   * @minLength 3
   * @maxLength 3
   */
  statniObcanstvi?: string;
  /**
   * Typ angažmá osoby  - kód (ciselnikKod: TypAngazma, zdroj: rzp)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Právnické osoby v angažmá ekonomického subjektu.  */
export type AngazovanySubjektRzp = AngazovanySubjektRzpZaklad & {
  osobyZastupce?: AngazovanaOsobaRzp[];
};

/** Seznam ekonomických subjektů ze zdroje RŽP */
export type EkonomickeSubjektyRzpSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektRzp[];
};

/** Ekonomický subjekt  */
export interface EkonomickySubjektRzp {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamRzp[];
}

/** Provozovna */
export type Provozovna = ProvozovnaZaklad & {
  oboryCinnosti?: ZivnostOborCinnosti[];
};

/** Detailní informace o ekonomickém subjektu ze zdroje RŽP */
export type ZaznamRzp = ZaznamRzpZaklad & {
  souvisejiciSubjekty?: AngazovanySubjektRzp[];
  /** Informace o podnikateli */
  osobaPodnikatel?: AngazovanaOsobaRzp;
  angazovaneOsoby?: AngazovanaOsobaRzp[];
  zivnosti?: Zivnost[];
};

/** Živnosti, které ekonomický subjekt provozuje nebo provozoval ve zdroji RŽP */
export type Zivnost = ZivnostZaklad & {
  oboryCinnosti?: ZivnostOborCinnosti[];
  odpovedniZastupci?: AngazovanaOsobaRzp[];
  provozovny?: Provozovna[];
};

/** Angažovaná osoba */
export type AngazovanaOsobaNrpzs = AngazovanaOsoba & {
  /**
   * Typ angažmá osoby  - kód (ciselnikKod: TypAngazma, zdroj: nrpzs)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Kontaktní údaje */
export interface Kontakty {
  /**
   * Email zdravotnického zařízení
   * @maxLength 50
   */
  email?: string;
  /**
   * Fax
   * @minLength 1
   * @maxLength 25
   */
  fax?: string;
  /**
   * Telefoní kontakt
   * @minLength 1
   * @maxLength 25
   */
  telefon?: string;
  /**
   * WWW zdravotnického zařízení
   * @minLength 1
   * @maxLength 255
   */
  www?: string;
}

/** Detailní informace o ekonomickém subjektu ze zdroje NRPZS  */
export type ZaznamNrpzs = EkonomickySubjektZaklad & {
  /**
   * Pořadové číslo zařízení
   * @minLength 3
   * @maxLength 3
   * @pattern '^\d{3}$'
   */
  poradoveCisloZar?: string;
  /**
   * Pořadové číslo pracovistě
   * @minLength 3
   * @maxLength 3
   * @pattern '^\d{3}$'
   */
  poradoveCisloPrac?: string;
  /**
   * Typ ekonomického subjektu - forma hospodaření - kód (ciselnikKod: TypSubjektu, zdroj: nrpzs)
   * @minLength 2
   * @maxLength 2
   */
  typSubjektu?: string;
  /**
   * Druh zdravotnického zařízení - kód (ciselnikKod: DruhZarizeni, zdroj: nrpzs)
   * @minLength 3
   * @maxLength 3
   * @pattern '^\d{3}$'
   */
  druhZarizeni?: string;
  /** Primární záznam */
  primarniZaznam?: boolean;
  /**
   * Typ zřizovatele zdravotnického zařízení - kód (ciselnikKod: Zrizovatel, zdroj: nrpzs)
   * @minLength 1
   * @maxLength 1
   */
  typZrizovatele?: string;
  angazovaneOsoby?: AngazovanaOsobaNrpzs[];
  /** Kontakty pro komunikaci se zdravotnickéhým zažízením */
  kontakty?: Kontakty;
};

/** Seznam ekonomických subjektů ze zdroje NRPZS */
export type EkonomickeSubjektyNrpzsSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektNrpzs[];
};

/** Ekonomický subjekt  */
export interface EkonomickySubjektNrpzs {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamNrpzs[];
}

/** Identifikace fyzické osoby statutárního orgánu subjektu.  */
export type AngazovanaOsobaRpsh = AngazovanaOsoba & {
  /**
   * Název fukce
   * @maxLength 120
   */
  funkce?: string;
  /**
   * Platnost záznamu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost záznamu do data
   * @format date
   */
  platnostDo?: string;
  /** adresa angažované osoby */
  adresa?: Adresa;
  /**
   * Kód fukce
   * @maxLength 10
   */
  kod?: string;
  /**
   * Typ angažmá osoby - kód (ciselnikKod: TypAngazma, zdroj: rpsh)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Informace o způsobu jednání právnické osoby.  */
export interface StatutarniOrgan {
  /**
   * Platnost záznamu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Texty způsobu jednání právnické osoby.
   * @maxLength 1000
   */
  popis?: string;
}

/** Stav, ve kterém se subjekt nachází, s udáním počátku platnosti.  */
export interface StavSubjektu {
  /**
   * Popis stavu subjektu
   * @maxLength 1000
   */
  popis?: string;
  /**
   * Platnost záznamu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Stav ekonomického subjektu - kód (ciselnikKod: StavSubjektu(zdroj:rpsh)
   * @minLength 1
   * @maxLength 64
   */
  stavSubjektu?: string;
}

/** Detailní informace o ekonomickém subjektu ze zdroje RPSH */
export type ZaznamRpsh = EkonomickySubjektZaklad & {
  /**
   * Číslo registrace
   * @maxLength 20
   */
  cisloRegistrace?: string;
  /**
   * Typ subjektu - strana/hnutí - kód (ciselnikKod: TypSubjektuRpsh)
   * @min 1
   * @max 1
   * @pattern ^\d{1}$
   */
  typSubjektu?: string;
  /**
   * Obchodní jméno zkrácené
   * @maxLength 1000
   */
  obchodniJmenoZkratka?: string;
  angazovaneOsoby?: AngazovanaOsobaRpsh[];
  /** Primární záznam */
  primarniZaznam?: boolean;
  zmenaStanov?: ZmenaStanov[];
  statutarniOrgan?: StatutarniOrgan[];
  stavSubjektu?: StavSubjektu[];
};

/** Seznam datumů změn stanov.  */
export interface ZmenaStanov {
  /**
   * Datum změny stanov.
   * @format date
   */
  datumZmeny?: string;
}

/** Seznam ekonomických subjektů ze zdroje RPSH */
export type EkonomickeSubjektyRpshSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektRpsh[];
};

/** Ekonomický subjekt  */
export interface EkonomickySubjektRpsh {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamRpsh[];
}

/** Adresa */
export type AdresaRcns = Adresa & {
  /**
   * Platnost adresy od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost adresy do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Typ adresy  - kód (ciselnikKod: TypAdresy, zdroj: rcns)
   * @minLength 1
   * @maxLength 64
   */
  typAdresy?: string;
};

/** Angažovaný subjekt */
export interface AngazovanySubjektRcnsZaklad {
  /**
   * IČO
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico?: string;
  /** DIČ */
  dic?: string;
  /**
   * Platnost záznamu od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost záznamu do data
   * @format date
   */
  platnostDo?: string;
  /** Adresa sídla */
  sidlo?: AdresaRcns;
  /**
   * Obchodní jméno subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /**
   * Kód státu  (ciselnikKod: Stat)
   * @minLength 3
   * @maxLength 3
   */
  kodStatu?: string;
  /**
   * Právní forma - kód (ciselnikKod: PravniForma)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
}

/** Člen svazu církví */
export interface ClenSvazu {
  /**
   * IČO člana svazu
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico?: string;
  /**
   * Platnost členství od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost členství do data
   * @format date
   */
  platnostDo?: string;
}

/** Oprávnění k výkonu zvláštních práv církve */
export interface PravoZvlastni {
  /**
   * Začátek platnosti zvláštního práva subjektu
   * @format date
   */
  platnostOd?: string;
  /**
   * Konec platnosti zvláštního práva subjektu
   * @format date
   */
  platnostDo?: string;
  /** Oprávnění pro výkon církve - kód (ciselnikKod: Pravo, zdroj: rcns)  */
  kodPravo?: number;
}

/** Informace o registraci církve */
export interface RegistraceRcns {
  /**
   * Pro subjekt typu církev a svaz církví je zde uvedeno registrační číslo pod kterým byl daný subjekt zaregistrován na MK. Pro subjekty typu právnická osoba je zde uvedeno evidenční číslo pod kterým byl daný subjekt zaevidován na MK.
   * @maxLength 30
   */
  cisloRegistrace?: string;
  /**
   * Datum zrušení registrace, evidence subjektu na MK
   * @maxLength 30
   */
  cisloZruseniRegistrace?: string;
  /**
   * Datum vyhlášení likvidace subjektu
   * @format date
   */
  datumLikvidace?: string;
  /**
   * Datum vyhlášení konkurzu subjektu
   * @format date
   */
  datumKonkurzu?: string;
  /**
   * Datum jmenování opatrovníka
   * @format date
   */
  datumOpatrovnik?: string;
  /**
   * Datum zrušení registrace, evidence subjektu na MK
   * @format date
   */
  datumZruseniRegistrace?: string;
}

/** Základní informace o ekonomickém subjektu - obecný předek zdroje RCNS  */
export type ZaznamRcnsZaklad = EkonomickySubjektZaklad & {
  /**
   * Typ subjektu - kód (ciselnikKod: TypSubjektuRcns)
   * @minLength 1
   * @maxLength 64
   */
  typSubjektu?: string;
  /**
   * Stát
   * @minLength 3
   * @maxLength 3
   */
  stat?: string;
  /** Primární záznam */
  primarniZaznam?: boolean;
  /** Registrace */
  registrace?: RegistraceRcns;
  zpusobJednani?: ZpusobJednani[];
  adresySubjektu?: AdresaRcns[];
  /**
   * Identifikátor záznamu ve zdrojovém registru.
   * @maxLength 100
   */
  zdrojId?: string;
  /**
   * Platnost subjekt v registru od
   * @format date
   */
  platnostOd?: string;
};

/** tabulka způsobů jednání subjektu */
export interface ZpusobJednani {
  /** popis způsobu jednání */
  popis?: string;
  /**
   * počátek platnosti způsobu jednání dle popisu
   * @format date
   */
  platnostOd?: string;
  /**
   * konec platnosti způsobu jednání dle popisu
   * @format date
   */
  platnostDo?: string;
}

/** Název vykonávané statutární(církevní) funkce  */
export type AngazovanaOsobaRcns = AngazovanaOsoba & {
  /**
   * Platnost angažované osoby od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost angažované osoby od data
   * @format date
   */
  platnostDo?: string;
  /**
   * Název orgánu
   * @maxLength 100
   */
  nazevAngazma?: string;
  /**
   * Dodatečná informace jako 'funkce neobsazena'
   * @maxLength 100
   */
  poznamka?: string;
  /**
   * Typ angažmá osoby  - kód (ciselnikKod: TypAngazma, zdroj: rcns)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
  /**
   * Název orgánu
   * @maxLength 100
   */
  nazevOrganu?: string;
  /**
   * Kód státu  (ciselnikKod: Stat)
   * @minLength 3
   * @maxLength 3
   */
  kodStatu?: string;
  /**
   * Právní forma - kód (ciselnikKod: PravniForma)
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
};

/** Církev - základ - obecný předek  */
export interface SubjektCirkevZaklad {
  /**
   * Datum registrace práv dané církvi.
   * @format date
   */
  datumRegistracePrav?: string;
  /**
   * Číslo registrace práv dané církvi.
   * @maxLength 30
   */
  cisloRegistracePrav?: string;
  /**
   * IČO nástupce zrušené právnické osoby.
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  icoNastupce?: string;
  /**
   * Datum zrušení registrace práv dané církvi.
   * @format date
   */
  datumZruseniRegistracePrav?: string;
  pravoZvlastni?: PravoZvlastni[];
  /**
   * Číslo zrušení registrace práv dané církvi.
   * @maxLength 30
   */
  cisloZruseniRegistracePrav?: string;
}

/** Právnická osoba církve - základ - obecný předek  */
export interface SubjektPravnickaOsobaZaklad {
  /**
   * IČO zřizovatele právnické osoby.
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  icoZrizovatel?: string;
  /**
   * IČO nástupce zrušené právnické osoby.
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  icoNastupce?: string;
  /** Způsob zrušení registrace – kód (ciselnikKod: ZpusobZruseni, zdroj: rcns) */
  zpusobZruseniRegistrace?: number;
}

/** Svaz církví - základ - obecný předek */
export interface SubjektSvazCirkviZaklad {
  clenoveSvazu?: ClenSvazu[];
  /**
   * IČO nástupce zrušené právnické osoby.
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  icoNastupce?: string;
}

/** Angažmá */
export interface AngazmaRcns {
  /** Právnická osoba */
  osobaPravnicka?: AngazovanySubjektRcns;
  /** Fyzická osoba */
  osobaFyzicka?: AngazovanaOsobaRcns;
}

/** Angažovaný subjekt */
export type AngazovanySubjektRcns = AngazovanySubjektRcnsZaklad & {
  statutarniOrgany?: AngazovanaOsobaRcns[];
};

/** Seznam ekonomických subjektů ze zdroje RCNS */
export type EkonomickeSubjektyRcnsSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektRcns[];
};

/** Stautární orgány církve */
export interface StatutatniOrganRcns {
  /** Struktura s údaji sledovanými u subjektu typu církev */
  subjektCirkev?: SubjektCirkev;
  /** Struktura s údaji sledovanými u subjektu typu svaz církví */
  subjektSvazCirkvi?: SubjektSvazCirkvi;
  /** Struktura s údaji sledovanými u subjektu typu právnická osoba dříve církevní právnická osoba. */
  subjektPravnickaOsoba?: SubjektPravnickaOsoba;
}

/** Ekonomický subjekt  */
export interface EkonomickySubjektRcns {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamRcns[];
}

/** Církev */
export type SubjektCirkev = SubjektCirkevZaklad & {
  organy?: AngazovanySubjektRcns[];
};

/** Právnická osoba církve */
export type SubjektPravnickaOsoba = SubjektPravnickaOsobaZaklad & {
  organy?: AngazovanaOsobaRcns[];
};

/** Svaz církví */
export type SubjektSvazCirkvi = SubjektSvazCirkviZaklad & {
  organy?: AngazovanySubjektRcns[];
};

/** Detailní informace o ekonomickém subjektu ze zdroje RCNS */
export type ZaznamRcns = ZaznamRcnsZaklad & {
  /** Statutární orgány církve */
  statutarniOrgan?: StatutatniOrganRcns;
  likvidatori?: AngazmaRcns[];
  konkurzniSpravci?: AngazmaRcns[];
  opatrovnici?: AngazmaRcns[];
};

/** Angažovaná osoba - obecný předek */
export type AngazovanaOsobaSzrZaklad = AngazovanaOsoba & {
  /**
   * Typ angažmá osoby  - kód (ciselnikKod: TypAngazma)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Ekonomický subjekt zdroje EZP - obecný předek */
export type EkonomickySubjektEzpZaklad = EkonomickySubjektZaklad & {
  /**
   * URL odkaz na záznam zdrojového IS.
   * @maxLength 255
   */
  odkaz?: string;
};

/** Seznam ekonomických subjektů ze zdroje SZR */
export type EkonomickeSubjektySzrSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektSzr[];
};

/** Ekonomický subjekt  */
export interface EkonomickySubjektSzr {
  /**
   * ičo/id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamSzr[];
}

/** Detailní infromace o ekonomickém subjektu ze subzdroje EZP */
export interface Ezp {
  /** Osoba podnikatele EZP */
  osobaEzp?: AngazovanaOsobaSzrZaklad;
  /** Ekonomický subjekt EZP */
  subjektEzp?: EkonomickySubjektEzpZaklad;
}

/** Detailní informace o ekonomickém subjektu ze zdroje SZR - část EZP  */
export interface ZaznamSzr {
  /** Evidence zemědělského podnikatele */
  ezp?: Ezp;
}

/** Angažovaná osoba */
export type AngazovanaOsobaRs = AngazovanaOsoba & {
  /**
   * Typ angažmá osoby - kód (ciselnikKod: TypAngazma, zdroj: rs)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
};

/** Detailní informace o ekonomickém subjektu ze zdroje RŠ */
export interface AngazovanySubjektRs {
  /**
   * IČO
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico?: string;
  /**
   * Jméno subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /**
   * Zkrácené jméno subjektu
   * @minLength 1
   * @maxLength 40
   */
  obchodniJmenoZkracene?: string;
  /**
   * Typ angažmá osoby - kód (ciselnikKod: TypAngazma, zdroj: rs)
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
  /** Adresa angažovaného subjektu */
  adresa?: Adresa;
  /**
   * Právní forma
   * @minLength 3
   * @maxLength 3
   * @pattern ^\d{3}$
   */
  pravniForma?: string;
  /**
   * Datum vzniku
   * @format date
   */
  datumVzniku?: string;
  /**
   * Datum zániku
   * @format date
   */
  datumZaniku?: string;
}

/** Kontakty subjektu */
export interface KontaktyRs {
  /**
   * kontaktní telefon
   * @minLength 1
   * @maxLength 25
   */
  telefon?: string;
  /**
   * číslo faxu
   * @minLength 1
   * @maxLength 25
   */
  fax?: string;
  email?: string[];
  /**
   * webová adresa ekonomického subjektu
   * @minLength 1
   * @maxLength 255
   */
  www?: string;
}

/** Škola */
export interface SkolaZarizeni {
  /** Kontakty */
  kontakty?: KontaktyRs;
  /**
   * IZO - resortní identifikátor
   * @minLength 1
   * @maxLength 9
   */
  izo?: string;
  /**
   * Jméno subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /**
   * Zkrácené jméno subjektu
   * @minLength 1
   * @maxLength 40
   */
  obchodniJmenoZkracene?: string;
  /**
   * Typ školy
   * @minLength 1
   * @maxLength 64
   */
  typSkoly?: string;
  /** Adresa angažovaného subjektu */
  adresa?: Adresa;
  /**
   * Datum vzniku
   * @format date
   */
  datumVzniku?: string;
  /**
   * Datum zániku
   * @format date
   */
  datumZaniku?: string;
}

/** Detailní informace o ekonomickém subjektu ze zdroje RŠ */
export type ZaznamRsZaklad = EkonomickySubjektZaklad & {
  /**
   * REDIZO - resortní identifikátor
   * @minLength 1
   * @maxLength 9
   */
  redizo?: string;
  /**
   * Zkrácené obchodní jméno
   * @minLength 1
   * @maxLength 40
   */
  obchodniJmenoZkracene?: string;
  /** Kontakty */
  kontakty?: KontaktyRs;
  /** Primární záznam */
  primarniZaznam?: boolean;
  skolyAZarizeni?: SkolaZarizeni[];
  /**
   * Typ subjektu
   * @minLength 1
   * @maxLength 64
   */
  typSubjektu?: string;
};

/** Seznam ekonomických subjektů ze zdroje RŠ */
export type EkonomickeSubjektyRsSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektRs[];
};

/** Ekonomický subjekt */
export interface EkonomickySubjektRs {
  /**
   * ičo ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamRs[];
}

/** Záznam RŠ */
export type ZaznamRs = ZaznamRsZaklad & {
  angazovanySubjekt?: AngazovanySubjektRs[];
  angazovanaOsoba?: AngazovanaOsobaRs[];
};

/** Seznam číselníků */
export type CiselnikyNazevnikSeznam = Seznam & {
  ciselniky?: Ciselnik[];
};

/** Číselník */
export interface Ciselnik {
  /**
   * Kód číselníku
   * @minLength 1
   * @maxLength 64
   */
  kodCiselniku?: string;
  /**
   * Název číselníku
   * @maxLength 255
   */
  nazevCiselniku?: string;
  polozkyCiselniku?: PolozkaCiselniku[];
  /**
   * Zdroj číselníku (ciselnikKod: StavZdroje)
   * @minLength 1
   * @maxLength 64
   */
  zdrojCiselniku?: string;
}

/** Filtr pro vyhledávání číselníků */
export type CiselnikyZakladniFiltr = StrankovaniARazeni & {
  /**
   * Zdroj/oblast číselníku - kód (ciselnikKod: TypZdrojeAres, zdroj:com)
   * @minLength 1
   * @maxLength 64
   */
  zdrojCiselniku?: string;
  /**
   * Kód číselníku
   * @minLength 1
   * @maxLength 64
   */
  kodCiselniku?: string;
};

/** Seznam názvů položky číselníků z ohledem na jazykovou mutaci */
export interface NazevPolozky {
  /** Kód jazyka položky číselníku */
  kodJazyka?: string;
  /**
   * Název položky číselníku
   * @maxLength 255
   */
  nazev?: string;
}

/** Položka číselníku */
export interface PolozkaCiselniku {
  /**
   * Kód položky číselníku
   * @minLength 1
   * @maxLength 64
   */
  kod?: string;
  nazev?: NazevPolozky[];
  /**
   * Platnost položky od data
   * @format date
   */
  platnostOd?: string;
  /**
   * Platnost položky do data
   * @format date
   */
  platnostDo?: string;
  /**
   * Nadřízený záznam položky číselníku
   * @minLength 1
   * @maxLength 64
   */
  kodNadrizeny?: string;
}

/** Adresa  */
export interface AdresaFiltr {
  /**
   * Kód časti obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodCastiObce?: number;
  /**
   * Kód správního obvodu Prahy
   * @min 0
   * @max 999
   */
  kodSpravnihoObvodu?: number;
  /**
   * Kód městské části statutárního města
   * @format int32
   * @min 0
   * @max 999999
   */
  kodMestskeCastiObvodu?: number;
  /**
   * Kód ulice, veřejného prostranství ze zdroje
   * @format int32
   * @min 0
   * @max 9999999
   */
  kodUlice?: number;
  /**
   * Číslo domovní
   * @max 9999
   */
  cisloDomovni?: number;
  /**
   * Kód obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodObce?: number;
  /**
   * Číslo orientační - číselná část
   * @max 999
   */
  cisloOrientacni?: number;
  /**
   * Číslo orientační - písmenná část
   * @maxLength 1
   */
  cisloOrientacniPismeno?: string;
  /**
   * Nestrukturovaná adresa
   * @maxLength 1500
   */
  textovaAdresa?: string;
}

/** Filtr pro vyhledání seznamu ekonomických subjektů podle parametru IČO. */
export type EkonomickeSubjektyRegistraceFiltr = StrankovaniARazeni & {
  ico?: string[];
};

/** Obecný filtr pro vyhledání seznamu ekonomických subjektů */
export type EkonomickeSubjektyZakladFiltr = StrankovaniARazeni & {
  ico?: string[];
  /**
   * Obchodní jméno ekonomického subjektu
   * @minLength 1
   * @maxLength 2000
   */
  obchodniJmeno?: string;
  /** Adresa sídla ekonomického subjektu */
  sidlo?: AdresaFiltr;
  pravniForma?: string[];
  financniUrad?: string[];
};

/** Seznam nalezených standardizovaných adres */
export type StandardizovaneAdresySeznam = Seznam & {
  standardizovaneAdresy?: StandardizovanaAdresa[];
  /** Stav standardizace adresy - kod (Číselník kod:StavStandardizaceAdresy) UPLNA, CASTECNA_OBEC/..., NEUSPESNA */
  stavStandardizace?: string;
  /** Podmínka dotazu */
  request?: StandardizovanaAdresaFiltr;
};

/** Standardizovaná adresa */
export interface StandardizovanaAdresa {
  /**
   * Číslo domovní
   * @max 9999
   */
  cisloDomovni?: number;
  /**
   * Číslo orientační - číselná část
   * @max 999
   */
  cisloOrientacni?: number;
  /**
   * Číslo orientační - písmenná část
   * @maxLength 1
   */
  cisloOrientacniPismeno?: string;
  /**
   * Kód adresního místa
   * @min 0
   * @max 999999999
   */
  kodAdresnihoMista?: number;
  /**
   * Kód časti obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodCastiObce?: number;
  /**
   * Kód kraje
   * @min 0
   * @max 999
   */
  kodKraje?: number;
  /**
   * Kód městské části statutárního města
   * @format int32
   * @min 0
   * @max 999999
   */
  kodMestskeCastiObvodu?: number;
  /**
   * Kód městského obvodu Prahy
   * @min 0
   * @max 999
   */
  kodMestskehoObvoduP?: number;
  /**
   * Kód obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodObce?: number;
  /**
   * Kód okresu
   * @format int32
   * @min 0
   * @max 9999
   */
  kodOkresu?: number;
  /**
   * Kód správního obvodu Prahy
   * @min 0
   * @max 999
   */
  kodSpravnihoObvoduP?: number;
  /**
   * Kód stavebního objektu
   * @min 0
   * @max 999999999
   */
  kodStavebnihoObjektu?: number;
  /**
   * Kód ulice, veřejného prostranství ze zdroje
   * @format int32
   * @min 0
   * @max 9999999
   */
  kodUlice?: number;
  /**
   * Název části obce
   * @maxLength 48
   */
  nazevCastiObce?: string;
  /**
   * Název kraje
   * @maxLength 32
   */
  nazevKraje?: string;
  /**
   * Název městské části statutárního města
   * @maxLength 48
   */
  nazevMestskeCastiObvodu?: string;
  /**
   * Název městského obvodu Prahy
   * @maxLength 32
   */
  nazevMestskehoObvoduP?: string;
  /**
   * Název obce
   * @maxLength 48
   */
  nazevObce?: string;
  /**
   * Název okresu
   * @maxLength 32
   */
  nazevOkresu?: string;
  /**
   * Název správního obvodu Prahy
   * @maxLength 32
   */
  nazevSpravnihoObvoduP?: string;
  /**
   * Název ulice, veřejného prostranství
   * @maxLength 48
   */
  nazevUlice?: string;
  /** Poštovní směrovací číslo adresní pošty */
  psc?: number;
  /**
   * Textová podoba adresy
   * @maxLength 1500
   */
  textovaAdresa?: string;
  /** Typ stavebního objektu - kód (Číselník kod:TypStavebnihoObjektu, zdroj:ruian) pozn. atribut bude v příštích verzích nahrazen atributem typCisloDomovni (sjednocení pojmosloví IS). Z důvodů kompatibility api bude atribut podporováno/duplikován do verze 1.2.0  */
  typStavebnihoObjektu?: string;
  /**
   * Typ čísla domu - kód (ciselnikKod: TypCislaDomovniho)
   * @max 9999
   */
  typCisloDomovni?: number;
}

/** Komplexní filtr pro standardizaci adresy RÚIAN  */
export type StandardizovanaAdresaFiltr = StrankovaniARazeni & {
  /**
   * Kód obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodObce?: number;
  /**
   * Název obce
   * @maxLength 48
   */
  nazevObce?: string;
  /**
   * Kód části obce
   * @format int32
   * @min 0
   * @max 999999
   */
  kodCastiObce?: number;
  /**
   * Název části obce
   * @maxLength 48
   */
  nazevCastiObce?: string;
  /**
   * Kód městské části statutárního města nebo Prahy
   * @format int32
   * @min 0
   * @max 999999
   */
  kodMestskehoCastiObvodu?: number;
  /**
   * Název městské části statutárního města nebo Prahy
   * @maxLength 32
   */
  nazevMestskehoCastiObvodu?: string;
  /**
   * Kód ulice, veřejného prostranství
   * @format int32
   * @min 0
   * @max 9999999
   */
  kodUlice?: number;
  /**
   * Název ulice, veřejného prostranství
   * @maxLength 48
   */
  nazevUlice?: string;
  /**
   * Číslo domovní
   * @max 9999
   */
  cisloDomovni?: number;
  /**
   * Číslo orientační - číselná část
   * @max 999
   */
  cisloOrientacni?: number;
  /**
   * Číslo orientační - písmenná část
   * @maxLength 1
   */
  cisloOrientacniPismeno?: string;
  /**
   * Kód adresního místa
   * @min 0
   * @max 999999999
   */
  kodAdresnihoMista?: number;
  /**
   * Nestrukturovaná adresa
   * @maxLength 1500
   */
  textovaAdresa?: string;
  /** Typ požadované standardizace - kód (číselník kod:TypStandardizaceAdresy) UPLNA_STANDARDIZACE, VYHOVUJICI_ADRESY */
  typStandardizaceAdresy?: string;
};

/** Adresa */
export type AdresaCeu = Adresa & {
  /**
   * Typ adresy
   * @minLength 1
   * @maxLength 64
   */
  typAdresy?: string;
};

/** Tabulka angažovaných osob */
export interface AngazovanaOsobaCeu {
  /**
   * Jméno, příjmení správce
   * @maxLength 100
   */
  jmenoPrijmeni?: string;
  /**
   * Typ angažmá
   * @minLength 1
   * @maxLength 64
   */
  typAngazma?: string;
}

/** Ekonomický subjekt zdroje CEÚ - obecný předek  */
export type EkonomickySubjektCeuZaklad = EkonomickySubjektZaklad & {
  /**
   * Typ subjektu  (ciselnikKod: TypSubjektu, zdroj: Ceu)
   * @minLength 1
   * @maxLength 64
   */
  typSubjektu?: string;
  adresy?: AdresaCeu[];
  /**
   * Jméno, příjmení fyzické osoby
   * @maxLength 100
   */
  jmenoPrijmeni?: string;
};

/** Úpadek - obecný předek */
export interface UpadekCeu {
  /** Textace podnětu úpadku  */
  podnet?: string;
  /** Spisová značka řízení úpadku */
  spisZn?: string;
  /**
   * Datum zápisu
   * @format date
   */
  datum?: string;
  /**
   * Odkaz na detail úpadku
   * @minLength 1
   * @maxLength 255
   */
  detail?: string;
  /**
   * Odkaz na usnesení
   * @minLength 1
   * @maxLength 255
   */
  usneseni?: string;
  /**
   * Akce úpadku
   * @minLength 1
   * @maxLength 64
   */
  akceUpadek?: string;
  /**
   * Typ úpadku
   * @minLength 1
   * @maxLength 64
   */
  typUpadek?: string;
  /**
   * Soud rozhodující o úpadku
   * @minLength 1
   * @maxLength 64
   */
  soudUpadek?: string;
}

/** Seznam ekonomických subjektů ze zdroje CEÚ */
export type EkonomickeSubjektyCeuSeznam = Seznam & {
  ekonomickeSubjekty?: EkonomickySubjektCeu[];
};

/** Ekonomický subjekt */
export interface EkonomickySubjektCeu {
  /**
   * ičo/Id ekonomického subjektu
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
  zaznamy?: ZaznamCeu[];
}

/** Tabulka úpadků */
export type UpadekCeuVerejny = UpadekCeu & {
  /** Správce úpadku  */
  spravceUpadku?: AngazovanaOsobaCeu;
};

/** Detailní informace o ekonomickém subjektu ze zdroje CEÚ */
export type ZaznamCeu = EkonomickySubjektCeuZaklad & {
  upadek?: UpadekCeuVerejny[];
};

/** Filtr notifikační dávky ARES */
export interface EkonomickeSubjektyNotifikaceFiltr {
  /**
   * Datový zdroj notifikační dávky - kód (ciselnikKod: TypZdrojeAres, zdroj:com) Podporované zdroje:  vr - Věřejný rejstřík res - Registr ekonomických subjektů rzp - Registr živnostenského podnikání nrpzs - Národní registr poskytovatelů zdravotnických služeb rcns - Registr církvní a náboženských společenství rpsh - Registr politických stran a hnutí rs - Registr škol szr - Společný zemědělský registr
   * @maxLength 30
   */
  datovyZdroj?: string;
}

/** Notifikační změna */
export interface Notifikace {
  /**
   * Typ notifikační změny - kód (kodCiselniku: TypZmenyAres)
   * @maxLength 50
   */
  typZmeny?: string;
  /**
   * Ičo ekonomického subjektu, pokud je ičo přidělené. Id ekonomického subjektu, polkud je ičo nepřidělené.
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  icoId?: string;
}

/** Notifikační dávka datového zdroje */
export interface NotifikacniDavka {
  /** Číslo notifikační dávky */
  cisloDavky?: number;
  /**
   * Datový zdroj notifikační dávky - kód (ciselnikKod: TypZdrojeAres, zdroj:com)
   * @maxLength 30
   */
  datovyZdroj?: string;
  /**
   * Datum uvolnění notifikační dávky
   * @format date
   */
  datumUvolneniDavky?: string;
  /** Počet změn v notifikační dávce */
  pocetZmen?: number;
}

/** Notifikační dávka datového zdroje */
export type NotifikacniDavkaZaznam = NotifikacniDavka & {
  seznamNotifikaci?: Notifikace[];
};

/** Seznam notifikačních dávek */
export interface SeznamNotifikacnichDavek {
  notifikacniDavky?: NotifikacniDavka[];
}

/** Angažovaná osoba - filtr */
export interface AngazovanaOsobaFiltr {
  /**
   * Jméno angažované osoby
   * @maxLength 100
   */
  jmeno?: string;
  /**
   * Rodné číslo osoby
   * @minLength 9
   * @maxLength 10
   */
  rodneCislo?: string;
  /**
   * Příjmení angažované osoby
   * @maxLength 100
   */
  prijmeni?: string;
  /**
   * Datum narození angažované osoby
   * @format date
   */
  datumNarozeni?: string;
}

export type VyhledejEkonomickeSubjektyData = EkonomickeSubjektySeznam;

export interface VratEkonomickySubjektParams {
  /**
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektData = EkonomickySubjekt;

export interface VratEkonomickySubjektVrParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektVrData = EkonomickySubjektVr;

export type VyhledejSeznamEkonomickychSubjektuVrData =
  EkonomickeSubjektyVrSeznam;

export interface VratEkonomickySubjektResParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektResData = EkonomickySubjektRes;

export type VyhledejSeznamEkonomickychSubjektuResData =
  EkonomickeSubjektyResSeznam;

export interface VratEkonomickySubjektRzpParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektRzpData = EkonomickySubjektRzp;

export type VyhledejSeznamEkonomickychSubjektuRzpData =
  EkonomickeSubjektyRzpSeznam;

export type VyhledejSeznamEkonomickychSubjektuNrpzsData =
  EkonomickeSubjektyNrpzsSeznam;

export interface VratEkonomickySubjektNrpzsParams {
  /**
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektNrpzsData = EkonomickySubjektNrpzs;

export interface VratEkonomickySubjektRpshParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektRpshData = EkonomickySubjektRpsh;

export type VyhledejSeznamEkonomickychSubjektuRpshData =
  EkonomickeSubjektyRpshSeznam;

export interface VratEkonomickySubjektRcnsParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektRcnsData = EkonomickySubjektRcns;

export type VyhledejSeznamEkonomickychSubjektuRcnsData =
  EkonomickeSubjektyRcnsSeznam;

export interface VratEkonomickySubjektSzrParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektSzrData = EkonomickySubjektSzr;

export type VyhledejSeznamEkonomickychSubjektuSzrData =
  EkonomickeSubjektySzrSeznam;

export interface VratEkonomickySubjektRsParams {
  /**
   * @maxLength 32
   * @pattern ^(ARES_)?\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektRsData = EkonomickySubjektRs;

export type VyhledejSeznamEkonomickychSubjektuRsData =
  EkonomickeSubjektyRsSeznam;

export type VyhledejCiselnikData = CiselnikyNazevnikSeznam;

export type VyhledejStandardizovaneAdresyData = StandardizovaneAdresySeznam;

export interface VratEkonomickySubjektCeuParams {
  /**
   * @minLength 8
   * @maxLength 8
   * @pattern ^\d{8}$
   */
  ico: string;
}

export type VratEkonomickySubjektCeuData = EkonomickySubjektCeu;

export type VyhledejSeznamEkonomickychSubjektuCeuData =
  EkonomickeSubjektyCeuSeznam;

export type VyhledejSeznamNotifikacnichDavekData = SeznamNotifikacnichDavek;

export interface VratNotifikacniDavkuParams {
  /** @maxLength 30 */
  datovyZdroj: string;
  cisloDavky: number;
}

export type VratNotifikacniDavkuData = NotifikacniDavkaZaznam;

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "/ekonomicke-subjekty-v-be/rest",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title ARES: REST API - veřejné
 * @version 1.2.0
 * @baseUrl /ekonomicke-subjekty-v-be/rest
 *
 * REST rozhraní systému ARES
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  ekonomickeSubjekty = {
    /**
     * @description Vyhledání seznamu ekonomických subjektů ARES podle komplexního filtru
     *
     * @tags ekonomicke-subjekty
     * @name VyhledejEkonomickeSubjekty
     * @request POST:/ekonomicke-subjekty/vyhledat
     */
    vyhledejEkonomickeSubjekty: (
      data: EkonomickeSubjektyKomplexFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejEkonomickeSubjektyData, Chyba>({
        path: `/ekonomicke-subjekty/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání ekonomického subjektu ARES podle zadaného iča
     *
     * @tags ekonomicke-subjekty
     * @name VratEkonomickySubjekt
     * @request GET:/ekonomicke-subjekty/{ico}
     */
    vratEkonomickySubjekt: (
      { ico, ...query }: VratEkonomickySubjektParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektData, Chyba>({
        path: `/ekonomicke-subjekty/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyVr = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje VR
     *
     * @tags ekonomicke-subjekty-vr
     * @name VratEkonomickySubjektVr
     * @request GET:/ekonomicke-subjekty-vr/{ico}
     */
    vratEkonomickySubjektVr: (
      { ico, ...query }: VratEkonomickySubjektVrParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektVrData, Chyba>({
        path: `/ekonomicke-subjekty-vr/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje VR
     *
     * @tags ekonomicke-subjekty-vr
     * @name VyhledejSeznamEkonomickychSubjektuVr
     * @request POST:/ekonomicke-subjekty-vr/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuVr: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuVrData, Chyba>({
        path: `/ekonomicke-subjekty-vr/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyRes = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje RES
     *
     * @tags ekonomicke-subjekty-res
     * @name VratEkonomickySubjektRes
     * @request GET:/ekonomicke-subjekty-res/{ico}
     */
    vratEkonomickySubjektRes: (
      { ico, ...query }: VratEkonomickySubjektResParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektResData, Chyba>({
        path: `/ekonomicke-subjekty-res/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje RES
     *
     * @tags ekonomicke-subjekty-res
     * @name VyhledejSeznamEkonomickychSubjektuRes
     * @request POST:/ekonomicke-subjekty-res/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuRes: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuResData, Chyba>({
        path: `/ekonomicke-subjekty-res/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyRzp = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje RŽP
     *
     * @tags ekonomicke-subjekty-rzp
     * @name VratEkonomickySubjektRzp
     * @request GET:/ekonomicke-subjekty-rzp/{ico}
     */
    vratEkonomickySubjektRzp: (
      { ico, ...query }: VratEkonomickySubjektRzpParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektRzpData, Chyba>({
        path: `/ekonomicke-subjekty-rzp/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje RŽP
     *
     * @tags ekonomicke-subjekty-rzp
     * @name VyhledejSeznamEkonomickychSubjektuRzp
     * @request POST:/ekonomicke-subjekty-rzp/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuRzp: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuRzpData, Chyba>({
        path: `/ekonomicke-subjekty-rzp/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyNrpzs = {
    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje NRPZS
     *
     * @tags ekonomicke-subjekty-nrpzs
     * @name VyhledejSeznamEkonomickychSubjektuNrpzs
     * @request POST:/ekonomicke-subjekty-nrpzs/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuNrpzs: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuNrpzsData, Chyba>({
        path: `/ekonomicke-subjekty-nrpzs/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje NRPZS
     *
     * @tags ekonomicke-subjekty-nrpzs
     * @name VratEkonomickySubjektNrpzs
     * @request GET:/ekonomicke-subjekty-nrpzs/{ico}
     */
    vratEkonomickySubjektNrpzs: (
      { ico, ...query }: VratEkonomickySubjektNrpzsParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektNrpzsData, Chyba>({
        path: `/ekonomicke-subjekty-nrpzs/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyRpsh = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje RPSH
     *
     * @tags ekonomicke-subjekty-rpsh
     * @name VratEkonomickySubjektRpsh
     * @request GET:/ekonomicke-subjekty-rpsh/{ico}
     */
    vratEkonomickySubjektRpsh: (
      { ico, ...query }: VratEkonomickySubjektRpshParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektRpshData, Chyba>({
        path: `/ekonomicke-subjekty-rpsh/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje RPSH
     *
     * @tags ekonomicke-subjekty-rpsh
     * @name VyhledejSeznamEkonomickychSubjektuRpsh
     * @request POST:/ekonomicke-subjekty-rpsh/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuRpsh: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuRpshData, Chyba>({
        path: `/ekonomicke-subjekty-rpsh/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyRcns = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje RCNS
     *
     * @tags ekonomicke-subjekty-rcns
     * @name VratEkonomickySubjektRcns
     * @request GET:/ekonomicke-subjekty-rcns/{ico}
     */
    vratEkonomickySubjektRcns: (
      { ico, ...query }: VratEkonomickySubjektRcnsParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektRcnsData, Chyba>({
        path: `/ekonomicke-subjekty-rcns/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje RCNS
     *
     * @tags ekonomicke-subjekty-rcns
     * @name VyhledejSeznamEkonomickychSubjektuRcns
     * @request POST:/ekonomicke-subjekty-rcns/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuRcns: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuRcnsData, Chyba>({
        path: `/ekonomicke-subjekty-rcns/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektySzr = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje SZR - subregistr EZP
     *
     * @tags ekonomicke-subjekty-szr
     * @name VratEkonomickySubjektSzr
     * @request GET:/ekonomicke-subjekty-szr/{ico}
     */
    vratEkonomickySubjektSzr: (
      { ico, ...query }: VratEkonomickySubjektSzrParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektSzrData, Chyba>({
        path: `/ekonomicke-subjekty-szr/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje SZR - subregistr EZP
     *
     * @tags ekonomicke-subjekty-szr
     * @name VyhledejSeznamEkonomickychSubjektuSzr
     * @request POST:/ekonomicke-subjekty-szr/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuSzr: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuSzrData, Chyba>({
        path: `/ekonomicke-subjekty-szr/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyRs = {
    /**
     * @description Vyhledání konkrétního ekonomického subjektu ze zdroje RŠ
     *
     * @tags ekonomicke-subjekty-rs
     * @name VratEkonomickySubjektRs
     * @request GET:/ekonomicke-subjekty-rs/{ico}
     */
    vratEkonomickySubjektRs: (
      { ico, ...query }: VratEkonomickySubjektRsParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektRsData, Chyba>({
        path: `/ekonomicke-subjekty-rs/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu ekonomických subjektu ze zdroje RŠ
     *
     * @tags ekonomicke-subjekty-rs
     * @name VyhledejSeznamEkonomickychSubjektuRs
     * @request POST:/ekonomicke-subjekty-rs/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuRs: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuRsData, Chyba>({
        path: `/ekonomicke-subjekty-rs/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ciselnikyNazevniky = {
    /**
     * @description Vyhledání číselníků používaných v IS ARES podle komplexního filtru
     *
     * @tags ciselniky-nazevniky
     * @name VyhledejCiselnik
     * @request POST:/ciselniky-nazevniky/vyhledat
     */
    vyhledejCiselnik: (
      data: CiselnikyZakladniFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejCiselnikData, Chyba>({
        path: `/ciselniky-nazevniky/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  standardizovaneAdresy = {
    /**
     * @description Vyhledání seznamu standardizovaných adres RÚIAN podle komplexního filtru
     *
     * @tags standardizovane-adresy
     * @name VyhledejStandardizovaneAdresy
     * @request POST:/standardizovane-adresy/vyhledat
     */
    vyhledejStandardizovaneAdresy: (
      data: StandardizovanaAdresaFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejStandardizovaneAdresyData, Chyba>({
        path: `/standardizovane-adresy/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyCeu = {
    /**
     * @description Vyhledání konkrétního úpadce ze zdroje CEÚ
     *
     * @tags ekonomicke-subjekty-ceu
     * @name VratEkonomickySubjektCeu
     * @request GET:/ekonomicke-subjekty-ceu/{ico}
     */
    vratEkonomickySubjektCeu: (
      { ico, ...query }: VratEkonomickySubjektCeuParams,
      params: RequestParams = {},
    ) =>
      this.request<VratEkonomickySubjektCeuData, Chyba>({
        path: `/ekonomicke-subjekty-ceu/${ico}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání seznamu úpadců ze zdroje CEÚ
     *
     * @tags ekonomicke-subjekty-ceu
     * @name VyhledejSeznamEkonomickychSubjektuCeu
     * @request POST:/ekonomicke-subjekty-ceu/vyhledat
     */
    vyhledejSeznamEkonomickychSubjektuCeu: (
      data: EkonomickeSubjektyRegistraceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamEkonomickychSubjektuCeuData, Chyba>({
        path: `/ekonomicke-subjekty-ceu/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  ekonomickeSubjektyNotifikace = {
    /**
     * @description Vyhledání seznamu notifikačních dávek ekonomických subjektů ARES podle zvoleného filtru
     *
     * @tags ekonomicke-subjekty-notifikace
     * @name VyhledejSeznamNotifikacnichDavek
     * @request POST:/ekonomicke-subjekty-notifikace/vyhledat
     */
    vyhledejSeznamNotifikacnichDavek: (
      data: EkonomickeSubjektyNotifikaceFiltr,
      params: RequestParams = {},
    ) =>
      this.request<VyhledejSeznamNotifikacnichDavekData, Chyba>({
        path: `/ekonomicke-subjekty-notifikace/vyhledat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Vyhledání  konkrétní notifikační dávky zdroje ARES podle vstupcách parametrů (zdroj, číslo notifikační dávky)
     *
     * @tags ekonomicke-subjekty-notifikace
     * @name VratNotifikacniDavku
     * @request GET:/ekonomicke-subjekty-notifikace/datovy-zdroj/{datovyZdroj}/cislo-davky/{cisloDavky}
     */
    vratNotifikacniDavku: (
      { datovyZdroj, cisloDavky, ...query }: VratNotifikacniDavkuParams,
      params: RequestParams = {},
    ) =>
      this.request<VratNotifikacniDavkuData, Chyba>({
        path: `/ekonomicke-subjekty-notifikace/datovy-zdroj/${datovyZdroj}/cislo-davky/${cisloDavky}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
