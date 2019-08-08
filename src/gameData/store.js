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
      maxHp: 100,
      chestplate: 'ch1',
      legplate: 'lg1',
      knife: 'kn1',
      sword: 'sw1',
      gun: 'gu1',
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
      selectedKnife: 'kn1',
      selectedKnifeImg: 'knife_lvl1',
      knives: [
        {
          id: 'kn1',
          model: 'knife_lvl1',
          title: 'knife lvl 1',
          selected: true,
        }, { 
          id: 'kn2',
          model: 'knife_lvl2',
          title: 'knife lvl 2',
          selected: false,
        }, { 
          id: 'kn3',
          model: 'coming_soon',
          title: 'knife lvl 3',
          selected: false,
        }, { 
          id: 'kn4',
          model: 'coming_soon',
          title: 'knife lvl 4',
          selected: false,
        },
      ]
    },

    gun: {
      selectedGun: 'gu1',
      selectedGunImg: 'gun_lvl1',
      guns: [
        {
          id: 'gu1',
          model: 'gun_lvl1',
          title: 'gun lvl 1',
          selected: true,
        }, { 
          id: 'gu2',
          model: 'gun_lvl2',
          title: 'gun lvl 2',
          selected: false,
        }, { 
          id: 'gu3',
          model: 'gun_lvl3',
          title: 'gun lvl 3',
          selected: false,
        }, { 
          id: 'gu4',
          model: 'coming_soon',
          title: 'gun lvl 4',
          selected: false,
        }, { 
          id: 'gu5',
          model: 'coming_soon',
          title: 'gun lvl 5',
          selected: false,
        }, { 
          id: 'gu6',
          model: 'coming_soon',
          title: 'gun lvl 6',
          selected: false,
        },
      ]
    },

    sword: {
      selectedSword: 'sw1',
      selectedSwordImg: 'sword_lvl1',
      swords: [
        {
          id: 'sw1',
          model: 'sword_lvl1',
          title: 'sword lvl 1',
          selected: true,
        }, { 
          id: 'sw2',
          model: 'sword_lvl2',
          title: 'sword lvl 2',
          selected: false,
        }, { 
          id: 'sw3',
          model: 'sword_lvl3',
          title: 'sword lvl 3',
          selected: false,
        },
      ]
    },

    chestplate: {
      selectedChestplate: 'ch1',
      selectedChestplateImg: 'chestplate_lvl1',
      chestplates: [
        {
          id: 'ch1',
          model: 'chestplate_lvl1',
          title: 'chestplate lvl 1',
          selected: true,
        }, { 
          id: 'ch2',
          model: 'coming_soon',
          title: 'chestplate lvl 2',
          selected: false,
        },
      ]
    },

    legplate: {
      selectedLegplate: 'lg1',
      selectedLegplateImg: 'legplate_lvl1',
      legplates: [
        {
          id: 'lg1',
          model: 'legplate_lvl1',
          title: 'legplate lvl 1',
          selected: true,
        }, { 
          id: 'lg2',
          model: 'coming_soon',
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
          this.state.knife.selectedKnife = item.id;
          this.state.knife.selectedKnifeImg = item.model;
          this.state.Hero.knife = item.id;
          for(let i=0; i<this.state.knife.knives.length; i++) {
            if(this.state.knife.knives[i].id === item.id) {
              this.state.knife.knives[i].selected = true;
            } else {
              this.state.knife.knives[i].selected = false;
            }
          }
        } else if (item.types === 'guns') {
          this.state.gun.selectedGun = item.id;
          this.state.gun.selectedGunImg = item.model;
          this.state.Hero.gun = item.id;
          for(let i=0; i<this.state.gun.guns.length; i++) {
            if(this.state.gun.guns[i].id === item.id) {
              this.state.gun.guns[i].selected = true;
            } else {
              this.state.gun.guns[i].selected = false;
            }
          }
        } else if (item.types === 'swords') {
          this.state.sword.selectedSword = item.id;
          this.state.sword.selectedSwordImg = item.model;
          this.state.Hero.sword = item.id;
          for(let i=0; i<this.state.sword.swords.length; i++) {
            if(this.state.sword.swords[i].id === item.id) {
              this.state.sword.swords[i].selected = true;
            } else {
              this.state.sword.swords[i].selected = false;
            }
          }
        } else if (item.types === 'chestplates') {
          this.state.chestplate.selectedChestplate = item.id;
          this.state.chestplate.selectedChestplateImg = item.model;
          this.state.Hero.chestplate = item.id;
          for(let i=0; i<this.state.chestplate.chestplates.length; i++) {
            if(this.state.chestplate.chestplates[i].id === item.id) {
              this.state.chestplate.chestplates[i].selected = true;
            } else {
              this.state.chestplate.chestplates[i].selected = false;
            }
          }
        } else if (item.types === 'legplates') {
          this.state.legplate.selectedLegplate = item.id;
          this.state.legplate.selectedLegplateImg = item.model;
          this.state.Hero.legplate = item.id;
          for(let i=0; i<this.state.legplate.legplates.length; i++) {
            if(this.state.legplate.legplates[i].id === item.id) {
              this.state.legplate.legplates[i].selected = true;
            } else {
              this.state.legplate.legplates[i].selected = false;
            }
          }
        }
      }
    },

  }
})

export default data