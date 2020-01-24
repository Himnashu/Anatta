<template>
  <div class="login-ctr">
    <div class="heading">
      <div
        class="tab"
        v-for="(tab, index) in tabData"
        :key="tab.name"
        :class="tab.active ? 'active' : ''"
        @click="toggleTab(index)"
      >{{tab.name}}</div>
    </div>
    <div>
      <form v-if="tabData[0].active" @click.prevent>
        <div class="inputs">
          <div class="input">
            <label>{{'Email'}}</label>
            {{errorMsg}}
            <input
              type="text"
              v-model="loginEmail"
              placeholder="Enter Email"
            />
          </div>
          <div class="input">
            <label>{{'Password'}}</label>
            <input type="password" v-model="loginPassword" placeholder="Enter Password" />
          </div>
        </div>
        <div>
          <button type="submit" @click="LoginToDashboard()">Submit</button>
        </div>
      </form>
      <div v-if="!tabData[0].active">
        <Signup :signup="true"/>
      </div>
    </div>
  </div>
</template>
<script>
import "../backend/Users.json";
import CountryDropdown from "./CountryDropdown";
import Signup from "./SignUp";
export default {
  name: "login",
  data() {
    return {
      tabData: this.$store.state.tabData,
      users: this.$store.state.users,
      loginEmail: "",
      loginPassword: "",
      error: false,
      errorMsg: ""
    };
  },
  components: {
    CountryDropdown,
    Signup
  },
  mounted : function (){
      if(localStorage.getItem('role')!==null){
          this.$router.push('/dashboard')
      }
  },
  methods: {
    toggleTab(tabIndex) {
      this.tabData[tabIndex].active = true;
      this.tabData.map((tab, index) => {
        if (index !== tabIndex) {
          tab.active = false;
        }
      });
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    LoginToDashboard() {
      if (this.loginEmail === "") {
        this.error = true;
        this.errorMsg = "Email is required";
        return null;
      } else {
        if (this.loginPassword === "") {
          this.error = true;
          this.errorMsg = "Password is required";
          return null;
        } else {
          if (!this.validateEmail(this.loginEmail)) {
            this.error = true;
            this.errorMsg = "Please Enter Valid Email";
            return null;
          } else {
            var userData = {};
            this.users.map(user => {
              if (user.email === this.loginEmail) {
                userData = user;
              }
            });
            if (userData.password === this.loginPassword) {
              if (userData.role === "admin") {
                this.errorMsg = "";
                localStorage.setItem("role", "admin");
                localStorage.setItem("data", JSON.stringify(userData));
                this.$router.push("/dashboard");
              } else {
                this.errorMsg = "";
                localStorage.setItem("role", "user");
                localStorage.setItem("data", JSON.stringify(userData));
                this.$router.push("/dashboard");
              }
            } else {
              this.error = true;
              this.errorMsg = "Please Enter Correct Password";
            }
          }
        }
      }
    }
  }
};
</script>
<style scoped>
</style>