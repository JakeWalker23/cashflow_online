<template>
  <div class="container">
  <h1 class="header">Cashflow</h1>
  <h4>Cashflow helps control your finances</h4>  
  <Login/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  
}

.header {
  color: #42b983;
  font-size: 75px;
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

