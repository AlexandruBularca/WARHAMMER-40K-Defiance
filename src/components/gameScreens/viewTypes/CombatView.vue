<template>
    <div class="combatHolder">
        <div class="inner">
            <div class="AvatarHeroCombat" >
                <img class="SizeHero"  src="./../../../assets/img/inqqq.jpg">
            </div>
            <div class="AvatarEnemyCombat">
                <img class="SizeEnemy"  src="./../../../assets/img/ChaosCultistPlaceholder.jpg">
            </div>
        <div class="buttonsblock">
            <button class=knifeAttack v-onclick="knifeAttack">Knife Attack</button>         
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Combat'  
}
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
</style>
