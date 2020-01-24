<template>
  <div id="side">
    <div class="heading">Anatta Design</div>
    <div class="tabs"  v-if="!userDashboard">
      <div
        class="tab"
        v-for="(data , index) in tabData"
        :key="index"
        :class="data.active ? 'active' : '' "
        @click="toggleTab(index)"
      >{{data.name}}</div>
    </div>
    <div class="tabs"  v-if="userDashboard">
      <div
        class="tab active"
      >Dashboard</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "side",
  data() {
    return {
      tabData: this.$store.state.dashBoardTab ,
      userDashboard : false
    }
  },
  mounted : function(){
      if(localStorage.getItem('role')==='user'){
              this.userDashboard=true
      }
  },
  methods: {
    toggleTab(tabIndex) {
      this.tabData[tabIndex].active = true;
      if (tabIndex === 1) {
        this.$parent.$data.tabSelect = false;
      } else {
        this.$parent.$data.tabSelect = true;
      }
      this.tabData.map((tab, index) => {
        if (index !== tabIndex) {
          tab.active = false;
        }
      });
    }
  }
};
</script>

<style scoped lang="scss" >
#side {
  min-width: 340px;
  height: 100vh;
  background: #002c9d;
  color: white;
  font-weight: bold;
  font-size: 24px;
    position: fixed;
    top: 0;
    z-index: 2;
  .heading {
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: bold;
    margin: 20px 0;
  }
  .tabs {
    margin-top: 40px;
    cursor: pointer;
    .tab {
      padding: 16px 0;
    }
    .active {
      transition: 0.5s ease-in-out all;
      color: #002c9d;
      background: white;
    }
  }
}
</style>