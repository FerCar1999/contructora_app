import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF8308',
        naranja: '#FF8308',
        amarillo: '#FFB90B',
        azul: '#03045E',
        azul2: '#3C3863',
        crema: '#EDE1C5',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        black: '#000000',
      },
      dark: {
        primary: '#CDDC39',
        secondary: '#CDDC39',
        accent: '#CDDC39',
        error: '#CDDC39',
        info: '#CDDC39',
        success: '#CDDC39',
        warning: '#CDDC39',
        black: '#CDDC39',
      },
    },
  },
  lang: {
    locales: {
      es,
    },
    current: 'es',
  },
});
