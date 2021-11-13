// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Hom from '@/pages/Hom'
import NotFound from '@/pages/404'
import Example from '@/pages/Example'


// Routering 
export default new Router ({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'hom',
        component: Hom
    },
    {
        path: '/example',
        name: 'example',
        component: Example
    },
    {path: '*',
    name: 'notFound',
    component: NotFound}
  ]
})