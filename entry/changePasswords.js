import Vue from 'vue';
import app from '../vue/changePasswords';

import '../style/reset.scss';
import '../style/iview/iview.css';
import iView from 'iview';
Vue.use(iView);

(new Vue(app)).$mount('#app');