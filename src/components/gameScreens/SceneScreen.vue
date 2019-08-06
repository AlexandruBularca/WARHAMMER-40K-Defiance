<template>
    <div>
        <Inventory v-show="gameScreen == 'inventoryScreen'"/>
    </div>
</template>

<script>
import Inventory from './sceneItems/Inventory.vue'
export default {
    name: 'SceneScreen', 
    components: {
        Inventory,
    },
    computed: {
        gameScreen() {
            return this.$store.state.gameScreen
        }
    }
}
</script>

<style scoped>

</style>
