<template>
    <div class="mapHolder">
        <div class="currentUserLocation"/>
        <div class="buttonsHolder">
            <button class="btnAttack" v-on:click="showCombatView()">Search</button>
        </div>      
    </div>
</template>

<script>
export default {
    name: 'Map', 
    methods: {
        showCombatView() {
            this.$store.commit('combatMode')
        },
    } 
}
</script>

<style scoped>

.mapHolder {
    background-color: rgb(18, 233, 108);
    background-image: url("./../../../assets/img/map.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

.currentUserLocation {
    height: 20px;
    width: 20px;
    background-color: #e910108f;
    border-radius:50%;
    box-shadow: 0 0 0 5px #fd843e85;
    position:relative;
    top:36.5%;
    left:29.5%;
}

.buttonsHolder {
    height: 10%;
    width: 80%;
    position: relative;
    top: 87%;
    left: 50%;
    transform: translate(-50%,0%);
}   

.btnSearch {
    width: 160px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    left: 50%;
    transform: translate(-50%,0%);
}

.btnSearch:hover {
    background-color: rgb(0, 0, 0);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translate(-50%, -20%);
}   

.btnAttack {
    width: 160px;
    height: 45px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    position: relative;
    left: 50%;
    transform: translate(-50%,0%);
}

.btnAttack:hover {
    background-color: rgb(0, 0, 0);
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
    color: #fff;
    transform: translate(-50%, -20%);
}

</style>
