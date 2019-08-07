<template>
    <div class="background">

    <div class="leftItemsHolder">
        <StatusScreen/>
        <TerminalScreen/>
    </div>
    <SceneScreen/>

    </div>
</template>

<script>
import SceneScreen from './gameScreens/SceneScreen.vue'
import StatusScreen from './gameScreens/StatusScreen.vue'
import TerminalScreen from './gameScreens/TerminalScreen.vue'

export default {
    name: 'PlayGame',
    components: {
        SceneScreen,
        StatusScreen,
        TerminalScreen
    },
    props: {
        msg: String
    },
    data() {
        return {
            percent: 0
        }
    },
    

    
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

.leftItemsHolder {
    float: left;
}

.statusWindow {
    position: relative;
    height: 20vh;
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
