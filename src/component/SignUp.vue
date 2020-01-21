<template>
  <form @click.prevent>
   <div class="error"> {{errorMsg}}</div>
    <div class="inputs">
      <div class="input">
        <label>{{'Name *'}}</label>
        <input type="text" placeholder="Enter Name" v-model="name" />
      </div>
      <div class="input">
        <label>{{'Email *'}}</label>
        <input type="email" placeholder="Enter Email" v-model="email" />
      </div>
      <div class="input">
        <label>{{'Company *'}}</label>
        <input type="text" placeholder="Enter Company Name" v-model="company" />
      </div>
      <div class="input">
        <label>{{'Password *'}}</label>
        <input type="password" placeholder="Enter Password" v-model="password" />
      </div>
      <div class="input">
        <label>{{'Number *'}}</label>
        <input type="text" placeholder="Enter number" v-model="number" />
      </div>
      <div class="input">
        <label>{{'Job Title *'}}</label>
        <input type="text" placeholder="Enter Job Title" v-model="jobtitle" />
      </div>
      <div class="input">
        <CountryDropdown v-on:get-data="getData($event)"></CountryDropdown>
      </div>
    </div>
    <div>
      <button type="submit" @click="SignUp()">Submit</button>
    </div>
  </form>
</template>
<script>
import CountryDropdown from "./CountryDropdown";

export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      password: "",
      number: "",
      jobtitle: "",
      address: "",
      errorMsg: "",
      error: false
    };
  },
  components: {
    CountryDropdown
  },
  methods: {
    getData(data) {
      this.address = data;
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    SignUp() {
      if (
        !this.name ||
        !this.email ||
        !this.password ||
        !this.company ||
        !this.jobtitle ||
        !this.number ||
        !this.address
      ) {
        this.error = true;
        this.errorMsg = "All Fields are required";
        return null;
      } else {
        if (!this.validateEmail(this.email)) {
          this.error = true;
          this.errorMsg = "Please Enter Valid Email";
          return null;
        } else {
          this.$store.commit("addUser", {
            name: this.name,
            password: this.password,
            email: this.email,
            company: this.company,
            job_title: this.jobtitle,
            number: this.number,
            address: this.address,
            roll: "user"
          });
          this.$router.push('/')
        }
      }
    }
  }
};
</script>
<style scoped lang="scss">

.inputs {
  label {
    font-size: 16px;
    font-family: Arial;
    line-height: 18px;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: #4c4c4c;
  }
  .input {
    display: flex;
    flex-direction: column;
    input,
    select {
      height: 36px;
      margin-top: 8px;
      margin-bottom: 20px;
      text-indent: 12px;
      border: unset;
      box-shadow: 0px 0px 2px grey;
      letter-spacing: 2px;
      box-sizing: border-box;
      &:focus {
        transition: 0.25s ease-in-out all;
        outline: none;
        border: unset;
        border-bottom: 2px solid #002c9d;
        box-shadow: -2px 1px 5px grey;
      }
    }
  }
}
button {
  margin-top: 12px;
  width: 100%;
  height: 32px;
  border-radius: 4px;
  background: #002c9d;
  box-shadow: 0px 1px 3px rgba(73, 104, 182, 0.16);
  font-weight: 600;
  line-height: 19px;
  font-size: 16px;
  border: unset;
  color: #ffffff;
  min-height: 40px;
  &:hover {
    transition: 0.2s ease-in-out all;
    outline: none;
    box-shadow: 0px 0px 7px 2px #bdbbde;
  }
}
</style>