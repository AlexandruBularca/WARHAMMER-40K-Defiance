<template>
        <div class="leftMenu">

            <div class="imgAvatarHolder" v-on:click="inventoryInteraction('inventoryScreen')">
                <div class="imgAvatar"/>
            </div>

            <div class="healthBarOutline">
                <div class="healthBar" v-bind:style="calculateHealthBar"/>
            </div>

            <div class="ammoBarOutline">
                <div class="ammoBar" v-bind:style="calculateAmmoBar"/>
            </div>

            <div class="threatLvlOutline">
                <div class="threatLvl" v-bind:style="calculateThreatBar"/>
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
    computed: {
        currentHealth() {
            return this.$store.state.Hero.hp
        },
        maxHealth() {
            return this.$store.state.Hero.maxHp
        },
        calculateHealthBar() {
            return {
                width: (this.currentHealth/this.maxHealth)*100 + '%'
            }
        },

        currentAmmo() {
            return this.$store.state.Ammo.ammo
        },
        maxAmmo() {
            return this.$store.state.Ammo.maxAmmo
        },
        calculateAmmoBar() {
            return {
                width: (this.currentAmmo/this.maxAmmo)*100 + '%'
            }
        },

        currentThreat() {
            return this.$store.state.Threat.threat
        },
        maxThreat() {
            return this.$store.state.Threat.maxThreat
        },
        calculateThreatBar() {
            return {
                width: (this.currentThreat/this.maxThreat)*100 + '%'
            }
        },
    },
    methods: {
        inventoryInteraction() {
            this.$store.commit('inventoryInteraction')
        },
        
    } 
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

.imgAvatarHolder {
    width: 9vw;
    height: 15.3vh;
    background-color: aqua;
    clip-path: polygon(0% 0%, 0% 0%, 100% 0, 72% 100%, 0% 100%);
    /**border-top: 2px solid rgb(255, 255, 255);
    border-left: 2px solid rgb(255, 255, 255);
    border-bottom: 2px solid rgb(255, 255, 255);*/
    margin: 1.2vh;
    float: left;
}

.imgAvatar {
    width: 100%;
    height: 100%;
    background-color: bisque;
    content: url(https://cdn5.f-cdn.com/files/download/40944658/2cc427.jpg);
    transform: translate(-7%, 2%) scale(1.3);
    transform-origin: 50% 50%;
}

.imgAvatar:hover {
    cursor: pointer;
}

.healthBarOutline {
    background-color: rgba(231, 35, 35, 0.384);
    width: 15vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    border-top: 2px solid rgb(255, 2, 2);
    border-right: 2px solid rgb(255, 0, 0);
    border-bottom: 2px solid rgb(255, 0, 0);
    left: 9.4vw;
    top: 1.2vh;
    position: relative;
}

.healthBar {
    background-color: rgb(231, 35, 35);
    height: 4vh;
    width: 100%;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
}

.ammoBarOutline {
    background-color: rgba(165, 102, 8, 0.205);
    width: 15.9vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    border-top: 2px solid rgb(165, 102, 8);
    border-right: 2px solid rgb(165, 102, 8);
    border-bottom: 2px solid rgb(165, 102, 8);
    left: 8.5vw;
    top: 2.1vh;
    position: relative;
}

.ammoBar {
    background-color: rgb(165, 102, 8);
    height: 4vh;
    width: 90%;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
}

.threatLvlOutline {
    background-color: rgba(35, 104, 231, 0.171);
    width: 16.8vw;
    height: 4vh;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
    border-top: 2px solid rgb(35, 104, 231);
    border-right: 2px solid rgb(35, 104, 231);
    border-bottom: 2px solid rgb(35, 104, 231);
    left: 7.6vw;
    top: 3vh;
    position: relative;
}

.threatLvl {
    background-color: rgb(35, 104, 231);
    height: 4vh;
    width: 0%;
    clip-path: polygon(5% 0%, 0% 0%, 100% 0, 100% 100%, 0% 100%);
}

</style>
