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

        ]
    }
  },
  methods:{
  }
}).mount('#app');