<template>
  <div class="about">
    <Navigation/>
    <h1>Welcome to Cashflow online. Sign up for free here.</h1>
    <Upload/>
    <Footer/>
  </div>
</template>

<script>
import Upload from '@/components/Upload.vue'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'


export default {
  name: 'dashboard',
  components: {
    Navigation,
    Upload,
    Footer,
  }
}
</script>

<style>
  * {
  margin: 0px;  
  }
</style>

