import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import it from "vuetify/es5/locale/it";
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md'
    },
    lang: {
        locales: { it },
        current: "it"
    },

    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#023e8a',
                secondary: '#087e65',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
})