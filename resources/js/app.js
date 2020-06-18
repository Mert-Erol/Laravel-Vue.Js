

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from '../plugins/vuetify';

import store from "./store";

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('login-form', require('./components/loginForm.vue').default);
Vue.component('app-container', require('./components/appContainer.vue').default);

const app = new Vue({
    vuetify: Vuetify,
    store,
    el: '#app',
});
