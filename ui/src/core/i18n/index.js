import { createI18n } from 'vue-i18n';
import messages from './messages';

const i18n = createI18n({
    legacy: false,
    locale: 'he',
    fallbackLocale: 'en',
    messages
});


export default i18n;