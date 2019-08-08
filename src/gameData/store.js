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


    curr_enemies:["cultist","cultist","cultist","scavanger","cultist","scavanger"],

    // Hero Stats
    Hero: {
      hp: 100,
      maxHp: 100,
      chestplate: 'ch1',
      legplate: 'lg1',
      knife: 'kn1',
      sword: 'sw1',
      gun: 'gu1',
      knifeAttack: 25,
      swordAttack: 50,
      gunAttack: 50
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
      selectedKnife: 'kn1',
      selectedKnifeImg: 'knife_lvl1'
    },

    gun: {
      selectedGun: 'gu1',
      selectedGunImg: 'gun_lvl1'
    },

    sword: {
      selectedSword: 'sw1',
      selectedSwordImg: 'sword_lvl1'
    },

    chestplate: {
      selectedChestplate: 'ch1',
      selectedChestplateImg: 'chestplate_lvl1'
    },

    legplate: {
      selectedLegplate: 'lg1',
      selectedLegplateImg: 'legplate_lvl1'
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
        if (item.types === 'knives') {
          this.state.knife.selectedKnife = item.id;
          this.state.knife.selectedKnifeImg = item.model;
          this.state.Hero.knife = item.id;
        } else if (item.types === 'guns') {
          this.state.gun.selectedGun = item.id;
          this.state.gun.selectedGunImg = item.model;
          this.state.Hero.gun = item.id;
        } else if (item.types === 'swords') {
          this.state.sword.selectedSword = item.id;
          this.state.sword.selectedSwordImg = item.model;
          this.state.Hero.sword = item.id;
        } else if (item.types === 'chestplates') {
          this.state.chestplate.selectedChestplate = item.id;
          this.state.chestplate.selectedChestplateImg = item.model;
          this.state.Hero.chestplate = item.id;
        } else if (item.types === 'legplates') {
          this.state.legplate.selectedLegplate = item.id;
          this.state.legplate.selectedLegplateImg = item.model;
          this.state.Hero.legplate = item.id;
        }
    },

  }
})

export default data