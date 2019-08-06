<template>
    <div class="inventoryHolder">
        <div class="inventory">
            <div class="inventory-left">
                <div class="armor">

                </div>
                <div class="weapons">
                    <div class="firstRow">
                        <div class="weaponSlot leftSlot">
                            <div class="knife"/>
                        </div>
                        <div class="weaponSlot rightSlot">
                            <div class="sword"/>
                        </div>
                    </div>
                    <div class="secondRow">
                        <div class="weaponSlot middleSlot">
                            <div class="gun"/>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Here is the item changer holder-->
            <div class="inventory-changer">
            </div>
        </div>
        <div class="infoPanel">
            <div class="stats">

                <div class="titleHolder">
                    <h1>Stats</h1>
                </div>

                <div class="pbHolder">
                    <div class="title">
                        STR
                    </div>
                    <div class="progressBarOutlineStr">
                        <div class="progressBarStr"/>
                    </div>
                </div>

                <div class="pbHolder">
                    <div class="title">
                        DEX
                    </div>
                    <div class="progressBarOutlineDex">
                        <div class="progressBarDex"/>
                    </div>
                </div>

                <div class="pbHolder">
                    <div class="title">
                        CON
                    </div>
                    <div class="progressBarOutlineCon">
                        <div class="progressBarCon"/>
                    </div>
                </div>

            </div>

            <div class="mapHolder" v-on:click="showMap()">
                <div class="miniMap"/>
                <div class="currentUserLocation"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inventory', 
    methods: {
        showMap() {
            this.$store.commit('showMap')
        },
    } 
}
</script>

<style scoped>

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
    transform: translate(79%, 50%)  scale(4);
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
}

.title {
    float: left;
    font-size: 20px;
    position:relative;
    top:50%;
    left:10%;
    transform: translate(-10%,-50%);
    color: rgb(255, 255, 255);
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
    width: 60%;
    float: left;
}

.inventory-right {
    height: 100%;
    width: 40%;
    float: right;
}

.armor {
    width: 100%;
    height: 56%;
}

.armor:hover {
    cursor: pointer;
}

.weapons {
    width: 100%;
    height: 44%;
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
    transform:translate(-20%,-50%);
    float:left;
}

.middleSlot {
    position: relative;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);    
}

.rightSlot {
    position:relative;
    top:50%;
    right:20%;
    float:right;
    transform:translate(20%,-50%);    
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
