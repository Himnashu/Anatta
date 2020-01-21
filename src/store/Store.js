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
      ] ,
      users :[
        {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija01@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "admin"
         },
         {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija02@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "user"
         },
         {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija03@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "user"
         },
         {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija04@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "user"
         },
         {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija05@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "user"
         },
         {
            "name" : "Himanshu Satija" , 
            "password" : "12345678" , 
            "email" : "hunnysatija06@gmail.com" ,
            "company"  : "anatta" ,
            "job_title" : "UI dev" , 
            "address" : {
                "country" : "India",
                "state" : "Rajasthan" , 
                "city" : "Jaipur"
            },
            "roll" : "user"
         }
    ]       
    }
})