<template>

    <div class="terminalHolder">
        <!-- <vue-typer text='Vue component that simulates a user typing, selecting, and erasing text!'
        
        ></vue-typer> -->
        <p class="terminal_text">{{text_present}}</p>
    </div>

</template>

<script>
import { VueTyper } from 'vue-typer'
import { setTimeout } from 'timers';



export default {
    name: 'TerminalScreen',
    components:{
        VueTyper
    },
    data(){
        return {
            text_present:[],
            text_to_be_showed:"wew man this is totally cool,like really cool beans bro...",
        }
    },  
    methods:{
      showtext:function(){
        var cpy_text_to_be_showed=this.text_to_be_showed;
        var cpy_text_present=[];
        for(var letter in cpy_text_to_be_showed){
            this.text_present=letter;
        }
      }
    },
    watch:{
        text_to_be_showed:function(){
            console.log("foo");
            this.showtext();
        }
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
}
</style>
