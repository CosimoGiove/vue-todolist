"use strict";
const { createApp } = Vue;

createApp({
  data() {
    return {
        lista:[
            {
                testo:"andare al parco",
                fatto:true,
            },
            {
                testo:"mangiare il gelato",
                fatto:true,
            },
            {
                testo:"fare i compiti",
                fatto:true,
            },

        ],
        coseDaFare:"",
    }
  },
  methods:{
    rimosso(index){
        this.lista.splice(index, 1);
    },
    invio(){
        this.lista.push({
            testo: this.coseDaFare,
            fatto: true,
        });
        this.coseDaFare = '';
    }
  }
}).mount('#app');