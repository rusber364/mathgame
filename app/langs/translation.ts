import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ru from './ru.json'
import en from './en.json'
import amh from './amh.json'
import ara from './ara.json'
import asm from './asm.json'
import az from './az.json'
import ben from './ben.json'
import bho from './bho.json'
import blr from './blr.json'
import ces from './ces.json'
import chan from './chan.json'
import de from './de.json'
import fra from './fra.json'
import grk from './grk.json'
import guj from './guj.json'
import hau from './hau.json'
import hin from './hin.json'
import hrv from './hrv.json'
import hun from './hun.json'
import ibo from './ibo.json'
import ind from './ind.json'
import itl from './itl.json'
import jav from './jav.json'
import jpn from './jpn.json'
import kan from './kan.json'
import kor from './kor.json'
import mai from './mai.json'
import mal from './mal.json'
import mar from './mar.json'
import mlg from './mlg.json'
import msa from './msa.json'
import mya from './mya.json'
import nep from './nep.json'
import nld from './nld.json'
import ori from './ori.json'
import orm from './orm.json'
import pan from './pan.json'
import pol from './pol.json'
import por from './por.json'
import prs from './prs.json'
import pus from './pus.json'
import rum from './rum.json'
import sin from './sin.json'
import sna from './spa.json'
import sndh from './sndh.json'
import spa from './spa.json'
import srik from './srik.json'
import srp from './srp.json'
import sun from './sun.json'
import tam from './tam.json'
import tel from './tel.json'
import tha from './tha.json'
import tur from './tur.json'
import ukr from './ukr.json'
import urd from './urd.json'
import uzb from './uzb.json'
import vie from './vie.json'
import yur from './yur.json'

export const resources = {
  en,
  ru,
  amh,
  ara,
  asm,
  az,
  ben,
  bho,
  blr,
  ces,
  chan,
  de,
  fra,
  grk,
  guj,
  hau,
  hin,
  hun,
  hrv,
  ibo,
  ind,
  itl,
  jav,
  jpn,
  kan,
  kor,
  mai,
  mal,
  mar,
  mlg,
  msa,
  mya,
  nep,
  nld,
  ori,
  orm,
  pan,
  pol,
  por,
  prs,
  pus,
  rum,
  sin,
  sna,
  srik,
  srp,
  spa,
  sndh,
  sun,
  tam,
  tel,
  tha,
  tur,
  ukr,
  urd,
  uzb,
  vie,
  yur,
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
