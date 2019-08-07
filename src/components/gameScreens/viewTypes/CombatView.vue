<template>
    <div class="combatHolder">
        <div class="inner">
                <progress class="enemyPoz" 
                :value="this.$store.state.enemy1.hp"
                :max="this.$store.state.enemy1.maxhp" >
                </progress>

            <div class="AvatarHeroCombat" >
                <img class="SizeHero"  src="./../../../assets/img/inqqq.jpg">
            </div>

            <div class="AvatarEnemyCombat">
                <img class="SizeEnemy"  src="./../../../assets/img/ChaosCultistPlaceholder.jpg">
            </div>

            <div class="buttonsblock">
                <button class=knifeAttack @click="heroKnifeAttack">Knife Attack</button>
                <button class=swordAttack @click="heroSwordAttack">Sword Attack</button>
                <button class=gunAttack @click="heroGunAttack">Gun Attack</button> 
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
