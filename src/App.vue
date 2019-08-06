<template>
  <div class="app">
    <HomeScreen v-if="currentView == 'homeScreen'"/>
    <PlayGame v-else-if="currentView == 'playGame'"/>
  </div>
</template>

<script>
import PlayGame from './components/PlayGame.vue'
import HomeScreen from './components/HomeScreen.vue'

export default {
  name: 'app',
  components: {
    HomeScreen,
    PlayGame
  },
  computed: {
    currentView() {
      return this.$store.state.currentView
    }
  }
}
</script>

<style>
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
}
body {
    margin: 0;
    overflow: hidden;
}
</style>
