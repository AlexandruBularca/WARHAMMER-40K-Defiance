<template>
    <div class="combatHolder">
        <div class="buttonsHolder">
            <div class="firstRowButtons">
                <div class="button btnCol1 knifeBtn">
                    <div class="buttonText">
                        Knife Attack
                    </div>
                </div>
                <div class="button btnCol2">
                    <div class="buttonText">
                        Sword Attack
                    </div>
                </div>
            </div>
            <div class="secondRowButtons">
                <div class="button btnCol1">
                    <div class="buttonText">
                        Gun Attack
                    </div>
                </div>
                <div class="button btnCol2">
                    <div class="buttonText">
                        Retreat!
                    </div>
                </div>
            </div>
        </div>
        <!--
        <div class="inner">
                <progress class="enemyPoz" 
                :value="this.$store.state.enemy1.hp"
                :max="this.$store.state.enemy1.maxhp" >
                </progress>

            <div class="AvatarHeroCombat" >
                <img class="SizeHero"  src="./../../../assets/img/character_avatar.png">
            </div>

            <div class="AvatarEnemyCombat">
                <img class="SizeEnemy"  src="./../../../assets/img/ChaosCultistPlaceholder.jpg">
            </div>

            <div class="buttonsblock">
                <button class=knifeAttack @click="heroKnifeAttack">Knife Attack</button>
                <button class=swordAttack @click="heroSwordAttack">Sword Attack</button>
                <button class=gunAttack @click="heroGunAttack">Gun Attack</button> 
            </div>
        </div>-->
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

.combatHolder {
    background-image: url("./../../../assets/img/combackground2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

.buttonsHolder {
    width: 100%;
    height: 30%;
    position: relative;
    top: 70%;
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
    width: 24%;
    height: 50%;
    border-radius: 20px;
    background-color: rgba(206, 20, 20, 0.493);
    border: 6px solid rgba(107, 3, 3, 0.199);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
}

.knifeBtn {
    background-color: rgba(199, 241, 11, 0.774);
    border: 6px solid rgba(96, 117, 2, 0.199);
    box-shadow: 0 4px 8px 0 rgba(71, 122, 13, 0.671),
        0 6px 20px 0 rgba(139, 223, 43, 0.19);
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.493);
  border: 6px solid rgba(255, 255, 255, 0.199);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.671),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.knifeBtn:hover {
    color: rgb(127, 231, 9);
}

.buttonText {
    width: 90%;
    height: 40%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    font-size: 24px;
}

.btnCol1 {
    float: left;
    position: relative;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
}

.btnCol2 {
    float: right;
    position: relative;
    top: 50%;
    right: 25%;
    transform: translate(25%, -50%);
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

.SizeHero {
    height: 100%;
    width: 100%;
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
