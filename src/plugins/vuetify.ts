import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VuetifyDateAdapter } from 'vuetify/labs/date/adapters/vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import enUS from 'date-fns/locale/en-US'
import svSE from 'date-fns/locale/sv'

const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#FFFFFF',
      surface: '#FFFFFF',
      primary: '#6200EE',
      'primary-darken-1': '#3700B3',
      secondary: '#03DAC6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }

  const vuetify = createVuetify({
    date: {
      adapter: VuetifyDateAdapter,
      locale: {
        en: enUS,
        sv: svSE,
      },
    },
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
          },
    },
    icons: {
        aliases,
        sets: {
            mdi,
        },
    },
})

export default vuetify;


