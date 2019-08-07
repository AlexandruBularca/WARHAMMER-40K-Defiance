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
    },

    knife: {
      selectedKnife: 'knife_lvl1',
      knives: [
        {
          item: 'knife_lvl1',
          title: 'knife lvl 1',
        }, { 
          item: 'knife_lvl2',
          title: 'knife lvl 2',
        }, { 
          item: 'knife_lvl3',
          title: 'knife lvl 3',
        }, { 
          item: 'knife_lvl4',
          title: 'knife lvl 4',
        },
      ]
    },

    gun: {
      selectedGun: 'gun_lvl1',
      guns: [
        {
          item: 'gun_lvl1',
          title: 'gun lvl 1',
        }, { 
          item: 'gun_lvl2',
          title: 'gun lvl 2',
        }, { 
          item: 'gun_lvl3',
          title: 'gun lvl 3',
        }, { 
          item: 'gun_lvl4',
          title: 'gun lvl 4',
        }, { 
          item: 'gun_lvl5',
          title: 'gun lvl 5',
        }, { 
          item: 'gun_lvl6',
          title: 'gun lvl 6',
        },
      ]
    },

    sword: {
      selectedSword: 'sword_lvl1',
      swords: [
        {
          item: 'sword_lvl1',
          title: 'sword lvl 1',
        }, { 
          item: 'sword_lvl2',
          title: 'sword lvl 2',
        },
      ]
    },

    chestplate: {
      selectedChestplate: 'chestplate_lvl1',
      chestplates: [
        {
          item: 'chestplate_lvl1',
          title: 'chestplate lvl 1',
        }, { 
          item: 'chestplate_lvl2',
          title: 'chestplate lvl 2',
        },
      ]
    },

    legplate: {
      selectedLegplate: 'legplate_lvl1',
      legplates: [
        {
          item: 'legplate_lvl1',
          title: 'legplate lvl 1',
        }, { 
          item: 'legplate_lvl2',
          title: 'legplate lvl 2',
        },
      ]
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