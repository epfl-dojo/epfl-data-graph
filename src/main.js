import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueTables from 'vue-tables'
import VueAsyncData from 'vue-async-data'
Vue.use(VueTables.client, {})

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueAsyncData);

import Home from './views/home.vue'
import GraphDemo from './views/graphDemo.vue'
import GraphStudOrigin from './views/graphStudOrigin.vue'

var router = new VueRouter({'hashbang': false, 'history': true}) // disable the #! in the url

router.map({
    '/': {
      component: Home
    },
    '/graphDemo': {
        component: GraphDemo
    },
    '/graphStudOrigin': {
        component: GraphStudOrigin
    }
})

router.start(App, 'app')