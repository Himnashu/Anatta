import Vuex from 'vuex';
import Vue from 'vue' ; 

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
     tabData: [
        { name: "Login", active: true },
        { name: "Sign up", active: false }
      ]  , 
      dashBoardTab : [
        {name : 'Dashboard' , active : true} , 
        {name : 'Users' , active : false}
      ]       
    }
})