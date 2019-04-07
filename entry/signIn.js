import '../style/reset.scss';
import Vue from 'vue';
import app from '../vue/signIn';
import '../style/iview/iview.css';
import iView from 'iview';
Vue.use(iView);

new Vue({
    el: '#app',
    render: h => h(app)
});