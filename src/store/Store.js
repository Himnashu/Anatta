import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tabData: [
      { name: "Login", active: true },
      { name: "Sign up", active: false }
    ],
    dashBoardTab: [
      { name: 'Dashboard', active: true },
      { name: 'Users', active: false }
    ],
    stateObject :{
      "India": {
         "Delhi": ["new Delhi", "North Delhi"],
         "Kerala": ["Thiruvananthapuram", "Palakkad"],
         "Rajasthan": ["Jaipur", "Alwar"],
      },
      "Australia": {
        "South Australia": ["Dunstan", "Mitchell"],
        "Victoria": ["Altona", "Euroa"]
      }, 
      "Canada": {
        "Alberta": ["Acadia", "Bighorn"],
        "Columbia": ["Washington", ""]
      },
      },
    users: [
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija01@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },

        "role": "admin"
      },
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija02@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija03@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija04@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija05@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
      {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija06@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
         {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija07@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
       {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija08@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
     {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija09@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
   {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija10@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
 {
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija11@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      },
{
        "name": "Himanshu Satija",
        "password": "12345678",
        "email": "hunnysatija12@gmail.com",
        "company": "anatta",
        "job_title": "UI dev",
        "number": "7742986934",
        "address": {
          "country": "India",
          "state": "Rajasthan",
          "city": "Jaipur"
        },
        "role": "user"
      }
    ]
  },
  getters: {
    roleBasedUserList (state, role) {
      return state.users.filter(user => {
        if (user.role === "user") {
          return user
        }
      })
    }
  },
  mutations: {
    addUser (users, newuser) {
     // mutate state
     this.state.users.push(newuser)
   },
   editUser (users, editUser) {
   this.state.users=this.state.users.map((user)=>{
      if(user.email===editUser.email){
        if(user.role==="admin"){
          user=editUser;
          localStorage.removeItem('data');
          localStorage.setItem("data", JSON.stringify(user));
        }
        user=editUser;
      }
      return user
    })
  },
   DeleteUser (users, email) {
    this.state.users = this.state.users.filter((user)=>{
      if(user.email !== email){
        return user
      }
    })
    return true
  }
 }
})