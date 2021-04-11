<template>
    <div class="container">
        <div class="login">
            <input class="login__email" placeholder="email"/>
            <input class="login__password" placeholder="password"/>
            <div>
                <button class="login__submit" type="Submit">Log in</button>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
  .container {
      max-width: 1200px;
      display: flex;
      justify-content: center;
  }

  .login {
      height: 180px;
      width: 350px;
      padding-top: 20px;
      box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);
      -webkit-box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);
      -moz-box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);

      &__email {
          width: 320px;
          border-radius: 6px;
          height: 40px;
          font-size: 20px;
          margin-bottom: 10px;
    }

      &__password {
          width: 320px;
          border-radius: 6px;
          height: 40px;
          font-size: 20px;
          margin-bottom: 10px;      
          
      }

      &__submit {
          border-radius: 6px;
          background:#42b983;
          width: 332px;
          height: 40px;
          color: white;
          font-size: 20px;
      }
  }
</style>

<script>
export default {
    
}
</script>
