<template>
    <div>
        <InventoryView v-if="gameScreen == 'inventoryScreen'"/>
        <CombatView v-else-if="gameScreen == 'combatScreen'"/>
        <MapView v-else-if="gameScreen == 'mapScreen'"/>
        <disconect v-else-if="gameScreen=='disconect'"/>
    </div>
</template>

<script>
import InventoryView from './viewTypes/InventoryView.vue'
import CombatView from './viewTypes/CombatView.vue'
import MapView from './viewTypes/MapView.vue'
import disconect from "./viewTypes/disconect.vue"

export default {
    name: 'SceneScreen', 
    components: {
        InventoryView,
        CombatView,
        MapView,
        disconect
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
