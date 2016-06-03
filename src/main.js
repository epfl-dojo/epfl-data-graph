import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)
Vue.use(VueResource)

var Origin = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})

var router = new VueRouter({'hashbang': false, 'history': true}) // disable the #! in the url

router.map({
    '/origin': {
        component: Origin
    },
    '/bar': {
        component: Bar
    }
})

router.start(App, 'app')