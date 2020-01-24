<template>
  <div id="app">
    <div class="dashboard-ctr">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Popup from './component/Popup';
export default {
  EL: "#app",
  data() {
    return {
    }
  },
  components : {
    Popup
  }
};
</script>

<style lang="scss" >
.error{
   color: red 
}
.popup-blur{
  filter: blur(2px);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1440px;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
  .dashboard-ctr {
    .login-ctr {
      width: 447px;
      margin: auto;
      border: 1px solid #e2e8f0;
      margin-top: 64px;
      padding: 32px 48px;
      box-sizing: border-box;
      border-radius: 4px;
      &:hover {
        transition: 0.5s ease-in-out all;
        box-shadow: -1px 1px 7px -1px grey;
      }
      .heading {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #000000;
        margin-bottom: 24px;
        display: flex;
        .tab {
          padding: 12px 0;
          flex: 1;
          background: #f7fafc;
          font-weight: 600;
          font-size: 14px;
          box-sizing: border-box;
          line-height: 16px;
          display: flex;
          align-items: center;
          color: #666666;
          cursor: pointer;
          justify-content: center;
          letter-spacing: 2px;
          border: 1px solid #f7fafc;
          height: 43px;
        }
        .active {
          color: #002c9d;
          background: #ffffff;
          box-sizing: border-box;
          border-bottom: 2px solid #002c9d;
          border-top: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          transition: 0.25s all ease-in-out;
        }
      }
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
          input , select {
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
    }
  }
}
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
button{
  outline: none;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
