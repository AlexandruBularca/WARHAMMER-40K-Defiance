<template>
    <div class="combatHolder disable-selection">
        <div class="enemyStatsHolder">
            <div class="firstRowEnemyStatus">
                <div class="holderEnemyStatus col1">
                    <div class="enemyStatusStyle">
                    </div>
                </div>
                <div class="holderEnemyStatus col2">
                    <div class="enemyStatusStyle">
                    </div>
                </div>
                <div class="holderEnemyStatus col3">
                    <div class="enemyStatusStyle">
                    </div>
                </div>
            </div>
            <div class="secondRowEnemyStatus">
                <div class="holderEnemyStatus col1">
                    <div class="enemyStatusStyle">
                    </div>
                </div>
                <div class="holderEnemyStatus col2">
                    <div class="enemyStatusStyle">
                    </div>
                </div>
                <div class="holderEnemyStatus col3">
                    <div class="enemyStatusStyle">
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
                <div class="enemyCharacterAvatar row1 enemy1" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
                <div class="enemyCharacterAvatar row1 enemy2" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
                <div class="enemyCharacterAvatar row1 enemy3" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
                <div class="enemyCharacterAvatar enemy4" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
                <div class="enemyCharacterAvatar enemy5" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
                <div class="enemyCharacterAvatar enemy6" >
                    <img class="keepCharacterRatio"  src="./../../../assets/img/enemy_holder_default.png">
                </div>
            </div>
        </div>
        <div class="buttonsHolder">
            <div class="firstRowButtons">
                <div class="button btnCol1 knifeBtn">
                    <div class="buttonText">
                        Knife Attack
                    </div>
                </div>
                <div class="button btnCol2 swordBtn">
                    <div class="buttonText">
                        Sword Attack
                    </div>
                </div>
            </div>
            <div class="secondRowButtons">
                <div class="button btnCol1 gunBtn">
                    <div class="buttonText">
                        Gun Attack
                    </div>
                </div>
                <div class="button btnCol2 retreatBtn">
                    <div class="buttonText">
                        Retreat!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { METHODS } from 'http';
export default {
    name: 'Combat',
    methods: {
    enemy1Attackhero () {
        this.$store.commit("enemy1Attackhero");
    },
    heroKnifeAttack () {
        this.$store.commit("heroKnifeAttack")
    },
    heroSwordAttack() {
        this.$store.commit("heroSwordAttack")
    },
    heroGunAttack() {
        this.$store.commit("heroGunAttack")
    }
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
    background-color: rgba(61, 4, 167, 0.493);
    border: 6px solid rgba(34, 1, 95, 0.575);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    height: 30%;
    width: 20%;
    position: relative;
    top: 50%;
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
    left: 65%;
    top: -110%;
}

.enemy5 {
    left: 75%;  
    top: -80%;
}

.enemy4 {
    left: 85%;
    top: -60%;    
}

.enemy3 {
    left: 70%;    
}

.enemy2 {
    left: 80%;    
}

.enemy1 {
    left: 90%;    
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

.swordAttack {
    color: yellow;
    height: 9vh;
    width: 15vw;
    float: bottom;
    background-color: rgb(134, 12, 12);
    border: 0; 
    margin: 1vw;
    font-size: 17px;
}

.gunAttack {
    color: yellow;
    height: 9vh;
    width: 15vw;
    float: bottom;
    background-color: rgb(134, 12, 12);
    border: 0; 
    margin: 1vw;
    font-size: 17px;
}

.buttonsblock {
    height: 31vh;
    float:bottom; 
    background-color: aqua;
    visibility: hidden;
}

.inner {
    padding-top: 45%;
}

.AvatarHeroCombat
{
    float: left;
    float: top;
    height: 28%;
    width: 10%;
    position:absolute;
    top:50%;
    left:33%;
    transform:translate(-35%,-50%);

}

.keepCharacterRatio {
    max-width:100%;
    max-height:100%;
    width: auto;
    height: auto;
}

.AvatarEnemyCombat{
    float: right;
    float: top;
    height: 28%;
    width: 10%;
    position:absolute;
    top:50%;
    right:3%;
    transform:translate(-35%,-50%);
}

.SizeEnemy {
    height: 100%;
    width: 100%;
}

.enemyPoz {
    float: right;
    float: top;
    bottom: 70%;
    right: 7%;
    position: absolute;
}
</style>
