<template>
  <div class="popup">
    <div class="popup-header">
      <slot name="header">
      </slot>
     
    </div>
    <div class="popup-inner">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Popup" 
};
</script>
<style scoped lang="scss">
.popup {
  transition: 0.5s ease-in-out all;
  z-index: 10;
  width: 400px;
  max-height: calc(100vh - 20px);
  background: #fff;
  position: absolute;
  left: 50%;
  top: 10%;
  box-shadow: 1px 2px 7px 0px grey;
  border-radius: 4px;
  padding: 25px 0;
  overflow-y: scroll;
  box-sizing: border-box;
  .popup-header {
    display: flex;
    justify-content: space-between;
    padding: 0 24px 24px;
    border-bottom: 0.5px solid #d2d2d2;
    margin-bottom: 20px;

  }
  .popup-inner {
    padding: 0 24px;
  }
}
</style>