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




</style>
