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
    //Enemy
    enemy1: {
      hp: 50,
      maxhp: 50,
      attack: 30
    },

    knife: {
      selectedKnife: 'knife_lvl1',
      knives: [
        {
          model: 'knife_lvl1',
          title: 'knife lvl 1',
          selected: true,
        }, { 
          model: 'knife_lvl2',
          title: 'knife lvl 2',
          selected: false,
        }, { 
          model: 'knife_lvl3',
          title: 'knife lvl 3',
          selected: false,
        }, { 
          model: 'knife_lvl4',
          title: 'knife lvl 4',
          selected: false,
        },
      ]
    },

    gun: {
      selectedGun: 'gun_lvl1',
      guns: [
        {
          model: 'gun_lvl1',
          title: 'gun lvl 1',
          selected: true,
        }, { 
          model: 'gun_lvl2',
          title: 'gun lvl 2',
          selected: false,
        }, { 
          model: 'gun_lvl3',
          title: 'gun lvl 3',
          selected: false,
        }, { 
          model: 'gun_lvl4',
          title: 'gun lvl 4',
          selected: false,
        }, { 
          model: 'gun_lvl5',
          title: 'gun lvl 5',
          selected: false,
        }, { 
          model: 'gun_lvl6',
          title: 'gun lvl 6',
          selected: false,
        },
      ]
    },

    sword: {
      selectedSword: 'sword_lvl1',
      swords: [
        {
          model: 'sword_lvl1',
          title: 'sword lvl 1',
          selected: true,
        }, { 
          model: 'sword_lvl2',
          title: 'sword lvl 2',
          selected: false,
        },
      ]
    },

    chestplate: {
      selectedChestplate: 'chestplate_lvl1',
      chestplates: [
        {
          model: 'chestplate_lvl1',
          title: 'chestplate lvl 1',
          selected: true,
        }, { 
          model: 'chestplate_lvl2',
          title: 'chestplate lvl 2',
          selected: false,
        },
      ]
    },

    legplate: {
      selectedLegplate: 'legplate_lvl1',
      legplates: [
        {
          model: 'legplate_lvl1',
          title: 'legplate lvl 1',
          selected: true,
        }, { 
          model: 'legplate_lvl2',
          title: 'legplate lvl 2',
          selected: false,
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
    },

    heroKnifeAttack() {
      this.state.enemy1.hp = this.state.enemy1.hp - this.state.hero.knifeAttack;
      this.commit('enemy1Attackhero');
      },
      
    heroSwordAttack() {
      this.state.enemy1.hp = this.state.enemy1.hp - this.state.hero.swordAttack;
      this.commit('enemy1Attackhero');
    },

    heroGunAttack() {
      this.state.enemy1.hp = this.state.enemy1.hp - this.state.hero.gunAttack;
      this.commit('enemy1Attackhero');
    },

    enemy1Attackhero () {
      this.state.hero.hp = this.state.hero.hp -this.state.enemy.attack;
    },

    itemFromInventoryClicked(type, item) {
      if (!item.isSelected) {
        if (item.types === 'knives') {
          this.state.knife.selectedKnife = item.model;
          console.log(this.state.knife.selectedKnife);
        } else if (item.types === 'guns') {
        } else if (item.types === 'swords') {
        } else if (item.types === 'chestplates') {
        } else if (item.types === 'legplates') {
        }
      }
    },

  }
})

export default data