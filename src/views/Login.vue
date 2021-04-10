<template>
  <div class="container">
    <div>
        <div class="login">
        <h1 class="login__header">Cashflow</h1>
        <h4>Cashflow helps you control your finances</h4>  
        </div>
        <Login/>
    </div>
  </div>  
</template>

<style lang="scss" scoped>


.login {
  border: 1px solid red;
  @media(max-width: 500px) {
      border: 1px solid red;
      display: flex;
  }

  &__header {
    color: #42b983;
    font-size: 50px;
  }
}

</style>


<script>
import Login from "@/components/Login.vue";

export default {
    name: "login",
    components: {
        Login
    }
}
</script>

