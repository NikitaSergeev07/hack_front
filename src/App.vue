<template>
  <EnterScreen />
  <MainPage />
</template>

<script>
import EnterScreen from './components/EnterScreen/EnterScreen.vue'
import MainPage from './components/MainPage/MainPage.vue'
export default {
  name: 'App',
  components: {
    EnterScreen,
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
