<template>
  <div id="users">
  <div class="heading">
      <div>Users List</div>
      <div><button>+ Add User</button></div>
  </div>
    <table>
      <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th></th>
      </thead>
      <tbody>
        <tr>
          <td>Himanshu satija</td>
          <td>Himanshu@anattadesign.com</td>
          <td>7742986934</td>
          <td class="buttons">
            <div>
              <button>Edit Details</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Himanshu satija</td>
          <td>Himanshu@anattadesign.com</td>
          <td>7742986934</td>
          <td class="buttons">
            <div>
              <button>Edit Details</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Himanshu satija</td>
          <td>Himanshu@anattadesign.com</td>
          <td>7742986934</td>
          <td class="buttons">
            <div>
              <button>Edit Details</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Himanshu satija</td>
          <td>Himanshu@anattadesign.com</td>
          <td>7742986934</td>
          <td class="buttons">
            <div>
              <button>Edit Details</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>Himanshu satija</td>
          <td>Himanshu@anattadesign.com</td>
          <td>7742986934</td>
          <td class="buttons">
            <div>
              <button>Edit Details</button>
              <button>Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "users"
};
</script>
<style scoped lang="scss">
#users {
  padding: 60px;
  .heading{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
      button{
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
   border-collapse:collapse;

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
          transition: .5s ease-in-out all;
        box-shadow: 2px 3px 15px #dedede;
        .buttons{
                      transition: .5s ease-in all;

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