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
          <form v-if="tabData[0].active" 
          @click.prevent='submited'
          >
            <div class="inputs">
              <div class="input">
                <label>{{'Email'}}</label>
                <input type="text" placeholder="Enter Email" />
              </div>
              <div class="input">
                <label>{{'Password'}}</label>
                <input type="password" placeholder="Enter Password" />
              </div>
            </div>
            <div>
              <button type="submit"
               @click="LoginToDashboard()">Submit</button>
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
                <select >
                  <option>India</option>
                  <option>Country</option>
                  <option>Country</option>
                  <option>Country</option>
                  <option>Country</option>
                </select>
              </div>
              <div class="input">
                <label>{{'State'}}</label>
                <select >
                  <option>State</option>
                </select>
              </div>
              <div class="input">
                <label>{{'City'}}</label>
                <select >
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
export default {
    name : 'login' , 
    data() {
    return {
      tabData: this.$store.state.tabData
    };
  },
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
    } ,
    LoginToDashboard(){
        this.$router.push('/dashboard')
    }
  }
}
</script>
<style scoped>

</style>