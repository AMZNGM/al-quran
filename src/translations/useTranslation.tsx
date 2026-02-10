'use client'

export function useTranslation() {
  return {
    t: (key: string) => key,
    lang: 'en',
    currentLanguage: 'en',
  }
}
