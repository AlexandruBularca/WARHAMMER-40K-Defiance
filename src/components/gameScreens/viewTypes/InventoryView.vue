<template>
    <div class="inventoryHolder">
        <div class="inventory">
            <div class="inventory-left">
                <div class="armorHolder">
                    <div class="armor" v-on:click="armorClicked()">
                        <div class="armorAction" v-if="showArmorUpItems">
                            <div class="armorUpgrade item1" v-on:click="item1()">
                                
                            </div>
                            <div class="armorUpgrade item2" v-on:click="item2()">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weapons">
                    <div class="firstRow">
                        <div class="weaponSlot leftSlot">
                            <div class="knife" v-on:click="knifeClicked()"/>
                        </div>
                        <div class="weaponSlot rightSlot">
                            <div class="sword" v-on:click="swordClicked()"/>
                        </div>
                    </div>
                    <div class="secondRow">
                        <div class="weaponSlot middleSlot">
                            <div class="gun" v-on:click="gunClicked()"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inventory-changer">
                <div class="inventoryChgHolder">
                    <div class="itemChangerTitle">
                        {{ itemToBeChanged }}
                    </div>
                    <div class="item-decoration"/>
                </div>
            </div>
        </div>
        <div class="infoPanel">
            <div class="stats">

                <div class="titleHolder">
                    <h1>Stats</h1>
                </div>

                <div class="pbHolder">
                    <div class="titlePBItem">
                        STR
                    </div>
                    <div class="progressBarOutlineStr">
                        <div class="progressBarStr"/>
                    </div>
                </div>

                <div class="pbHolder">
                    <div class="titlePBItem">
                        DEX
                    </div>
                    <div class="progressBarOutlineDex">
                        <div class="progressBarDex"/>
                    </div>
                </div>

                <div class="pbHolder">
                    <div class="titlePBItem">
                        CON
                    </div>
                    <div class="progressBarOutlineCon">
                        <div class="progressBarCon"/>
                    </div>
                </div>

            </div>

            <div class="mapHolder" v-on:click="showMap()">
                <div class="miniMap" v-bind:style="asyncMiniMap"/>
                <div class="currentUserLocation"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inventory',
    data() {
        return {
            itemToBeChanged: 'chest-plate',
            showArmorUpPanel: false,
            userPosX: this.$store.state.Map.locationMiniMap.x,
            userPosY: this.$store.state.Map.locationMiniMap.y,
            transX: 78.2,
            transY: 104.1,
        }
    },
    methods: {
        showMap() {
            this.$store.commit('showMap')
        },
        armorClicked() {
            this.showArmorUpPanel = !this.showArmorUpPanel
        },
        knifeClicked() {
            this.itemToBeChanged = 'knife'
        },
        swordClicked() {
            this.itemToBeChanged = 'sword'
        },
        gunClicked() {
            this.itemToBeChanged = 'gun'
        },
        item1() {
            this.itemToBeChanged = 'chest-plate'
        },
        item2() {
            this.itemToBeChanged = 'kneeplates'
        },
    },
    computed: {
        showArmorUpItems() {
            return this.showArmorUpPanel
        },
        asyncMiniMap: function () {
            return {
                transform: 'translate(' + this.userPosX + '%, ' + this.userPosY +'%) scale(4)',
            }
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker|Lacquer|Bangers|Righteous&display=swap');

.inventoryHolder {
    background-color: rgb(49, 49, 49);
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

.inventory {
    height: 100%;
    width: 65%;
    float: left;
}

.infoPanel {
    height: 100%;
    width: 35%;
    float: right;
}

.stats {
    height: 60%;
    width: 100%;
}

.mapHolder {
    height: 39.6%;
    width: 99%;
    border-top: 4px solid rgb(184, 184, 184);
    border-left: 4px solid rgb(184, 184, 184);
    display: inline-block; /* change the default display type to inline-block */
    overflow: hidden;  
}

.mapHolder:hover {
    cursor: pointer;
}

.miniMap {
    height: 100%;
    width: 100%;
    background-image: url("./../../../assets/img/map.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    float: left;
}

.currentUserLocation {
    height: 20px;
    width: 20px;
    background-color: #e910108f;
    border-radius:50%;
    box-shadow: 0 0 0 5px #fd843e85;
    position:relative;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

.titleHolder {
    width: 100%;
    height: 10%;
    padding: 10px;
    text-align:center;
    color: rgb(255, 255, 255);
    font-family: 'Bangers', cursive;
    font-weight: bold;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: black;
}

.titlePBItem {
    float: left;
    font-size: 20px;
    position:relative;
    top:50%;
    left:10%;
    transform: translate(-10%,-50%);
    color: rgb(255, 255, 255);
    font-family: 'Permanent Marker', cursive;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: black;
}

.pbHolder {
    width: 94%;
    height: 10%;
    padding: 10px;
}

.progressBarOutlineStr {
    width: 70%;
    height: 100%;
    background-color: rgba(255, 0, 0, 0.329);
    border: 2px solid rgb(255, 0, 0);
    position:relative;
    top:0px;
    float: right;
}

.progressBarStr {
    background-color: rgb(231, 35, 35);
    height: 100%;
    width: 90%;
}

.progressBarOutlineDex {
    width: 70%;
    height: 100%;
    background-color: rgba(17, 0, 255, 0.329);
    border: 2px solid rgb(17, 0, 255);
    position:relative;
    top:0px;
    float: right;
}

.progressBarDex {
    background-color: rgb(17, 0, 255);
    height: 100%;
    width: 90%;
}

.progressBarOutlineCon {
    width: 70%;
    height: 100%;
    background-color: rgba(204, 0, 255, 0.329);
    border: 2px solid rgb(204, 0, 255);
    position:relative;
    top:0px;
    float: right;
}

.progressBarCon {
    background-color: rgb(204, 0, 255);
    height: 100%;
    width: 90%;
}

.map {
    height: 40%;
    width: 100%;
    background-color: rgb(43, 255, 0);
    
}

.inventory-left {
    height: 100%;
    width: 55%;
    float: left;
}

.inventory-changer {
    height: 100%;
    width: 45%;
    float: right;
}

.inventoryChgHolder {
    width: 90%;
    height: 90%;
    position:relative;
    background-color: rgb(75, 27, 0);
    top:50%;
    transform:translate(0%,-50%);
    border: 6px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.itemChangerTitle {
    text-align: center;
    padding-top: 5%;
    color: rgba(255, 255, 255, 0.74);
    font-size: 26px;
    text-transform: uppercase;
    font-family: 'Righteous', cursive;
}

.item-decoration {
    width: 80%;
    height: 0%;
    background-color: rgb(75, 27, 0);
    border: 3px solid rgb(90, 34, 1);
    border-radius: 5px;
    position: relative;
    left: 50%;
    top: 1%;
    transform:translate(-50%,50%);
}

.armorHolder {
    width: 100%;
    height: 52%;
}

.armor {
    width: 80%;
    height: 80%;
    position:relative;
    background-color: rgb(75, 27, 0);
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border: 6px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.armor:hover {
    cursor: pointer;
}

.armorAction {
    width: 100%;
    height: 100%;
    background-color: rgba(2, 2, 2, 0.432);
}

.armorUpgrade {
    width:30%;
    height:30%;
    background-color: rgb(75, 27, 0);
    border: 6px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.item1 {
    position:relative;
    top:50%;
    left:20%;
    transform:translate(-20%,-50%);
    float:left;
}

.item2 {
    position:relative;
    top:50%;
    right:20%;
    float:right;
    transform:translate(20%,-50%); 
}

.weapons {
    width: 100%;
    height: 48%;
}

.firstRow {
    width: 100%;
    height: 50%;
    
}

.secondRow {
    width: 100%;
    height: 50%;
}

.weaponSlot {
    width: 16vh;
    height: 16vh;
    background-color: rgb(75, 27, 0);
    border: 6px solid rgb(90, 34, 1);
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(90, 34, 1, 0.671), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.weaponSlot:hover {
    cursor: pointer;
}

.leftSlot {
    position:relative;
    top:50%;
    left:20%;
    transform:translate(-30%,-50%);
    float:left;
}

.middleSlot {
    position: relative;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);    
}

.rightSlot {
    position:relative;
    top:50%;
    right:20%;
    float:right;
    transform:translate(30%,-50%);    
}

.knife {
    width: 100%;
    height: 100%;
}

.sword {
    width: 100%;
    height: 100%;
    position: relative;
}

.gun {
    width: 100%;
    height: 100%;
}

</style>
