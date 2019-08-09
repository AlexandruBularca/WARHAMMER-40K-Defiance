<template>
  <div class="background disable-selection">
    <div class="intro">
      <h1>
        WARHAMMER
        <br />40K DEFIANCE
      </h1>
      <div class="button" v-on:click="changeView('playGame')">PLAY</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  props: {},
  computed: {},
  methods: {
    changeView(view) {
      this.$store.commit("changeView", view);
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lacquer|Saira+Stencil+One&display=swap");

.background {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/bg_home_screen.jpg");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}

.disable-selection {
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer */
  -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
}

h1 {
  font-family: "Lacquer", sans-serif;
  font-size: 4.5em;
  text-shadow: 4px 4px grey, 5px 5px rgb(54, 53, 53);
  text-align: center;
  top: 15%;
  position: relative;
}

.button {
  position: relative;
  left: 50%;
  -webkit-transform: translate(0%, 0%);
  transform: translate(-50%, 0%);
  width: 50%;
  font-size: 40px;
  top: 30%;
  font-family: "Lacquer", sans-serif;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px #3d3533;
  background-color: #b35900;
  border-color: black;
  cursor: pointer;
  text-align: center;
}

.button:hover {
  background-color: black;
  color: rgb(211, 106, 8);
}

.intro {
  position: absolute;
  width: auto;
  height: 80vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@font-face {
  font-family: "FelinaT26Gothic";
  src: url("../assets/fonts/FelinaT26_Gothic_Regular.woff") format("woff");
}

@media (min-width: 1000px) {
  h1:hover {
    color: rgb(105, 81, 63);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
}

@media (max-width: 1000px) {
  h1 {
    text-shadow: 1px 1px grey, 2px 2px rgb(54, 53, 53);
    position: relative;
    left: 50%;
    transform: translate(-50%, 10%);
    font-size: 2em;
  }
  .button {
    box-shadow: 1px 1px 1px 1px #3d3533;
    position: absolute;
    border-radius: 10px;
    font-size: 20px;
    width: 100px;
    height: 26px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, 0%);
  }
}

</style>
