// https://github.com/vuejs-templates/webpack-simple

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueHighlightJS from 'vue-highlightjs';
import App from './App';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueHighlightJS);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
