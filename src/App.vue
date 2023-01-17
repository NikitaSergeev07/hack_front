<template>
  <EnterScreen />
  <SignIn />
  <SignUp />
  <MainPage />
</template>

<script>
import EnterScreen from './components/EnterScreen/EnterScreen.vue';
import MainPage from './components/MainPage/MainPage.vue';
import SignIn from './components/SignIn/SignIn.vue';
import SignUp from './components/SignUp/SignUp.vue';

export default {
  name: 'App',
  components: {
    EnterScreen,
    SignIn,
    SignUp,
    MainPage,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
