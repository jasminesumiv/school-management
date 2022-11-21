import HomeComp from './components/HomeComp.vue'
import SignUp from './components/SignUp.vue'
import AddComp from './components/AddComp.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomeComp',
        component:HomeComp,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'AddComp',
        component:AddComp,
        path:'/add-comp'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;