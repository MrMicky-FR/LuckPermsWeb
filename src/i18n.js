import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './messages/en';
import zhCN from './messages/zh_CN';

Vue.use(VueI18n);

export default new VueI18n({
  messages: {
    en,
    zhCN,
  },
  locale: 'en',
  fallbackLocale: 'en',
});
