<template>
  <div id="users">
    <div class="heading">
      <div>Users List</div>
      <popup v-if="showPopup">
          <template v-slot:header>Add User
            <div class="close" @click="showPopup=!showPopup">&#10005;</div>
          </template>
          <template>
              <Signup />
          </template>
          <template v-slot:footer>
              <button></button>
          </template>
      </popup>
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
      <popup v-if="showDeletePopup">
          <template v-slot:header>Delete User
            <div class="close" @click="showDeletePopup=!showDeletePopup">&#10005;</div>
          </template>
          <template>
            <div class="delete-popup">
              <div class="heading">
              Are you confirm to delete this user ? 
              </div>
              <button @click="showDeletePopup=!showDeletePopup" class="button">Cancel</button>
              <button @click="DeleteUser()" class="button red-btn">Confirm</button>
            </div>
          </template>
          <template v-slot:footer>
              <button></button>
          </template>
      </popup>
      <div>
        <button class="add-user-btn"   @click="showPopup=!showPopup">+ Add User</button>
      </div>
    </div>
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="user in userData" :key="user.email">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.number}}</td>
          <td class="buttons">
            <div>
              <button @click="showEditPopup=!showEditPopup">Edit Details</button>
              <button @click="DeletePopup(user.email)" >Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Popup from './Popup';
import Signup from './SignUp';
export default {
  name: "users", 
  data (){
      return {
          showPopup : false,
          showEditPopup : false,
          showDeletePopup : false, 
          DeleteUserEmail : '' ,
          userData : this.$store.state.users.filter((user)=>{
           if(user.roll!=="admin"){
             return user
           }
          })
      }
  },
  watch : {
    showPopup : () => {
     var element = document.getElementById("app");
  // element.classList.add("popup-blur");
      }
  } ,
  methods : {
     DeletePopup(email) {
      this.showDeletePopup=!this.showDeletePopup;
      this.DeleteUserEmail=email;      
    },
    DeleteUser(){
      this.$store.commit("DeleteUser",  this.DeleteUserEmail);
      this.showDeletePopup=!this.showDeletePopup;
      console.log(this.$store.state.users)
    }
  },
  components : {
      Popup , 
      Signup
  }
};
</script>
<style scoped lang="scss">
.close{
  cursor: pointer;
}
.delete-popup{
  .heading{
    font-size: 20px !important;
  }
  .red-btn{
padding: 8px;
          color: white;
          font-size: 20px;
          font-weight: bold;
          background: #e41919;
          
  }
    .button{
padding: 8px;
          font-size: 20px;
          font-weight: bold;
          border-radius: 4px;
          
  }
}
#users {
  padding: 60px;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    .add-user-btn {
      font-size: 16px;
      padding: 8px;
      background: white;
      font-weight: bold;
      letter-spacing: 2px;
      border-radius: 4px;
      box-shadow: 2px 1px 8px grey;
    }
  }
}

table {
  width: 1000px;
  border-collapse: collapse;

  box-shadow: 0px 1px 6px #969191;

  thead {
    th {
      height: 60px;
      border-bottom: 1px solid #e0e0e0;
    }
  }
  tbody {
    tr {
      height: 60px;
      &:hover {
        transition: 0.5s ease-in-out all;
        box-shadow: 2px 3px 15px #dedede;
        .buttons {
          transition: 0.5s ease-in all;

          opacity: 1;
        }
      }
      .buttons {
        opacity: 0;
        button {
          width: 96px;
          height: 32px;
          color: white;
          font-size: 12px;
          font-weight: bold;
          border-radius: 25px;
          background: #e41919;
          &:first-child {
            background: #002c9d;
          }
        }
      }
    }
    width: 100%;
  }
  
}
</style>