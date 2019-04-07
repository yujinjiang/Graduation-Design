import '../style/aboutUs.scss';
import '../style/reset.scss';
import Vue from 'vue';
import app from '../vue/login/app';
import '../style/iview/iview.css';
import iView from 'iview';
Vue.use(iView);

(new Vue(app)).$mount('#app');