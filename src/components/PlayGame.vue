<template>
    <div class="background">

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

        <SceneScreen/>
    </div>
</template>

<script>
import SceneScreen from './gameScreens/SceneScreen.vue'

export default {
    name: 'PlayGame',
    components: {
        SceneScreen
    },
    props: {
        msg: String
    },
    data() {
        return {
            percent: 0
        }
    },
    methods: {
        newThreatLvl(newPercent) {
            this.percent = newPercent
        }
        
    },
    computed: {
        currentHealth() {
            return this.$store.state.currentHeroHealth
        },
        maxHealth() {
            return this.$store.state.currentHeroMaxHealth
        },
        currentThreatLvl() {
            return this.$store.state.currentThreatLevel
        },
        maxThreatLvl() {
            return this.$store.state.maxThreatLevel
        },
        calculateHealthBar() {
            return {
                width: (this.currentHealth/this.maxHealth)*100 + '%'
            }
        },
        calculateThreatLvlBar() {
            return {
                width: (this.currentThreatLvl/this.maxThreatLvl)*100 + '%'
            }
        }
    }

    
}
</script>

<style scoped>

.background {
    background-color: rgb(22, 22, 22);
    height: 98vh;
    width: 99vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    margin: 0;
}

.leftMenu {
    background-color: rgb(44, 44, 44);
    height: 16.2vh;
    width: 25vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    float: left;
}

.statusWindow {
    position: relative;
    height: 20vh;
}

/**
.imgAvatar {
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 50%;
    width: 12vh;
    height: 12vh;
    border: 4px solid rgb(255, 255, 255);
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
    float: left;
    top: -20vh;
}*/

.imgAvatar {
    width: 9vw;
    height: 13.8vh;
    clip-path: polygon(0% 0%, 0% 0%, 100% 0, 70% 100%, 0% 100%);
    background-color: rgb(231, 35, 156);
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
    border-right: 2px solid red;
    left: 9.4vw;
    top: 1.2vh;
    position: relative;
}

.ammoBar {
    width: 15.9vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(97, 43, 27);
    left: 8.5vw;
    top: 2.1vh;
    position: relative;
}

.threatLvl {
    width: 16.8vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(35, 87, 231);
    left: 7.6vw;
    top: 3vh;
    position: relative;
}

.holderUserData {
    height: 20vh;
    width: 47vw;
    top: -5px;
    position: relative;
    margin-left: 13vh;
}

.heroHealth {
    margin-left: 1vh;
}

.heroHealthBarOuter {
    border-radius: 25px;
    border: 3px solid rgb(255, 255, 255);
    height: 14px;
    width: 14vw;
    padding: 1px;
    float: left;
}

.heroHealthBarInner {
    border-radius: 25px;
    height: 100%;
    width: 80%;
    background: rgb(238, 26, 26);
}

.heroHealthBarOuter:hover .healthLvlTxt{
    visibility: visible;
}

.healthLvlTxt {
    position: relative;
    color: rgb(238, 26, 26);
    font-size: 18px;
    top: -5px;
    left: 0.5vw;
    -webkit-text-stroke-width: 0.9px;
   -webkit-text-stroke-color: rgb(255, 255, 255);
   font-weight: 900;
   visibility: hidden;
}

.threatLvlBarOuter {
    border-radius: 25px;
    border: 3px solid rgb(255, 255, 255);
    height: 14px;
    width: 14vw;
    padding: 1px;
    margin-left: 2.7vh;
    margin-top: -10px;
}
.threatLvlBarInner {
    border-radius: 25px;
    height: 100%;
    width: 40%;
    background: rgb(135, 26, 238);
}


</style>
