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

    // 0 - not showed
    terminalTutorialItem: 0,
    tutorialMessages: {
      initialMapMessage: 0,
      initialCombatViewMessage: 0,
      initialBattleWonMessage: 0,
      initialInventoryMessage: 0,
      messageNewLocations: 0,
    },

    mapLocationClicked: 0,


    curr_enemies:["cultist","cultist","cultist","scavanger","cultist","scavanger"],

    // Hero Stats
    Hero: {
      hp: 500,
      maxHp: 500,
      chestplate: 'ch1',
      legplate: 'lg1',
      knife: 'kn1',
      sword: 'sw1',
      gun: 'gu1',
      knifeAttack: 25,
      swordAttack: 50,
      gunAttack: 50,
      str: 170,
      dex: 150,
      con: 200
    },

    stats: {
      str: 1000,
      dex: 1000,
      con: 1000,
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


    inventorySelectedItems: {
      knife: 'knife_lvl1',
      sword: 'sword_lvl1',
      gun: 'gun_lvl1',
      chestplate: 'chestplate_lvl1',
      legplate: 'legplate_lvl1'
    },

    knife: {
      selectedKnife: 'kn1',
      selectedKnifeImg: 'knife_lvl1',
      str: 100,
      dex: 40,
      con: 30
    },

    gun: {
      selectedGun: 'gu1',
      selectedGunImg: 'gun_lvl1',
      str: 100,
      dex: 52,
      con: 21
    },

    sword: {
      selectedSword: 'sw1',
      selectedSwordImg: 'sword_lvl1',
      str: 179,
      dex: 21,
      con: 19
    },

    chestplate: {
      selectedChestplate: 'ch1',
      selectedChestplateImg: 'chestplate_lvl1',
      str: 50,
      dex: 150,
      con: 200
    },

    legplate: {
      selectedLegplate: 'lg1',
      selectedLegplateImg: 'legplate_lvl1',
      str: 20,
      dex: 75,
      con: 100
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
          if(item.model !== 'coming_soon') {
            this.state.knife.selectedKnife = item.id;
            this.state.knife.selectedKnifeImg = item.model;
            this.state.knife.str = item.str;
            this.state.knife.dex = item.dex;
            this.state.knife.con = item.con;
            this.state.Hero.knife = item.id;
          }
          this.state.inventorySelectedItems.knife = item.model;
        } else if (item.types === 'guns') {
          if(item.model !== 'coming_soon') {
            this.state.gun.selectedGun = item.id;
            this.state.gun.selectedGunImg = item.model;
            this.state.gun.str = item.str;
            this.state.gun.dex = item.dex;
            this.state.gun.con = item.con;
            this.state.Hero.gun = item.id;
          }
          this.state.inventorySelectedItems.gun = item.model;
        } else if (item.types === 'swords') {
          if(item.model !== 'coming_soon') {
            this.state.sword.selectedSword = item.id;
            this.state.sword.selectedSwordImg = item.model;
            this.state.sword.str = item.str;
            this.state.sword.dex = item.dex;
            this.state.sword.con = item.con;
            this.state.Hero.sword = item.id;
          }
          this.state.inventorySelectedItems.sword = item.model;
        } else if (item.types === 'chestplates') {
          if(item.model !== 'coming_soon') {
            this.state.chestplate.selectedChestplate = item.id;
            this.state.chestplate.selectedChestplateImg = item.model;
            this.state.chestplate.str = item.str;
            this.state.chestplate.dex = item.dex;
            this.state.chestplate.con = item.con;
            this.state.Hero.chestplate = item.id;
          }
          this.state.inventorySelectedItems.chestplate = item.model;
        } else if (item.types === 'legplates') {
          if(item.model !== 'coming_soon') {
            this.state.legplate.selectedLegplate = item.id;
            this.state.legplate.selectedLegplateImg = item.model;
            this.state.legplate.str = item.str;
            this.state.legplate.dex = item.dex;
            this.state.legplate.con = item.con;
            this.state.Hero.legplate = item.id;
          }
          this.state.inventorySelectedItems.legplate = item.model;
        }
        this.state.Hero.maxHp = this.state.Hero.con + this.state.chestplate.con + this.state.legplate.con;
    },

  }
})

export default data