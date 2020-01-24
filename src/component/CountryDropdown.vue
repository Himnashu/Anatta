<template>
  <div class="input">
    <label>Select Country *</label>
    <select name="country" size="1" v-model="countySel" @change="countrychange">
      <option value>Select a Country</option>
      <option
        v-for="(country_obj, country)  in countryList"
        :value="country"
        :key="country"
      >{{country}}</option>
    </select>
    <label>Select State *</label>
    <select
      name="state"
      :disabled="state.length==0"
      size="1"
      v-model="stateSel"
      @change="statechange"
    >
      <option value>Please select Country first</option>
      <option
        v-for="(country_obj, select_state)  in state"
        :value="select_state"
        :key="select_state"
      >{{select_state}}</option>
    </select>
    <label>Select City *</label>
    <select name="district" :disabled="city.length==0" size="1" v-model="districtSel">
      <option value selected="selected">Please select State first</option>
      <option v-for="select_city in city" :value="select_city" :key="select_city">{{select_city}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Country",
  data() {
    return {
      countryList: this.$store.state.stateObject,
      countySel: '',
      stateSel: "",
      districtSel: "",
      state: [],
      city: [],
      selected_country: true,
      selected_state: false
    };
  },
  props: ["default", "defaultvalue"],
  methods: {
    init(){
      this.countySel = this.defaultvalue.country;
      this.countrychange()

      this.stateSel = this.defaultvalue.state;
      this.statechange()
      this.districtSel=this.defaultvalue.city;
    },
    countrychange() {
      this.state = [];
      this.city = [];
      this.stateSel = "";
      this.districtSel = "";
      if (this.countySel.length > 0) {
        this.state = this.countryList[this.countySel];
      }
    },
    statechange() {
      this.city = [];
      this.districtSel = "";
      // this.stateSel = this.defaultvalue.state;
      if (this.stateSel.length > 0) {
        this.city = this.countryList[this.countySel][this.stateSel];
      }
    }
  },
  mounted (){
    if(this.default){
      this.init();
    }
  },
  computed: {
    address: function() {
      var address;
      address = {
        country: this.countySel,
        state: this.stateSel,
        city: this.districtSel
      };
      return address;
    }
  },
  watch: {
    districtSel: function() {
      if (this.districtSel.length > 0) {
        this.$emit("get-data", this.address);
      }
    }
  }
};
</script>
<style scoped lang="scss">
label{
  text-align: left;
  font-size: 16px;
  font-weight: normal;
}
select{
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>