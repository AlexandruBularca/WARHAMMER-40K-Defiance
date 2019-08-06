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
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        centered: false,
        grow: true,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        right: false,
        tabs: 3,
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

.leftMenu {
    background-color: rgb(44, 44, 44);
    height: 18vh;
    width: 25vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
}

.imgAvatar {
    width: 9vw;
    height: 13.8vh;
    clip-path: polygon(0% 0%, 0% 0%, 100% 0, 70% 100%, 0% 100%);
    background-color: rgb(231, 35, 156);
    border: 3px solid rgb(255, 255, 255);
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
    border: 3px solid rgb(255, 255, 255);
    left: 9.4vw;
    top: 1.2vh;
    position: relative;
}

.ammoBar {
    width: 15.9vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(97, 43, 27);
    border: 3px solid rgb(255, 255, 255);
    left: 8.5vw;
    top: 2.1vh;
    position: relative;
}

.threatLvl {
    width: 16.8vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    background-color: rgb(35, 87, 231);
    border: 3px solid rgb(255, 255, 255);
    left: 7.6vw;
    top: 3vh;
    position: relative;
}

</style>
