import { createRouter, createWebHashHistory } from "vue-router";

import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import EnterScreen from "../components/EnterScreen/EnterScreen.vue";
import MoodSelector from "@/components/MoodSelector.vue";
import MoodHistory from "@/components/MoodHistory.vue";
import HomePage from "@/components/HomePage.vue";
import MoodDetailed from "@/components/MoodDetailed.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: EnterScreen },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignUp },
    { path: "/selector", component: MoodSelector  },
    { path: "/history", component: MoodHistory },
    { path: "/home", component: HomePage},
    {path: "/detailed", component: MoodDetailed}
  ],
});



export default router;
