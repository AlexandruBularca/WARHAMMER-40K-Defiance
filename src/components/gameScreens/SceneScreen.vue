<template>
    <div>
        <InventoryView v-show="gameScreen == 'inventoryScreen'"/>
        <CombatView v-show="gameScreen == 'combatScreen'"/>
    </div>
</template>

<script>
import InventoryView from './viewTypes/InventoryView.vue'
import CombatView from './viewTypes/CombatView.vue'

export default {
    name: 'SceneScreen', 
    components: {
        InventoryView,
        CombatView,
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
