<template>
  <div class="container">
    <div class="items">
      <div class="login">
        <h1 class="header">Cashflow</h1>
        <h4>Cashflow helps you control your finances.</h4>  
      </div>
      <Login/>
    </div>
  </div>  
</template>

<style lang="scss" scoped>

.items {

   @media(min-width: 500px) {
      display: flex;
      justify-content: center;
      margin-top: 150px;
}
} 


.login {
  border: 1px solid white;

  @media (min-width: 500px) {
    margin-right: 100px;
  }
  }

.header {
    color: #42b983;
    font-size: 50px;
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

