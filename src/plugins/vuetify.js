import Vue from "vue";
import Vuetify from "vuetify/lib/";

Vue.use(Vuetify);

import colors from "vuetify/lib/util/colors";

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.darken1,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.grey.lighten5,
      },
      dark: {
        primary: colors.green.lighten1,
        background: colors.indigo.base,
      },
    },
  },
});
