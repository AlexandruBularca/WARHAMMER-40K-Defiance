import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const data = new Vuex.Store({
  state: {
    inventory: {
        shown: false,
    },
    currentView: 'homeScreen',
    currentViewOptions: ['homeScreen', 'playGame'],
    gameScreen: 'mapScreen',

    terminal_send_show:"",

    // Hero Stats
    Hero: {
      hp: 100,
      maxHp: 100
    },

    //Ammo
    Ammo: {
      ammo: 100,
      maxAmmo: 100,
    },
    
    //Threat Level
    Threat: {
      threat: 0,
      maxThreat: 100,
    },

    //Map details
    Map: {
      location: {
        x: 36.5,
        y: 29.3,
      },
      locationMiniMap: {
        x: 79.0,
        y: 50.0,
      },
    }

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

    inventoryInteraction() {
      this.state.inventory.shown = !this.state.inventory.shown;
      if (this.state.inventory.shown) {
        this.state.gameScreen = "inventoryScreen";
      } else {
        this.state.gameScreen = "mapScreen";
      }
    },

    showMap() {
      this.state.gameScreen = "mapScreen";
      this.state.inventory.shown = false;
    },

    combatMode() {
      this.state.gameScreen = "combatScreen";
      this.state.inventory.shown = false;
    },

    changeView(state, view) {
      return state.currentView = view
    },
    change_terminal_send_show(state,text_to_change){
      return state.terminal_send_show= text_to_change
    }
  }
})

export default data