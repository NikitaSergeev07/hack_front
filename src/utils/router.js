import {createRouter, createWebHashHistory} from 'vue-router';

import MainPage from '../components/MainPage.vue';
import SignUp from '../components/SignUp.vue';
import SignIn from '../components/SignIn.vue'
import EnterScreen from '../components/EnterScreen/EnterScreen.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: EnterScreen },
        {path: '/sign-in', component: SignIn},
        {path: '/sign-up', component: SignUp},
        {path: '/main', component: MainPage},
    ]
})