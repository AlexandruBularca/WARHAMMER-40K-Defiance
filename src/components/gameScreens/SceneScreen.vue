<template>
    <div>
        <Inventory v-show="gameScreen == 'inventoryScreen'"/>
    </div>
</template>

<script>
import Inventory from './viewTypes/Inventory.vue'
export default {
    name: 'SceneScreen', 
    components: {
        Inventory,
    },
    computed: {
        gameScreen() {
            //return this.$store.state.gameScreen
            return 'inventoryScreen';
        }
    }
}
</script>

<style scoped>

</style>
