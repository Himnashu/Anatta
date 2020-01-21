<template>
  <div id="dashboard">
    <Side />
    <div class="main-dashboard">
      <div class="navbar" @click="logout()">
        <p>Logout</p>
      </div>
      <UserDetails v-if="tabSelect" />
      <Users v-if="!tabSelect" />
    </div>
  </div>
</template>
<script>
import Side from "./Side.vue";
import UserDetails from "./UserDetails";
import Users from "./Users";

export default {
  name: "Dashboard",
  data() {
    return {
      tabSelect: true
    };
  },
  mounted: function() {
    if (localStorage.getItem("role") === null) {
      this.$router.push("/");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    }
  },
  components: {
    Side,
    UserDetails,
    Users
  }
};
</script>
<style scoped lang="scss">
#dashboard {
  display: flex;
  justify-content: flex-start;
  .main-dashboard {
    position: relative;
    width: 100%;
    .navbar {
      height: 50px;
      background: #002c9d;
      color: white;
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: flex-end;
      padding-right: 30px;
      padding-top: 10px;
      p {
        cursor: pointer;
      }
    }
  }
}
</style>