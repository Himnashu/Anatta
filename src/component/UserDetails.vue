<template>
    <div id='userDetails'>
        <popup v-if="showEditPopup">
          <template v-slot:header>Edit User
            <div class="close" @click="showEditPopup=!showEditPopup">&#10005;</div>
          </template>
          <template>
              <Signup />
          </template>
          <template v-slot:footer>
              <button></button>
          </template>
      </popup>
        <div class="edit-details">
              <button @click="showEditPopup=!showEditPopup">Edit Details</button>
        </div>
       <form>
            <div class="inputs">
              <div class="input">
                <label>{{'Name'}}</label>
                <input type="text" placeholder="Enter Name" disabled :value="data.name" />
              </div>
              <div class="input">
                <label>{{'Email'}}</label>
                <input type="email" placeholder="Enter Email" disabled :value="data.email" />
              </div>
              <div class="input">
                <label>{{'Company'}}</label>
                <input type="text" placeholder="Enter Company Name"  disabled :value="data.company"/>
              </div>
              <div class="input">
                <label>{{'Password'}}</label>
                <input type="password" placeholder="Enter Password"  disabled value="********"/>
              </div>
              <div class="input">
                <label>{{'Number'}}</label>
                <input type="text" placeholder="Enter Number" disabled :value="data.number" />
              </div>
              <div class="input">
                <label>Job Title</label>
                <input type="text" placeholder="Enter Job Title" disabled :value="data.job_title" />
              </div>
              <div class="input">
                <label>Address : Country</label>
                <input type="text" placeholder="Enter Job Title" disabled :value="data.address.country" />
              </div>
              <div class="input">
                <label>{{'State'}}</label>
              <input type="text" placeholder="Enter Job Title" disabled :value="data.address.state" />
              </div>
              <div class="input">
                <label>{{'City'}}</label>
               <input type="text" placeholder="Enter Job Title" disabled :value="data.address.city" />
              </div>
            </div>
          </form>
    </div>
</template>
<script>
import popup from './Popup';
import Signup from './SignUp';

export default {
    name : 'userDetails' , 
    data (){
        return {
            showEditPopup : false,
            data : {}
        }
    },
    components : {
        popup,
        Signup
    },
    mounted : function(){
        if(localStorage.getItem('data')){
            this.data= JSON.parse(localStorage.getItem('data'))
            console.log(this.data);
        }
    }
  
}
</script>
<style scoped lang="scss">
#userDetails{
        width: 100%;
    padding: 60px;
    box-sizing: border-box;
}
.edit-details{
    margin-bottom: 20px;
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
</style>