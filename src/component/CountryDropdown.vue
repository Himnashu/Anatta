<template>
  <div class="input">
      <label>Select Country *</label>
      <select name="country" size="1" v-model="countySel">
                    <option value="">Select a Country</option>
        <option v-for="(country_obj, country)  in countryList" :value="country" :key="country"> {{country}}</option>
      </select>
      <label>Select State *</label>
      <select name="state"  :disabled="state.length==0" size="1" v-model="stateSel">
        <option value selected="selected">Please select Country first</option>
         <option v-for="(country_obj, select_state)  in state" :value="select_state" :key="select_state"> {{select_state}}</option>
      </select>
      <label>Select City *</label>
      <select name="district" :disabled="city.length==0" size="1" v-model="districtSel">
          <option value selected="selected">Please select State first</option>
          <option v-for="select_city in city" :value="select_city" :key="select_city"> {{select_city}}</option>
      </select>
  </div>
</template>
<script>
export default {
  name: "Country",
  data(){
      return {
          countryList : this.$store.state.stateObject,
          countySel : '',
          stateSel : '',
          districtSel : '' ,
          state : [],
          city : []
      }
  },
  computed : {
    address : function(){
      var address ; 
     address = {
          "country": this.countySel,
          "state": this.stateSel,
          "city": this.districtSel
        }
        return address;
    }
  } ,

watch : {
  countySel : function(){
    this.state=[];
    this.city=[];
    this.stateSel='';
    this.districtSel='';
    if(this.countySel.length>0){
      this.state=this.countryList[this.countySel]
    }
  } ,
  stateSel : function(){
    this.city=[];
    this.districtSel='';
    if(this.stateSel.length>0){
      this.city=this.countryList[this.countySel][this.stateSel]
    }
  },
  districtSel : function (){
    if(this.districtSel.length>0){
          this.$emit('get-data', this.address)
    }
  }
}
};
</script>
<style scoped lang="scss">
</style>