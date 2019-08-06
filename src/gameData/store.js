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

  },
  getters: {

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
    }
  }
})

export default data