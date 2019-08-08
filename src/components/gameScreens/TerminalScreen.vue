<template>

    <div class="terminalHolder" id="trmHolder">
        <p class="terminal_text">{{text_present}}</p>
    </div>

</template>

<script>

import { setTimeout, clearTimeout } from 'timers';
import {mapGetters} from "vuex";

var i=0;
var temp_text_present=[];
export default {
    name: 'TerminalScreen',
    components:{
    },
    data(){
        return {
            text_present:"",
            text_to_be_showed: this.$store.state.terminal_send_show,
            textToBeAdded: this.$store.state.textToBeAdded,
            terminalTutorialItem: this.$store.state.terminalTutorialItem,
            scroll_speed:40,
            scroll_speed_add:20,
            rec:0,
            // reset:0
            // send_to_store:null
        }
    },  
    methods:{
      showtext(){
        this.rec=setTimeout(()=>{
            temp_text_present.push(this.text_to_be_showed[i]);
            var unders="_";
            if(i%30<=15){
                unders="";
            }
            if(this.terminalTutorialItem === 0 && this.text_to_be_showed[i+1]==='<' && this.text_to_be_showed[i+2]==='<') {
                this.scroll_speed = 0;
            }
            this.text_present=temp_text_present.join("") + unders;
            i++;
            if(this.text_to_be_showed.length){
                this.showtext()
            }
            if(this.text_present === this.text_to_be_showed) {
                if (this.currentTutorialNumber === 0) {
                    this.$store.state.tutorialMessages.initialMapMessage = 2;
                    this.$store.state.terminalTutorialItem = 1;
                } else if (this.currentTutorialNumber === 1) {
                    this.$store.state.tutorialMessages.initialCombatViewMessage = 2;
                    this.$store.state.terminalTutorialItem = 2;
                } else if (this.currentTutorialNumber === 2) {
                    this.$store.state.tutorialMessages.initialBattleWonMessage = 2;
                    this.$store.state.terminalTutorialItem = 3;
                } else if (this.currentTutorialNumber === 3) {
                    this.$store.state.tutorialMessages.initialInventoryMessage = 2;
                    this.$store.state.terminalTutorialItem = 4;
                } else if (this.currentTutorialNumber === 4) {
                    this.$store.state.tutorialMessages.messageNewLocations = 2;
                    this.$store.state.terminalTutorialItem = 5;
                }
                this.reset_timer();
            }
        },this.scroll_speed);
      },
      addText(){
        this.rec=setTimeout(()=>{
            temp_text_present.push(this.textToBeAddedToCMD[i]);
            //var elem = document.getElementById('trmHolder');
            var unders="_";
            if(i%30<=15){
                unders="";
            }
            this.text_present = temp_text_present.join("") + unders;
            i++;
            if(this.textToBeAddedToCMD.length){
                if(i !== this.textToBeAddedToCMD.length) {
                    this.addText();
                    var elem = document.getElementById('trmHolder');
                    elem.scrollTop = elem.scrollHeight;
                } else {
                    //elem.scrollTop = elem.scrollHeight;
                }
            }
        },this.scroll_speed_add);
      },
      reset_timer(){
          this.scroll_speed = 40;
          clearTimeout(this.rec);
      },
      reset_timer_add(){
          this.scroll_speed_add = 20;
          clearTimeout(this.rec);
      },
    //   function_send_to_storage(){
    //       this.$store.commit('change_terminal_send_show', this.send_to_store);
    //   }
    },
    watch:{
        text_to_be_showed:function(){
            i=0;
            // clearTimeout(this.rec);
            this.reset_timer();
            if(!this.$store.state.addTerminalType) {
                temp_text_present=[];
            }
            this.showtext();
        },
        textToBeAddedToCMD:function(){
            i=0;
            this.reset_timer_add();
            this.addText();
        },
        send_to_store:function(){
            this.function_send_to_storage();
        },
        terminal_show:function(){
            if(this.$store.addTerminalType) {
                this.textToBeAdded = this.terminal_show;
            } else {
                this.text_to_be_showed = this.terminal_show;
            }
        }
    },
    computed:{
        currentTutorialNumber() {
            return this.$store.state.terminalTutorialItem
        },
        textToBeAddedToCMD() {
            return this.$store.state.textToBeAdded
        },
        ...mapGetters(["terminal_show"]),
    },
    mounted: function () {
        this.$nextTick(function () {
            if(this.$store.state.tutorialMessages.initialMapMessage === 0) {
                this.$store.state.tutorialMessages.initialMapMessage = 1;
                this.$store.state.terminal_send_show = "Inquisitor's Log:\n\n    You have been summoned to this Forge World because it has fallen to chaotic coruption 16 days ago.\n    Your mission is to find the source of its downfall so that our holy Chamber Militant can purge it within the very hearth of it's corruption. As of now they are transitioning through the Warp.\n   If the corruption of the planet goes too far then our Order will be forced to employ the final solution, Exterminatus.\n    The location of the Exterminatus Fleet is currently classified until further notice.\n\n    For the Emperor!\n\n<<press 'SEARCH' to find an enemy>>";
            }
        })
    }
}
</script>
<style>

.vue-typer .custom.char.typed {
  color: #ffffff;
}

.terminalHolder {
    overflow: auto;
    background-color: rgb(0, 0, 0);
    height: 76.9vh;
    width: 25vw;
    border-color: rgb(184, 184, 184);
    border-width: 4px;
    border-style: solid;
    margin-top: 1vh;
}

.terminal_text{
    color:rgb(241, 241, 241);
    overflow-wrap: break-word;
    padding:10px;
    padding-top:0px;
    font-family:"Roboto Mono";
    white-space: pre-line;
    /* font-family: "FelinaT26Gothic" */
}

/* @font-face{
    font-family:"FelinaT26Gothic";
    src:url("../../assets/fonts/FelinaT26_Gothic_Regular.woff") format("woff");
}*/

</style>
