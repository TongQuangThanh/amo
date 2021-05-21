// translate-config.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage() {
    const defaultLang = localStorage.getItem('lang');
    if(defaultLang && (defaultLang == "vi" || defaultLang == 'en')){
      console.log(defaultLang);
      this.translate.setDefaultLang(defaultLang);
      return defaultLang;
    }else{
      const language = 'vi';
      console.log(language);
      this.translate.setDefaultLang(language);
      return language;
    }
  }

  setLanguageDefault(){
    this.setLanguage(this.getDefaultLanguage());
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

}
