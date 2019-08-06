<template>
    <div class="mapHolder">
        <div class="currentUserLocation"/>
    </div>
</template>

<script>
export default {
    name: 'Map',
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

</style>
