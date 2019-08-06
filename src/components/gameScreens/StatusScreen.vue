<template>
        <div class="leftMenu">

            <div class="imgAvatar">
            </div>

            
            <div class="healthBar">

            </div>

            <div class="ammoBar">

            </div>

            <div class="threatLvl">

            </div>

        </div>
</template>

<script>
export default {
    name: 'SceneScreen',
    data () {
        return {

        }
    },   
}
</script>

<style scoped>

.leftMenu {
    background-color: rgb(44, 44, 44);
    height: 17.9vh;
    width: 25vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
}

.imgAvatar {
    width: 9vw;
    height: 15.3vh;
    clip-path: polygon(0% 0%, 0% 0%, 100% 0, 72% 100%, 0% 100%);
    background-color: rgb(231, 35, 156);
    /**border-top: 2px solid rgb(255, 255, 255);
    border-left: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);*/
    margin: 1.2vh;
    float: left;
}

.imgAvatar:hover {
    cursor: pointer;
}

.healthBar {
    width: 15vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(223, 35, 35);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);
    left: 9.4vw;
    top: 1.2vh;
    position: relative;
}

.ammoBar {
    width: 15.9vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(97, 43, 27);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);
    left: 8.5vw;
    top: 2.1vh;
    position: relative;
}

.threatLvl {
    width: 16.8vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(35, 87, 231);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);
    left: 7.6vw;
    top: 3vh;
    position: relative;
}

</style>
