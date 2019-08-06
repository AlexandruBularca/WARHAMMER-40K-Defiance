<template>
    <div class="playWindow">
        <disconect v-show="curr_screen == 'disconect'"/>
    </div>
</template>

<script>
import disconect from "./scene_screens/disconect.vue"
export default {
    name: 'SceneScreen',
    components:{
        disconect
    },
    computed:{
        curr_screen(){
            return this.$store.state.SceneScreen_curr
        }
    }
}
</script>

<style scoped>

.playWindow {
    /* background: linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%);  */
    height: 97vh;
    width: 72.5vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-left: 26vw;
}

</style>
