<template>
  <div class="mapHolder">
    <div class="currentUserLocation" v-bind:style="locateTheUser(item.x, item.y, item.available)" v-for="item of mapLocations"
        v-bind:key="item.id"></div>
    <div class="buttonsHolder">
      <button class="btnAttack" v-on:click="showCombatView()">Search</button>
    </div>
  </div>
</template>

<script>
import mapLocationsJson from "./../../../assets/json/map_locations.json";
export default {
    name: 'Map', 
    methods: {
        showCombatView() {
            this.$store.state.terminal_send_show = "";
            this.$store.commit('combatMode')
        },
        locateTheUser(x, y, available) {
            var bg_color, bg_shadow;
            var pin_size, pin_margins;
            if (available) {
              bg_color = "#34c70e";
              bg_shadow = "#85dd6e";
              pin_size = 14;
              pin_margins = 3;
            } else {
              bg_color = "#f40808"
              bg_shadow = "#f75252";
              pin_size = 6;
              pin_margins = 7;
            }
            return {
                'box-shadow': '0 0 0 5px ' + bg_shadow,
                'background-color': bg_color,
                'width': pin_size + 'px',
                'height': pin_size + 'px',
                'margin': pin_margins + 'px',
                top: x + "%",
                left: y + "%"
            }
        },
    },
    data() {
      return {
        mapLocations: mapLocationsJson.locations,
      };
    }
};
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
  position: relative;
}

.currentUserLocation {
  height: 6px;
  width: 6px;
  background-color: #e910108f;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #fd843e85;
  position: absolute;
}

.buttonsHolder {
  height: 10%;
  width: 80%;
  position: relative;
  top: 87%;
  left: 50%;
  transform: translate(-50%, 0%);
}

.btnSearch {
  width: 160px;
  height: 45px;
  font-family: "Roboto", sans-serif;
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
  transform: translate(-50%, 0%);
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
  font-family: "Roboto", sans-serif;
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
  transform: translate(-50%, 0%);
}

.btnAttack:hover {
  background-color: rgb(0, 0, 0);
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  color: #fff;
  transform: translate(-50%, -20%);
}
</style>
