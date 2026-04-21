import en from './locales/en.json'
import de from './locales/de.json'

// Plain function export — avoids defineI18nConfig auto-import which fails client-side
export default () => ({
  messages: { en, de },
})
