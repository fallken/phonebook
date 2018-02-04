
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
//adding vue router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('example', require('./components/Example.vue'));

//end of adding vue router
let Myheader=require('./components/MyHeader.vue');
let Myfooter=require('./components/Myfooter.vue');
let Home=require('./components/Home.vue');
let About=require('./components/About.vue');

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})



const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter}
});
