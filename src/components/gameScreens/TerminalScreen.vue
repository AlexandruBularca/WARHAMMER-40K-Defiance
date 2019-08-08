<template>

    <div class="terminalHolder">
        <!-- <vue-typer text='Vue component that simulates a user typing, selecting, and erasing text!'
        
        ></vue-typer> -->
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
            scroll_speed:40,
            rec:0,
            // reset:0
            // send_to_store:null
        }
    },  
    methods:{
      showtext(){
        // for(var letter in this.text_to_be_showed){
        //     console.log(this.text_to_be_showed[letter]);
        //     temp_text_present.push(this.text_to_be_showed[letter]);
        //     this.text_present=temp_text_present.join("");
        //     setTimeout(function(){console.log("foo")},200);
        // }
        this.rec=setTimeout(()=>{
            temp_text_present.push(this.text_to_be_showed[i]);
            // console.log(i);
            var unders="_";
            if(i%30<=15){
                unders="";
            }
            this.text_present=temp_text_present.join("")+unders;
            i++;
            if(this.text_to_be_showed.length){
                this.showtext()
            }
        },this.scroll_speed);
      },
      reset_timer(){
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
            this.reset_timer()
            temp_text_present=[];
            this.showtext();
        },
        send_to_store:function(){
            this.function_send_to_storage();
        },
        terminal_show:function(){
            this.text_to_be_showed=this.terminal_show;
        }
    },
    computed:{
        ...mapGetters(["terminal_show"]),
    },
    mounted: function () {
        this.$nextTick(function () {
            if(!this.$store.state.welcomeMessageShowed) {
                this.$store.state.terminal_send_show = "wfabag  wrwy rwr f";
                this.$store.state.welcomeMessageShowed = true;
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
    /* font-family: "FelinaT26Gothic" */
}
/* @font-face{
    font-family:"FelinaT26Gothic";
    src:url("../../assets/fonts/FelinaT26_Gothic_Regular.woff") format("woff");
} */
</style>
