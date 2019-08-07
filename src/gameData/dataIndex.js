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

    terminal_send_show:"",
  },
  getters: {
    terminal_show:state => {
      return state.terminal_send_show;
    }
  },
  mutations: {
    changeView(state, view) {
      return state.currentView = view
    },
    change_terminal_send_show(state,text_to_change){
      return state.terminal_send_show= text_to_change
    }
  }
})

export default data