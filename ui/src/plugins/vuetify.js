/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import i18n from '@/core/i18n';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';
import { useI18n } from 'vue-i18n';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
        rtl: {
            he: true
        }
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#222222',
                    accent: '#cf2e2e',
                    success: '#008000'
                }
            }
        }
    }
});
