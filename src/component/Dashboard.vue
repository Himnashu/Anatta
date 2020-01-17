<template>
  <div id="dashboard">
    <Side />
    <UserDetails v-if="tabSelect" />
    <Users v-if="!tabSelect" />
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
  components: {
    Side,
    UserDetails,
    Users
  }
};
</script>
<style scoped>
#dashboard {
  display: flex;
  justify-content: flex-start;
}
</style>