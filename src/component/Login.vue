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
      <form v-if="!tabData[0].active">
        <div class="inputs">
          <div class="input">
            <label>{{'Name'}}</label>
            <input type="text" placeholder="Enter Name" />
          </div>
          <div class="input">
            <label>{{'Email'}}</label>
            <input type="email" placeholder="Enter Email" />
          </div>
          <div class="input">
            <label>{{'Company'}}</label>
            <input type="text" placeholder="Enter Company Name" />
          </div>
          <div class="input">
            <label>{{'Password'}}</label>
            <input type="password" placeholder="Enter Password" />
          </div>
          <div class="input">
            <label>{{'Confirm Password'}}</label>
            <input type="text" placeholder="Enter Password Again" />
          </div>
          <div class="input">
            <label>{{'Job Title'}}</label>
            <input type="text" placeholder="Enter Job Title" />
          </div>
          <div class="input">
            <label>{{'Address : Country'}}</label>
            <select>
              <option>India</option>
              <option>Country</option>
              <option>Country</option>
              <option>Country</option>
              <option>Country</option>
            </select>
          </div>
          <div class="input">
            <label>{{'State'}}</label>
            <select>
              <option>State</option>
            </select>
          </div>
          <div class="input">
            <label>{{'City'}}</label>
            <select>
              <option>City</option>
            </select>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import "../backend/Users.json";
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
  mounted() {},
  computed: {},
  watch: {},
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
                  userData=user
              }
            });
            console.log(userData)
             if (userData.password === this.loginPassword) {
                 if(userData.roll==="admin"){
                     this.errorMsg = "successfully  admin login";
                     localStorage.setItem("role" , "admin" );
                     localStorage.setItem("data" , JSON.stringify(userData));
                     this.$router.push('/dashboard');
                 }else{
                                          this.errorMsg = "successfully  user login";

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