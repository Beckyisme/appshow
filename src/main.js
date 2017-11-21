import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import home from 'components/home/home';
import topic from 'components/topic/topic';
import people from 'components/people/people';
import favourable from 'components/favourable/favourable';
import me from 'components/me/me';
import 'common/stylus/index.styl';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/topic',
    component: topic
}, {
    path: '/people',
    component: people
}, {
    path: '/favourable',
    component: favourable
}, {
    path: '/me',
    component: me
}];

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
