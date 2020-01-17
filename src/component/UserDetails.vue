<template>
    <div id='userDetails'>
       <form>
            <div class="inputs">
              <div class="input">
                <label>{{'Name'}}</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div class="input">
                <label>{{'Email'}}</label>
                <input type="email" placeholder="Enter Email" />
              </div>
              <div class="input">
                <label>{{'Company'}}</label>
                <input type="text" placeholder="Enter Company Name" />
              </div>
              <div class="input">
                <label>{{'Password'}}</label>
                <input type="password" placeholder="Enter Password" />
              </div>
              <div class="input">
                <label>{{'Confirm Password'}}</label>
                <input type="text" placeholder="Enter Password Again" />
              </div>
              <div class="input">
                <label>{{'Job Title'}}</label>
                <input type="text" placeholder="Enter Job Title" />
              </div>
              <div class="input">
                <label>{{'Address : Country'}}</label>
                <select >
                  <option>India</option>
                  <option>Country</option>
                  <option>Country</option>
                  <option>Country</option>
                  <option>Country</option>
                </select>
              </div>
              <div class="input">
                <label>{{'State'}}</label>
                <select >
                  <option>State</option>
                </select>
              </div>
              <div class="input">
                <label>{{'City'}}</label>
                <select >
                  <option>City</option>
                </select>
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
    </div>
</template>
<script>
export default {
    name : 'userDetails' , 
  
}
</script>
<style scoped lang="scss">
#userDetails{
        width: 100%;
    padding: 60px;
    box-sizing: border-box;
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