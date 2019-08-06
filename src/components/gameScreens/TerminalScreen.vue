<template>

    <div class="terminalHolder">
            
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
}
</script>

<style scoped>

.terminalHolder {
    background-color: rgb(44, 44, 44);
    height: 76.9vh;
    width: 25vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-top: 1vh;
}

</style>
