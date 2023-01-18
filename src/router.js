import {createRouter, createWebHashHistory} from 'vue-router';

import MainPage from './components/MainPage/MainPage.vue';
import SignUp from './components/SignUp/SignUp.vue';
import SignIn from './components/SignIn/SignIn.vue'
import EnterScreen from './components/EnterScreen/EnterScreen.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: EnterScreen },
        {path: '/sign-in', component: SignIn},
        {path: '/sign-up', component: SignUp},
        {path: '/main', component: MainPage},
    ]
})