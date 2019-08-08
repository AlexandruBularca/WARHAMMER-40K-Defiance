<template>
    <div class="combatHolder disable-selection">
        <div class="enemyStatsHolder" v-bind:style="touchable(initialCombatMessage)">
            <div class="firstRowEnemyStatus">
                <div class="holderEnemyStatus col1" v-if="isAvailableEnemy5">
                    <div id="enemy1" class="enemyStatusStyle enemySelected" tabindex="1" v-on:click="onEnemeySelected('enemy1')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy1.hp/this.enemies.enemy1.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat1" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
                <div class="holderEnemyStatus col2" v-if="isAvailableEnemy3">
                    <div id="enemy2" class="enemyStatusStyle" tabindex="1" v-on:click="onEnemeySelected('enemy2')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy2.hp/this.enemies.enemy2.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat2" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
                <div class="holderEnemyStatus col3" v-if="isAvailableEnemy1">
                    <div id="enemy3" class="enemyStatusStyle" tabindex="1" v-on:click="onEnemeySelected('enemy3')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy3.hp/this.enemies.enemy3.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat3" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondRowEnemyStatus">
                <div class="holderEnemyStatus col1" v-if="isAvailableEnemy6">
                    <div id="enemy4" class="enemyStatusStyle" tabindex="1" v-on:click="onEnemeySelected('enemy4')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy4.hp/this.enemies.enemy4.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat4" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
                <div class="holderEnemyStatus col2" v-if="isAvailableEnemy4">
                    <div id="enemy5" class="enemyStatusStyle" tabindex="1" v-on:click="onEnemeySelected('enemy5')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy5.hp/this.enemies.enemy5.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat5" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
                <div class="holderEnemyStatus col3" v-if="isAvailableEnemy2">
                    <div id="enemy6" class="enemyStatusStyle" tabindex="1" v-on:click="onEnemeySelected('enemy6')">
                        <div class="progressBarOutlineStr">
                            <div class="progressBarStr" v-bind:style="{ width: (this.enemies.enemy6.hp/this.enemies.enemy6.max_hp)*100 + '%' }" />
                        </div>
                        <div class="holderAvatarStatusEnemy">
                            <img class="keepCharacterRatio statusEnemyImage" id="enemyImgStat6" src="./../../../assets/img/enemy_holder_default_status.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="charactersHolder">
            <div class="myCharacterHolder">
                <div class="myCharacterAvatar" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/character_avatar.png">
                </div>
            </div>
            <div class="enemiesCharacterHolder">
                <div id="enemy6Avatar" class="enemyCharacterAvatar row1 enemy1" v-if="isAvailableEnemy1">
                    <img id="enemySrc6" class="keepCharacterRatio">
                </div>
                <div id="enemy5Avatar" class="enemyCharacterAvatar row1 enemy2" v-if="isAvailableEnemy2">
                    <img id="enemySrc5" class="keepCharacterRatio">
                </div>
                <div id="enemy4Avatar" class="enemyCharacterAvatar row1 enemy3" v-if="isAvailableEnemy3">
                    <img id="enemySrc4" class="keepCharacterRatio">
                </div>
                <div id="enemy3Avatar" class="enemyCharacterAvatar enemy4" v-if="isAvailableEnemy4">
                    <img id="enemySrc3" class="keepCharacterRatio">
                </div>
                <div id="enemy2Avatar" class="enemyCharacterAvatar enemy5" v-if="isAvailableEnemy5">
                    <img id="enemySrc2" class="keepCharacterRatio">
                </div>
                <div id="enemy1Avatar" class="enemyCharacterAvatar enemy6" v-if="isAvailableEnemy6">
                    <img id="enemySrc1" class="enemySelectedAvatar keepCharacterRatio">
                </div>
            </div>
        </div>
        <div class="buttonsHolder" v-bind:style="touchable(initialCombatMessage)">
            <div class="firstRowButtons">
                <div class="button btnCol1 knifeBtn" v-on:click="heroKnifeAttack()">
                    <div class="buttonText">
                        Knife Attack
                    </div>
                </div>
                <div class="button btnCol2 swordBtn" v-on:click="heroSwordAttack()">
                    <div class="buttonText">
                        Sword Attack
                    </div>
                </div>
            </div>
            <div class="secondRowButtons">
                <div class="button btnCol1 gunBtn" v-on:click="heroGunAttack()">
                    <div class="buttonText">
                        Gun Attack
                    </div>
                </div>
                <div class="button btnCol2 retreatBtn" v-on:click="actionRetreat()">
                    <div class="buttonText">
                        Retreat!
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import enemy_list from "./../../../assets/json/enemy_list.json"
import mapLocationsJson from "./../../../assets/json/map_locations.json";
export default {
    name: 'Combat',
    data() {
        return {
            messageBattleWon: "It looks like you won this battle!\n\nLet's return home and gear up with new items from the inventory!\n\nPress the inquisitor picture from the top-left of the screen in order to access the inventory!",
            ENEMY_LIST:enemy_list,
            selected_enemy:"enemy1",
            Combat: {
                enemy1: true,
                enemy2: true,
                enemy3: true,
                enemy4: true,
                enemy5: true,
                enemy6: true,
            },
            enemies:{
                enemy1:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
                enemy2:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
                enemy3:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
                enemy4:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
                enemy5:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
                enemy6:{
                    max_hp:null,
                    hp:null,
                    attack:null
                },
            }
        };
    },
    methods: {
        touchable(shouldShow) {
            if (shouldShow !== 2) {
              return {
                'opacity': '0.4',
                'pointer-events': 'none',
              }
            } else {
              return {
                'opacity': '1',
              }
            }
        },
        selectAvatarEnemy(enemyNo) {
            var elEnemySelectedAvatar = document.getElementById('enemySrc' + enemyNo);
            if(elEnemySelectedAvatar) {
                elEnemySelectedAvatar.className = 'enemySelectedAvatar keepCharacterRatio';
            }
        },
        enemyKilled() {
            this.enemies[this.selected_enemy].hp = 0;
            var i = 0;
            var found = false;
            var elDeadEnemy = document.getElementById(this.selected_enemy);
            if(elDeadEnemy) {
                elDeadEnemy.className = 'enemyStatusStyle';
            }
            var elDeadEnemyAvatar = document.getElementById(this.selected_enemy + 'Avatar');
            if(elDeadEnemyAvatar) {
                elDeadEnemyAvatar.className = 'hideEnemyAvatar enemyCharacterAvatar';
            }

            while(i<mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies.length && !found) {
                var enemy_change="enemy"+(parseInt(i)+1);

                if(this.enemies[enemy_change].hp !== 0) {
                    found = true;

                    this.selected_enemy = enemy_change;

                    var el = document.getElementById(enemy_change);
                    if(el) {
                        el.className = 'enemyStatusStyle enemySelected';
                    }
                    this.selectAvatarEnemy(parseInt(i)+1);

                } else {
                    i++;
                }
            }

            if(i === mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies.length && this.$store.state.tutorialMessages.initialBattleWonMessage === 0) {
                this.$store.state.tutorialMessages.initialBattleWonMessage = 1;
                this.$store.state.terminal_send_show = this.messageBattleWon;
                this.$store.state.tutorialBattleWon = true;
                mapLocationsJson.locations[2].available = true;
                mapLocationsJson.locations[4].available = true;
                mapLocationsJson.locations[8].available = true;
            }

        },
        actionRetreat() {
            this.$store.commit('showMap')
        },
        onEnemeySelected(newEnemySelected) {

            var enemyNoOld = this.selected_enemy[this.selected_enemy.length-1];
            var enemyNoNew = newEnemySelected[newEnemySelected.length-1];

            this.selected_enemy = 'enemy' + enemyNoNew;

            var elEnemySelected = document.getElementById('enemy' + enemyNoOld);
            if(elEnemySelected) {
                elEnemySelected.className = 'enemyStatusStyle';
            }
            var elEnemySelectedAvatar = document.getElementById('enemySrc' + enemyNoOld);
            if(elEnemySelectedAvatar) {
                elEnemySelectedAvatar.className = 'keepCharacterRatio';
            }

            elEnemySelected = document.getElementById('enemy' + enemyNoNew);
            if(elEnemySelected) {
                elEnemySelected.className = 'enemyStatusStyle enemySelected';
            }
            elEnemySelectedAvatar = document.getElementById('enemySrc' + enemyNoNew);
            if(elEnemySelectedAvatar) {
                elEnemySelectedAvatar.className = 'enemySelectedAvatar keepCharacterRatio';
            }

        },        
        heroKnifeAttack() {
            var atkHero = this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
                this.$store.state.knife.str;
            this.enemies[this.selected_enemy].hp = this.enemies[this.selected_enemy].hp - atkHero;
            if(this.enemies[this.selected_enemy].hp < 0) {
                this.enemyKilled();
            }
         },
      
         heroSwordAttack() {
            var atkHero = this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
                this.$store.state.sword.str;
            this.enemies[this.selected_enemy].hp = this.enemies[this.selected_enemy].hp - atkHero;
            if(this.enemies[this.selected_enemy].hp < 0) {
                this.enemyKilled();
            }
         },

         heroGunAttack() {
            var atkHero = this.$store.state.Hero.str + this.$store.state.chestplate.str + this.$store.state.legplate.str +
                this.$store.state.gun.str;
            this.enemies[this.selected_enemy].hp = this.enemies[this.selected_enemy].hp - atkHero;
            if(this.enemies[this.selected_enemy].hp < 0) {
                this.enemyKilled();
            }
          },

         enemy1Attackhero () {
           this.$store.state.Hero.hp = this.$store.state.Hero.hp -this.enemies[this.selected_enemy].attack;
          },

          get_curr_enemies(){
            for (var enemy in mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies){
                var enemy_change="enemy"+(parseInt(enemy)+1);
                this.enemies[enemy_change].max_hp = enemy_list[mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies[enemy]].max_hp;
                this.enemies[enemy_change].hp = enemy_list[mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies[enemy]].max_hp;
                this.enemies[enemy_change].attack = enemy_list[mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies[enemy]].attack_power;
                var elAddImg = document.getElementById("enemySrc"+(parseInt(enemy)+1));
                elAddImg.src = enemy_list[mapLocationsJson.locations[this.$store.state.mapLocationClicked].mapEnemies[enemy]].sprite;
            }
          },
        change_enemy(){
            this.selected_enemy="enemy2";
        }
    },
    computed: {
        initialCombatMessage() {
            return this.$store.state.tutorialMessages.initialCombatViewMessage
        },
        isAvailableEnemy1() {
            return this.Combat.enemy1;
        },
        isAvailableEnemy2() {
            return this.Combat.enemy2;
        },
        isAvailableEnemy3() {
            return this.Combat.enemy3;
        },
        isAvailableEnemy4() {
            return this.Combat.enemy4;
        },
        isAvailableEnemy5() {
            return this.Combat.enemy5;
        },
        isAvailableEnemy6() {
            return this.Combat.enemy6;
        },
    },
    mounted: function () {
        this.get_curr_enemies();
        this.$nextTick(function () {
            if(this.$store.state.tutorialMessages.initialCombatViewMessage === 0) {
                this.$store.state.tutorialMessages.initialCombatViewMessage = 1;
                this.$store.state.terminal_send_show = "Inquisitor: The condition of the planet is even worse than I feared. According to the logs the local PDF divisions have been fully killed three days ago - surprising they lasted that long.\n\nCultists: Blood for the Blood! Skulls for the Skull Throne! \n\n Inquisitor: Chaos filth...";
            }
        })
    }
};
</script>

