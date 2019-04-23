import Vue from 'vue';
import app from '../vue/userCenter0';

import '../style/reset.scss';
import '../style/iview/iview.css';
import iView from 'iview';
Vue.use(iView);

(new Vue(app)).$mount('#app');