import { defineRouting } from 'next-intl/routing'
import locales from '@/constants/locales'

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(locales),
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})