<style scoped>

@import url("https://fonts.googleapis.com/css?family=Righteous&display=swap");

.combatHolder {
    background-image: url("./../../../assets/img/combackground2.jpg");
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.247);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

.enemyStatsHolder {
    width: 100%;
    height: 20%;
    position: relative;
}

.holderEnemyStatus {
    width: 30%;
    height: 80%;
    position: relative;
    top: 50%;
    transform: translate(0%, -50%);
    float: left;
}

.enemyStatusStyle {
    width: 90%;
    height: 70%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    outline: 0;
    outline: none;
}

.enemyStatusStyle:hover {
    width: 90%;
    height: 70%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.493);
    border: 6px solid rgba(0, 0, 0, 0.575);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.holderAvatarStatusEnemy {
    width: 15%;
    height: 70%; 
    background-color: rgba(255, 255, 255, 0.534);
    position: relative;
    top: 50%;
    right: 5%;
    transform: translate(0%, -50%);
    float: right;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.statusEnemyImage {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.progressBarOutlineStr {
    width: 70%;
    height: 50%;
    background-color: rgba(255, 0, 0, 0.329);
    position: relative;
    top: 50%;
    left: 5%;
    transform: translate(0%, -50%);
    border-radius: 10px;
    float: left;
    border: 2px solid rgb(255, 0, 0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.progressBarStr {
    border-radius: 5px;
    background-color: rgb(255, 0, 0);
    height: 100%;
    width: 100%;
}

.firstRowEnemyStatus {
    width: 100%;
    height: 50%;
}

.secondRowEnemyStatus {
    width: 100%;
    height: 50%;
}

.col1 {
    left: 1%;
}

.col2 {
    left: 5%;
}

.col3 {
    left: 9%;
}

.charactersHolder {
    width: 100%;
    height: 58%;
    position: relative;
}

.myCharacterHolder {
    width: 100%;
    height: 100%;
    float: left;
}

.myCharacterAvatar {
    height: 50%;
    width: 40%;
    position: relative;
    top: 40%;
    left: 5%;
    float: left;
}

.enemyCharacterAvatar {
    height: 30%;
    width: 20%;
    position: relative;
}

.row1 {
    top: -40%;
}

.enemy6 {
    left: 48%;
    top: -115%;
}

.enemy5 {
    left: 62%;  
    top: -85%;
}

.enemy4 {
    left: 77%;
    top: -65%;    
}

.enemy3 {
    left: 55%;    
}

.enemy2 {
    left: 70%;    
}

.enemy1 {
    left: 85%;    
}

.enemiesCharacterHolder {
    width: 100%;
    height: 100%;
}

.buttonsHolder {
    width: 100%;
    height: 22%;
    position: relative;
}

.firstRowButtons {
    width: 100%;
    height: 50%;
}

.secondRowButtons {
    width: 100%;
    height: 50%;
}

.button {
    width: 20%;
    height: 50%;
    border-radius: 20px;
    background-color: rgba(206, 20, 20, 0.493);
    border: 6px solid rgba(107, 3, 3, 0.199);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    font-size: 24px;
}

.knifeBtn {
    color: rgba(255, 255, 255, 0.767);
    background-color: rgba(199, 241, 11, 0.774);
    border: 6px solid rgba(96, 117, 2, 0.199);
    box-shadow: 0 4px 8px 0 rgba(71, 122, 13, 0.671),
        0 6px 20px 0 rgba(139, 223, 43, 0.19);
}

.swordBtn {
    color: rgba(255, 255, 255, 0.767);
    background-color: rgba(199, 241, 11, 0.774);
    border: 6px solid rgba(96, 117, 2, 0.199);
    box-shadow: 0 4px 8px 0 rgba(71, 122, 13, 0.671),
        0 6px 20px 0 rgba(139, 223, 43, 0.19);
}

.gunBtn {
    color: rgba(255, 255, 255, 0.767);
    background-color: rgba(199, 241, 11, 0.774);
    border: 6px solid rgba(96, 117, 2, 0.199);
    box-shadow: 0 4px 8px 0 rgba(71, 122, 13, 0.671),
        0 6px 20px 0 rgba(139, 223, 43, 0.19);
}

.retreatBtn {
    color: rgba(255, 255, 255, 0.767);
    background-color: rgba(241, 11, 11, 0.774);
    border: 6px solid rgba(117, 2, 2, 0.199);
    box-shadow: 0 4px 8px 0 rgba(122, 13, 13, 0.671),
        0 6px 20px 0 rgba(223, 43, 43, 0.19);
}

.button:hover {
    width: 22%;
    height: 55%;
    background-color: rgba(0, 0, 0, 0.144);
    font-size: 26px;
    cursor: pointer;
}

.enemySelected {
    width: 90%;
    height: 70%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.493);
    border: 6px solid rgba(0, 0, 0, 0.575);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.knifeBtn:hover {
    border: 6px solid rgba(127, 231, 9, 0.664);
    color: rgba(127, 231, 9, 0.829);
}

.knifeBtn:active {
    background-color: rgba(127, 231, 9, 0.664);
    color: rgba(255, 255, 255, 0.767);
    position: relative;
    left: 30%;
    transform: translate(-25%, -70%);
}

.swordBtn:hover {
    border: 6px solid rgba(127, 231, 9, 0.664);
    color: rgba(127, 231, 9, 0.829);
}

.swordBtn:active {
    background-color: rgba(127, 231, 9, 0.664);
    color: rgba(255, 255, 255, 0.767);
    position: relative;
    right: 30%;
    transform: translate(25%, -70%);
}

.gunBtn:hover {
    border: 6px solid rgba(127, 231, 9, 0.664);
    color: rgba(127, 231, 9, 0.829);
}

.gunBtn:active {
    background-color: rgba(127, 231, 9, 0.664);
    color: rgba(255, 255, 255, 0.767);
    position: relative;
    left: 30%;
    transform: translate(-25%, -70%);
}

.retreatBtn:hover {
    border: 6px solid rgba(231, 9, 9, 0.664);
    color: rgba(231, 9, 9, 0.829);
}

.retreatBtn:active {
    background-color: rgba(231, 9, 9, 0.664);
    color: rgba(255, 255, 255, 0.767);
    position: relative;
    right: 30%;
    transform: translate(25%, -70%);
}

.buttonText {
    width: 90%;
    height: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -35%);
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    font-family: "Righteous", cursive;
}

.btnCol1 {
    float: left;
    position: relative;
    top: 50%;
    left: 30%;
    transform: translate(-25%, -50%);
}

.btnCol2 {
    float: right;
    position: relative;
    top: 50%;
    right: 30%;
    transform: translate(25%, -50%);
}

.disable-selection {
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}


.knifeAttack
{
    color: yellow;
    height: 9vh;
    width: 15vw;
    float: bottom;
    background-color: rgb(134, 12, 12);
    border: 0; 
    margin: 1vw;
    font-size: 17px;
}

.knifeAttack:hover {
    background-color: gray;
    color:rgb(134, 12, 12);
}
.swordAttack:hover {
    background-color: gray;
    color:rgb(134, 12, 12);
}
.gunAttack:hover {
    background-color: gray;
    color:rgb(134, 12, 12);
}

.keepCharacterRatio {
    max-width:100%;
    max-height:100%;
    width: auto;
    height: auto;
}

.hideEnemyAvatar {
    z-index: -1;
}

.enemySelectedAvatar {
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.38);
    background-color: #00000063;
}


</style>
