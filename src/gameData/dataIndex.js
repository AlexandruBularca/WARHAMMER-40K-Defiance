import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const data = new Vuex.Store({
  state: {
    currentView: 'playGame',
    // changed current view to playGame for the porpose of testing
    currentViewOptions: ['homeScreen', 'playGame'],

    SceneScreen_curr: "disconect",
    SceneScreen_options: ["disconect"],
    // Hero Stats
    currentHeroHealth: 100,
    currentHeroMaxHealth: 100,
    
    //Threat Level
    currentThreatLevel: 32,
    maxThreatLevel: 100,
  },
  getters: {

  },
  mutations: {
    changeView(state, view) {
      return state.currentView = view
    }
  }
})

export default data