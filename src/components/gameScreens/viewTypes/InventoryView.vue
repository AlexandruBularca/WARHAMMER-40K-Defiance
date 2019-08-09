<template>
  <div class="inventoryHolder">
    <div class="inventory">
      <div class="inventory-left">
        <div class="armorHolder">
          <div class="armor">
            <div class="armorItem" v-if="!showArmorUpItems" v-on:click="showArmorItems()" />
            <div class="armorAction" v-else-if="showArmorUpItems" v-on:click="hideArmorItems()">
              <div class="armorUpgrade item1" v-bind:style="showSelectedChestplate" v-on:click="item1()"></div>
              <div class="armorUpgrade item2"  v-bind:style="showSelectedLegplate" v-on:click="item2()"></div>
            </div>
          </div>
        </div>
        <div class="weapons">
          <div class="firstRow">
            <div class="weaponSlot leftSlot">
              <div class="knife" v-bind:style="showSelectedKnife" v-on:click="knifeClicked()" />
            </div>
            <div class="weaponSlot rightSlot">
              <div class="sword" v-bind:style="showSelectedSword" v-on:click="swordClicked()" />
            </div>
          </div>
          <div class="secondRow">
            <div class="weaponSlot middleSlot">
              <div class="gun" v-bind:style="showSelectedGun" v-on:click="gunClicked()" />
            </div>
          </div>
        </div>
      </div>
      <div class="inventory-changer">
        <div class="inventoryChgHolder">
          <div class="itemChangerTitle disable-selection">{{ itemToBeChanged }}</div>
          <div class="item-decoration" />
          <div class="itemsChanger">
            <div class="templateItem disable-selection" v-for="item of itemsToBeRenderd"
            v-on:click="itemRenderClicked(item.selected, item.title, item.model, item.id,
              item.str, item.dex, item.con)" v-bind:key="item.id">
                <div class="itemHolderView" v-if="item.selected !== 'true'">
                    {{item.title}}
                </div>
                <div class="itemHolderViewSelected" v-else-if="item.selected">
                    {{item.title}}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="infoPanel">
      <p class="miniMapText disable-selection">MINIMAP</p>
      
      <!--
      <div class="stats">
        <div class="titleHolder disable-selection">
          <h1 class="statsH1">Stats</h1>
        </div>

        <div class="pbHolder">
          <div class="titlePBItem disable-selection">STR</div>
          <div class="progressBarOutlineStr">
            <div class="progressBarStr" v-bind:style="calculateStrBar" />
          </div>
        </div>

        <div class="pbHolder">
          <div class="titlePBItem disable-selection">DEX</div>
          <div class="progressBarOutlineDex">
            <div class="progressBarDex" v-bind:style="calculateDexBar" />
          </div>
        </div>

        <div class="pbHolder">
          <div class="titlePBItem disable-selection">CON</div>
          <div class="progressBarOutlineCon">
            <div class="progressBarCon" v-bind:style="calculateConBar" />
          </div>
        </div>
      </div>
      -->
      
      <div class="mapHolder" v-on:click="showMap()">
        <div class="miniMap" v-bind:style="asyncMiniMap" />
        <div class="currentUserLocation" />
      </div>
    </div>
  </div>
</template>

<script>
import itemsJson from "./../../../assets/json/items.json"

