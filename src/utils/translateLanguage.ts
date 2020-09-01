import isoLangs from './datas/languages.json';

function translateLanguage(lang: any) {
  const langs: any = isoLangs;
  return langs.isoLangs[lang].name;
}

export default translateLanguage;