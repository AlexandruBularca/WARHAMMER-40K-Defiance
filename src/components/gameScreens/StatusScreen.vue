<template>
    <div class="leftMenu">
        <div class="imgAvatarHolder" v-on:click="inventoryInteraction()">
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
        <!--
        -->
    </div>
</template>

<script>
export default {
    name: 'StatusScreen',
    data () {
        return {
        }
    },
    computed: {
        currentHealth() {
            return this.$store.state.Hero.hp
        },
        maxHealth() {
            return this.$store.state.Hero.con + this.$store.state.chestplate.con + this.$store.state.legplate.con
        },
        calculateHealthBar() {
            return {
                width: (this.currentHealth/this.maxHealth)*100 + '%'
            }
        },

        currentAmmo() {
            return this.$store.state.Hero.ammo
        },
        maxAmmo() {
            return this.$store.state.Hero.maxAmmo
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
            if(this.$store.state.terminalTutorialItem === 3 && this.$store.state.tutorialMessages.initialInventoryMessage === 0) {
                this.$store.state.inventorySelectedItems.knife = this.$store.state.knife.selectedKnifeImg;
                this.$store.state.inventorySelectedItems.gun = this.$store.state.gun.selectedGunImg;
                this.$store.state.inventorySelectedItems.sword = this.$store.state.sword.selectedSwordImg;
                this.$store.state.inventorySelectedItems.chestplate = this.$store.state.chestplate.selectedChestplateImg;
                this.$store.state.inventorySelectedItems.legplate = this.$store.state.legplate.selectedLegplateImg;
                this.$store.commit('inventoryInteraction')
                this.$store.state.tutorialMessages.initialInventoryMessage = 1;
                this.$store.state.terminal_send_show = "On the right side you can see the statistics panel.\n\nIt indicates the overall strength, dexterity and constitution.\n\nYou can choose between the items that you think will help you the most in battle!\nEvery item has his own statistics.";
            } else if(this.$store.state.terminalTutorialItem === 4 && this.$store.state.tutorialMessages.messageNewLocations === 0) {
                this.$store.state.inventorySelectedItems.knife = this.$store.state.knife.selectedKnifeImg;
                this.$store.state.inventorySelectedItems.gun = this.$store.state.gun.selectedGunImg;
                this.$store.state.inventorySelectedItems.sword = this.$store.state.sword.selectedSwordImg;
                this.$store.state.inventorySelectedItems.chestplate = this.$store.state.chestplate.selectedChestplateImg;
                this.$store.state.inventorySelectedItems.legplate = this.$store.state.legplate.selectedLegplateImg;
                this.$store.commit('inventoryInteraction')
                this.$store.state.tutorialMessages.messageNewLocations = 1;
                this.$store.state.terminal_send_show = "It looks like you have unlocked new locations!\nYou can now choose the location where you want to fight!\n\nKeep in mind that the green locations are unlocked and the red ones will be unlocked while you keep progressing.";
            } else if (this.$store.state.terminalTutorialItem > 4) {
                this.$store.state.inventorySelectedItems.knife = this.$store.state.knife.selectedKnifeImg;
                this.$store.state.inventorySelectedItems.gun = this.$store.state.gun.selectedGunImg;
                this.$store.state.inventorySelectedItems.sword = this.$store.state.sword.selectedSwordImg;
                this.$store.state.inventorySelectedItems.chestplate = this.$store.state.chestplate.selectedChestplateImg;
                this.$store.state.inventorySelectedItems.legplate = this.$store.state.legplate.selectedLegplateImg;
                this.$store.commit('inventoryInteraction');
                this.$store.state.terminal_send_show = "";
                this.$store.state.Hero.ammo = this.$store.state.Hero.maxAmmo;
                this.$store.state.Hero.hp = this.$store.state.Hero.con + this.$store.state.chestplate.con + this.$store.state.legplate.con;
            }
        },
    },
    mounted: function() {
        var thisActivity = this;
        window.setInterval(myCallback, 500);
        function myCallback() {
            if (thisActivity.$store.state.terminalTutorialItem > 4) {
                thisActivity.$store.state.Threat.threat += 0.0005;
            }
        }
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
    margin: 1.2vh;
    float: left;
}

.imgAvatar {
    width: 100%;
    height: 100%;
    background-color: bisque;
    content: url("./../../assets/img/head.jpg");
    transform-origin: 50% 50%;
    background-size:cover;
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

@media (max-width: 1000px) {
    .leftMenu {
        border-width: 2px;
    }
}

</style>
