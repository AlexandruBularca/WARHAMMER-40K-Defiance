<template>
    <div>
        <InventoryView v-if="gameScreen == 'inventoryScreen'"/>
        <CombatView v-else-if="gameScreen == 'combatScreen'"/>
        <MapView v-else-if="gameScreen == 'mapScreen'"/>
    </div>
</template>

<script>
import InventoryView from './viewTypes/InventoryView.vue'
import CombatView from './viewTypes/CombatView.vue'
import MapView from './viewTypes/MapView.vue'

export default {
    name: 'SceneScreen', 
    components: {
        InventoryView,
        CombatView,
        MapView,
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