export default {
  name: "Inventory",
  data() {
    return {
      itemToBeChanged: "chestplate",
      showArmorUpPanel: false,
      userPosX: this.$store.state.Map.locationMiniMap.x,
      userPosY: this.$store.state.Map.locationMiniMap.y,
      transX: 14,
      transY: 26,
      knivesAvailable: itemsJson.knife,
      gunsAvailable: itemsJson.gun,
      swordsAvailable: itemsJson.sword,
      chestplatesAvailable: itemsJson.chestplate,
      legplatesAvailable: itemsJson.legplate,
      itemsTypeToBeRendered: 'chestplates',
      selectedKnife: this.$store.state.knife.selectedKnifeImg,
      weaponSlotSelected: 'knife',
      itemClicked: {
          isSelected: null,
          title: null,
          types: null,
          model: null,
          id: null,
          jsonFiles: itemsJson,
          str: 0,
          dex: 0,
          con: 0,
      },
    };
  },
  methods: {
    showMap() {
      if(this.$store.state.terminalTutorialItem === 4 && this.$store.state.tutorialMessages.messageNewLocations === 0) {
        this.$store.state.inventorySelectedItems.knife = this.$store.state.knife.selectedKnifeImg;
        this.$store.state.inventorySelectedItems.gun = this.$store.state.gun.selectedGunImg;
        this.$store.state.inventorySelectedItems.sword = this.$store.state.sword.selectedSwordImg;
        this.$store.state.inventorySelectedItems.chestplate = this.$store.state.chestplate.selectedChestplateImg;
        this.$store.state.inventorySelectedItems.legplate = this.$store.state.legplate.selectedLegplateImg;
        this.$store.commit("showMap");
        this.$store.state.tutorialMessages.messageNewLocations = 1;
        this.$store.state.terminal_send_show = "It looks like you have unlocked new locations!\nChoose the location where do you want to fight!\n\nKeep in mind that the green locations are unlocked and the red ones will be unlocked while you keep progressing.";
      } else if (this.$store.state.terminalTutorialItem > 4){
        this.$store.commit("showMap");
      }
    },
    showArmorItems() {
      this.showArmorUpPanel = true;
    },
    hideArmorItems() {
      this.showArmorUpPanel = true;
    },
    knifeClicked() {
      this.itemToBeChanged = "knife";
      this.weaponSlotSelected = "knife";
      this.showArmorUpPanel = false;
      this.itemsTypeToBeRendered = 'knives';
    },
    swordClicked() {
      this.itemToBeChanged = "sword";
      this.weaponSlotSelected = "sword";
      this.showArmorUpPanel = false;
      this.itemsTypeToBeRendered = 'swords';
    },
    gunClicked() {
      this.itemToBeChanged = "gun";
      this.weaponSlotSelected = "gun";
      this.showArmorUpPanel = false;
      this.itemsTypeToBeRendered = 'guns';
    },
    item1() {
      this.itemToBeChanged = "chestplate";
      this.itemsTypeToBeRendered = 'chestplates';
    },
    item2() {
      this.itemToBeChanged = "legplates";
      this.itemsTypeToBeRendered = 'legplates';
    },
    itemRenderClicked(isSelected, title, model, id, str, dex, con) {
        this.itemClicked.model = model;
        this.itemClicked.isSelected = isSelected;
        this.itemClicked.title = title;
        this.itemClicked.types = this.itemsTypeToBeRendered;
        this.itemClicked.id = id;
        this.itemClicked.str = str;
        this.itemClicked.dex = dex;
        this.itemClicked.con = con;
        this.$store.commit('itemFromInventoryClicked', this.itemClicked);
        if (this.itemClicked.types === 'knives' && model !== 'coming_soon') {
          for(let i=0; i<itemsJson.knife.length; i++) {
            if(itemsJson.knife[i].id === id) {
              itemsJson.knife[i].selected = "true";
            } else {
              itemsJson.knife[i].selected = "false";
            }
          }
        } else if (this.itemClicked.types === 'guns' && model !== 'coming_soon') {
          for(let i=0; i<itemsJson.gun.length; i++) {
            if(itemsJson.gun[i].id === id) {
              itemsJson.gun[i].selected = "true";
              if(itemsJson.gun[i].ammo > 0) {
                this.$store.state.Hero.ammo = itemsJson.gun[i].ammo;
                this.$store.state.Hero.maxAmmo = itemsJson.gun[i].ammo;
              }
            } else {
              itemsJson.gun[i].selected = "false";
            }
          }
        } else if (this.itemClicked.types === 'swords' && model !== 'coming_soon') {
          for(let i=0; i<itemsJson.sword.length; i++) {
            if(itemsJson.sword[i].id === id) {
              itemsJson.sword[i].selected = "true";
            } else {
              itemsJson.sword[i].selected = "false";
            }
          }
        } else if (this.itemClicked.types === 'chestplates' && model !== 'coming_soon') {
          for(let i=0; i<itemsJson.chestplate.length; i++) {
            if(itemsJson.chestplate[i].id === id) {
              itemsJson.chestplate[i].selected = "true";
            } else {
              itemsJson.chestplate[i].selected = "false";
            }
          }
        } else if (this.itemClicked.types === 'legplates' && model !== 'coming_soon') {
          for(let i=0; i<itemsJson.legplate.length; i++) {
            if(itemsJson.legplate[i].id === id) {
              itemsJson.legplate[i].selected = "true";
            } else {
              itemsJson.legplate[i].selected = "false";
            }
          }
        }
    }
  },
  computed: {
    currentStr() {
      if (this.weaponSlotSelected === 'knife') {
        return this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
          this.$store.state.knife.str
      } else if (this.weaponSlotSelected === 'sword') {
        return this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
          this.$store.state.sword.str
      } else if (this.weaponSlotSelected === 'gun') {
        return this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
          this.$store.state.gun.str
      }
      return 0
    },
    maxStr() {
      return this.$store.state.stats.str
    },
    calculateStrBar() {
      return {
        width: (this.currentStr/this.maxStr)*100 + '%'
      }
    },
    currentDex() {
      if (this.weaponSlotSelected === 'knife') {
        return this.$store.state.Hero.dex + this.$store.state.chestplate.dex + this.$store.state.legplate.dex +
          this.$store.state.knife.dex
      } else if (this.weaponSlotSelected === 'sword') {
        return this.$store.state.Hero.dex + this.$store.state.chestplate.dex + this.$store.state.legplate.dex +
          this.$store.state.sword.dex
      } else if (this.weaponSlotSelected === 'gun') {
        return this.$store.state.Hero.dex + this.$store.state.chestplate.dex + this.$store.state.legplate.dex +
          this.$store.state.gun.dex
      }
      return 0
    },
    maxDex() {
      return this.$store.state.stats.dex
    },
    calculateDexBar() {
      return {
        width: (this.currentDex/this.maxDex)*100 + '%'
      }
    },
    currentCon() {
      if (this.weaponSlotSelected === 'knife') {
        return this.$store.state.Hero.con + this.$store.state.chestplate.con + this.$store.state.legplate.con +
          this.$store.state.knife.con
      } else if (this.weaponSlotSelected === 'sword') {
        return this.$store.state.Hero.con + this.$store.state.chestplate.con + this.$store.state.legplate.con +
          this.$store.state.sword.con
      } else if (this.weaponSlotSelected === 'gun') {
        return this.$store.state.Hero.con + this.$store.state.chestplate.con + this.$store.state.legplate.con +
          this.$store.state.gun.con
      }
      return 0
    },
    maxCon() {
      return this.$store.state.stats.con
    },
    calculateConBar() {
      return {
        width: (this.currentCon/this.maxCon)*100 + '%'
      }
    },
    itemsToBeRenderd() {
        if (this.itemsTypeToBeRendered === 'knives') {
            return this.knivesAvailable
        } else if (this.itemsTypeToBeRendered === 'guns') {
            return this.gunsAvailable
        } else if (this.itemsTypeToBeRendered === 'swords') {
            return this.swordsAvailable
        } else if (this.itemsTypeToBeRendered === 'chestplates') {
            return this.chestplatesAvailable
        } else if (this.itemsTypeToBeRendered === 'legplates') {
            return this.legplatesAvailable
        }
        return null
    },
    showArmorUpItems() {
      return this.showArmorUpPanel;
    },
    asyncMiniMap: function() {
      return {
        transform:
          "translate(" + 14 + "%, " + 26 + "%) scale(4)"
      };
    },
    showSelectedChestplate() {
        return {
          'background-image': 'url("https://raw.githubusercontent.com/TheLegendWeeb/WARHAMMER-40K-Defiance/primary/src/assets/img/' + this.$store.state.inventorySelectedItems.chestplate + '.png")'
        };
    },
    showSelectedLegplate() {
        return {
          'background-image': 'url("https://raw.githubusercontent.com/TheLegendWeeb/WARHAMMER-40K-Defiance/primary/src/assets/img/' + this.$store.state.inventorySelectedItems.legplate + '.png")'
        };
    },
    showSelectedKnife() {
        return {
          'background-image': 'url("https://raw.githubusercontent.com/TheLegendWeeb/WARHAMMER-40K-Defiance/primary/src/assets/img/' + this.$store.state.inventorySelectedItems.knife + '.png")'
        };
    },
    showSelectedSword() {
        return {
          'background-image': 'url("https://raw.githubusercontent.com/TheLegendWeeb/WARHAMMER-40K-Defiance/primary/src/assets/img/' + this.$store.state.inventorySelectedItems.sword + '.png")'
        };
    },
    showSelectedGun() {
        return {
          'background-image': 'url("https://raw.githubusercontent.com/TheLegendWeeb/WARHAMMER-40K-Defiance/primary/src/assets/img/' + this.$store.state.inventorySelectedItems.gun + '.png")'
        };
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Permanent+Marker|Lacquer|Bangers|Righteous&display=swap");

.inventoryHolder {
  background-image: url("https://static.vecteezy.com/system/resources/previews/000/130/901/non_2x/old-paper-vector-texture-background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: rgb(133, 84, 84);
  height: 97vh;
  width: 72.5vw;
  border-color: rgb(184, 184, 184);
  border-width: 4px;
  border-style: solid;
  margin-left: 26vw;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.37);
}

@media (max-width: 1000px) {
  .inventoryHolder {
    border-width: 2px;
  }
}

.inventory {
  height: 100%;
  width: 65%;
  float: left;
}

.infoPanel {
  height: 100%;
  width: 35%;
  float: right;
}

.stats {
  height: 60%;
  width: 100%;
}

.statsH1 {
  font-size: 3em;
  float: left;
}

.miniMapText {
  float: left;
  position: relative;
  top:55%;
  left:50%;
  transform:translate(-50%,-55%);
  font-family: "Bangers", cursive;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.74);
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: rgb(51, 51, 51);
  text-shadow: 0 0 20px rgb(75, 27, 0);
  font-size:2.5em;
  margin:0;
}

.mapHolder {
  height: 39.6%;
  width: 99%;
  border-top: 4px solid rgb(184, 184, 184);
  border-left: 4px solid rgb(184, 184, 184);
  display: inline-block; /* change the default display type to inline-block */
  overflow: hidden;
}

.mapHolder:hover {
  cursor: pointer;
}

.miniMap {
  height: 100%;
  width: 100%;
  background-image: url("./../../../assets/img/map.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float: left;
}

.currentUserLocation {
  height: 35px;
  width: 35px;
  background-color: #42a500ce;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #70d12185;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.titleHolder {
  width: 100%;
  height: 10%;
  padding: 10px;
  text-align: center;
  font-family: "Bangers", cursive;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.74);
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: rgb(51, 51, 51);
  text-shadow: 0 0 20px rgb(75, 27, 0);
  margin-bottom: 60px;
}

@media (max-width: 1000px) {
  .titleHolder {
    width: 100%;
    height: 10%;
    padding: 5px;
    text-align: center;
    font-family: "Bangers", cursive;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.74);
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: rgb(51, 51, 51);
    text-shadow: 0 0 10px rgb(75, 27, 0);
    font-size: 8px;
  }
}

.titlePBItem {
  float: left;
  font-size: 24px;
  position: relative;
  top: 50%;
  left: 10%;
  transform: translate(-10%, -50%);
  color: rgb(136, 50, 1);
  font-family: "Permanent Marker", cursive;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: rgb(75, 27, 0);
  text-shadow: 0 0 20px rgb(75, 27, 0);
}

.pbHolder {
  width: 94%;
  height: 10%;
  padding: 10px;
}

.progressBarOutlineStr {
  width: 70%;
  height: 75%;
  background-color: rgba(105, 42, 0, 0.329);
  position: relative;
  top: 0px;
  float: right;
  border: 3px solid rgb(90, 34, 1);
  padding: 0.1px;
  outline: solid 3px rgb(75, 27, 0);
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.progressBarStr {
  background-color: rgb(105, 42, 0);
  height: 100%;
  width: 90%;
}

.progressBarOutlineDex {
  width: 70%;
  height: 75%;
  background-color: rgba(105, 42, 0, 0.329);
  position: relative;
  top: 0px;
  float: right;
  border: 3px solid rgb(90, 34, 1);
  padding: 0.1px;
  outline: solid 3px rgb(75, 27, 0);
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.progressBarDex {
  background-color: rgb(105, 42, 0);
  height: 100%;
  width: 90%;
}

.progressBarOutlineCon {
  width: 70%;
  height: 75%;
  background-color: rgba(105, 42, 0, 0.329);
  position: relative;
  top: 0px;
  float: right;
  border: 3px solid rgb(90, 34, 1);
  padding: 0.2px;
  outline: solid 3px rgb(75, 27, 0);
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.progressBarCon {
  background-color: rgb(105, 42, 0);
  height: 100%;
  width: 90%;
}

.map {
  height: 40%;
  width: 100%;
  background-color: rgb(43, 255, 0);
}

.inventory-left {
  height: 100%;
  width: 55%;
  float: left;
}

.inventory-changer {
  height: 100%;
  width: 45%;
  float: right;
}

.inventoryChgHolder {
  width: 90%;
  height: 90%;
  position: relative;
  background-color: rgb(75, 27, 0);
  top: 50%;
  transform: translate(0%, -50%);
  border: 6px solid rgb(90, 34, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .inventoryChgHolder {
    width: 90%;
    height: 90%;
    position: relative;
    background-color: rgb(75, 27, 0);
    top: 50%;
    transform: translate(0%, -50%);
    border: 3px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(90, 34, 1, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.itemChangerTitle {
  text-align: center;
  padding-top: 5%;
  color: rgba(255, 255, 255, 0.74);
  font-size: 26px;
  text-transform: uppercase;
  font-family: "Righteous", cursive;
}

@media (max-width: 1000px) {
  .itemChangerTitle {
    text-align: center;
    padding-top: 5%;
    color: rgba(255, 255, 255, 0.74);
    font-size: 14px;
    text-transform: uppercase;
    font-family: "Righteous", cursive;
  }
}

.item-decoration {
  width: 80%;
  height: 0%;
  background-color: rgb(75, 27, 0);
  border: 3px solid rgb(90, 34, 1);
  border-radius: 5px;
  position: relative;
  left: 50%;
  top: 1%;
  transform: translate(-50%, 50%);
}

@media (max-width: 1000px) {
  .item-decoration {
    width: 80%;
    height: 0%;
    background-color: rgb(75, 27, 0);
    border: 1.5px solid rgb(90, 34, 1);
    border-radius: 5px;
    position: relative;
    left: 50%;
    top: 1%;
    transform: translate(-50%, 50%);
  }
}

.armorHolder {
  width: 100%;
  height: 52%;
}

.armor {
  width: 80%;
  height: 80%;
  position: relative;
  background-color: rgb(75, 27, 0);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 6px solid rgb(90, 34, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .armor {
    width: 80%;
    height: 80%;
    position: relative;
    background-color: rgb(75, 27, 0);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 3px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(90, 34, 1, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.armor:hover {
  cursor: pointer;
}

.armorAction {
  width: 100%;
  height: 100%;
  background-color: rgba(2, 2, 2, 0.432);
}

.armorUpgrade {
  width: 30%;
  height: 30%;
  background-color: rgb(75, 27, 0);
  border: 6px solid rgb(90, 34, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .armorUpgrade {
    width: 30%;
    height: 30%;
    background-color: rgb(75, 27, 0);
    border: 3px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(90, 34, 1, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.armorUpgrade:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.493);
  border: 6px solid rgba(255, 255, 255, 0.199);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .armorUpgrade:hover {
    background-color: rgba(255, 255, 255, 0.493);
    border: 3px solid rgba(255, 255, 255, 0.199);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.item1 {
  position: relative;
  top: 50%;
  left: 20%;
  transform: translate(-20%, -50%);
  float: left;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}

.item2 {
  position: relative;
  top: 50%;
  right: 20%;
  float: right;
  transform: translate(20%, -50%);
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
}

.weapons {
  width: 100%;
  height: 48%;
}

.firstRow {
  width: 100%;
  height: 50%;
}

.secondRow {
  width: 100%;
  height: 50%;
}

.weaponSlot {
  width: 16vh;
  height: 16vh;
  background-color: rgb(75, 27, 0);
  border: 6px solid rgb(90, 34, 1);
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .weaponSlot {
    width: 16vh;
    height: 16vh;
    background-color: rgb(75, 27, 0);
    border: 3px solid rgb(90, 34, 1);
    box-shadow: 0 2px 4px 0 rgba(90, 34, 1, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.weaponSlot:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.493);
  border: 6px solid rgba(255, 255, 255, 0.199);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .weaponSlot:hover {
    background-color: rgba(255, 255, 255, 0.493);
    border: 3px solid rgba(255, 255, 255, 0.199);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}


.leftSlot {
  position: relative;
  top: 50%;
  left: 20%;
  transform: translate(-30%, -50%);
  float: left;
}

.middleSlot {
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.rightSlot {
  position: relative;
  top: 50%;
  right: 20%;
  float: right;
  transform: translate(30%, -50%);
}

.knife {
  width: 100%;
  height: 100%;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transform: rotate(30deg);
  -moz-transform: rotate(30deg);
}

.sword {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transform: rotate(310deg);
  -moz-transform: rotate(310deg);
}

.gun {
  width: 100%;
  height: 100%;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
}

.armorItem {
  width: 100%;
  height: 100%;
  background-image: url("./../../../assets/img/inventory_armor_whole.png");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
}

.itemsChanger {
  width: 95%;
  height: 83%;
  position: relative;
  top:25%;
  left:50%;
  transform:translate(-50%,-25%);
}

@media (max-width: 1000px) {
  .itemsChanger {
    width: 95%;
    height: 83%;
    position: relative;
    top:21%;
    left:50%;
    transform:translate(-50%,-25%);
  }
}

.templateItem {
    height: 40px;
    width: 90%;
    background-color: rgb(75, 27, 0);
    border: 6px solid rgb(90, 34, 1);
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    top:0%;
    left:50%;
    transform:translate(-50%,0%);
    margin-top: 10px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
}

@media (max-width: 1000px) {
  .templateItem {
    height: 25px;
    width: 90%;
    background-color: rgb(75, 27, 0);
    border: 3px solid rgb(90, 34, 1);
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(90, 34, 1, 0.671),
        0 3px 10px 0 rgba(0, 0, 0, 0.19);
    position: relative;
    top:0%;
    left:50%;
    transform:translate(-50%,0%);
    margin-top: 10px;
    text-align: center;
    vertical-align: middle;
  }
}

.templateItem:hover {
  height: 40px;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.493);
  border: 6px solid rgba(255, 255, 255, 0.199);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: 1000px) {
  .templateItem:hover {
    height: 25px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.226);
    border: 3px solid rgba(255, 255, 255, 0.199);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.671),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}

.itemHolderView {
    height: 90%;
    width: 90%;
    position: relative;
    top:70%;
    left:50%;
    transform:translate(-50%,-50%);
    font-family: "Righteous", cursive;
    color: rgba(255, 255, 255, 0.74);
    text-transform: uppercase;
}

@media (max-width: 1000px) {
  .itemHolderView {
    height: 90%;
    width: 90%;
    position: relative;
    top:70%;
    left:50%;
    transform:translate(-50%,-50%);
    font-family: "Righteous", cursive;
    color: rgba(255, 255, 255, 0.74);
    text-transform: uppercase;
    font-size: 10px;
  }
}

.itemHolderViewSelected {
    height: 90%;
    width: 90%;
    position: relative;
    top:70%;
    left:50%;
    transform:translate(-50%,-50%);
    font-family: "Righteous", cursive;
    color: rgba(209, 230, 19, 0.712);
    text-transform: uppercase;
}

@media (max-width: 1000px) {
  .itemHolderViewSelected {
    height: 90%;
    width: 90%;
    position: relative;
    top:70%;
    left:50%;
    transform:translate(-50%,-50%);
    font-family: "Righteous", cursive;
    color: rgba(127, 238, 214, 0.884);
    text-transform: uppercase;
    font-size: 10px;
  }
}

.disable-selection {
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}

</style>
