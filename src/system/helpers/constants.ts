export enum EPlatformName { 
  android = 'android',
  ios = 'ios'
}

export enum EListLanguage {
  ru = 'ru',
  en = 'en',
}

export class Pages {
  static readonly login = 'Login'
  static readonly home = 'Home'
  static readonly pagination = 'Pagination'
  static readonly tabFake = 'tabFake'
  static readonly firstFake = 'FirstFake'
  static readonly secondFake = 'SecondFake'
}

export const baseUrl = 'http://jsonplaceholder.typicode.com/'