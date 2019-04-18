import Vue from 'vue';
import app from '../vue/classification';

import '../style/reset.scss';
import '../style/iview/iview.css';
import iView from 'iview';
Vue.use(iView);

(new Vue(app)).$mount('#app');