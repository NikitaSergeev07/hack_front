<template>
  <EnterScreen />
  <SignIn />
  <MainPage />
</template>

<script>
import EnterScreen from './components/EnterScreen/EnterScreen.vue';
import MainPage from './components/MainPage/MainPage.vue';
import SignIn from './components/SignIn/SignIn.vue';

export default {
  name: 'App',
  components: {
    EnterScreen,
    SignIn,
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
