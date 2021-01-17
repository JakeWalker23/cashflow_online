<template>
  <div class="about">
    <Navigation/>
    <h3>Welcome to Cashflow online. </h3>
    <h3 class="welcome">Sign up for free here.</h3>
    <Upload/>
    <Footer/>
  </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'dashboard',
  components: {
    Upload,
    Footer,
  }
}
</script>

<style>
  * {
  margin: 0px;  
  }

  .welcome {
    margin-bottom: 16px;
  }
</style>

