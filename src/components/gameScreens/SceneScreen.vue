<template>
    <div class="playWindow">
        <div class="groundLayer"/>

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

.playWindow {
    background: linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%); 
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

.groundLayer {
    height: 69.1vh;
    width: 72.5vw;
    background-image: url("skyline.png");
    background-repeat: repeat-x;
    background-position: 
        0 100%;
    background-size:
        500px;
    animation: 50s para infinite linear;
}

@keyframes para {
	100% {
        background-position:
			500px 100%;
	}
}
  
.topBar {
    background-color: rgb(36, 36, 36);
    height: 6vh;
    width: 72.5vw;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.pw-tabs{
    width:100%;
    padding:0;
    border-spacing: 0;
    height:6vh;
    table-layout: fixed;
    background-color: rgb(36, 36, 36);
}

.pw-tab{
    margin:0;
    padding:0;
    border-spacing: 0;
    text-align: center;
    font-size: 0px;
}

</style>
