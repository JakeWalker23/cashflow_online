<template>
  <div class="about">
    <Navigation/>
    <h3>Welcome to Cashflow online. </h3>
    <h3 class="welcome">Sign up for free here.</h3>
    <select v-model="selected">
      <option v-for="transaction in transactions" v-bind:value="transaction.value">{{transaction.type}}</option>
    </select>
    <button @click="getCashflow()">Search</button>
    <h5>{{this.finances}}</h5>
    <Upload/>
    <Footer/>
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
import Footer from "@/components/Footer.vue";
import axios from 'axios';

export default {
  name: "dashboard",
  components: {
    Upload,
    Footer,
  },
  data() {
    return {
      finances: [],
      selected: "DD",
      transactions: [
        {
          type: "Direct Debit",
          value: "DD",
        },
        {
          type: "Credit",
          value: "FPO",
        },
        {
          type: "Debited",
          value: "DEB",
        },
        {
          type: "Transfer",
          value: "TFR",
        },
      ],
    };
  },
  methods: {
    async getCashflow() {
      // let url = `http://localhost:3000/api/cashflow/${this.selected}`;
        this.finances = []

      let herokuURL = `https://cashflow-onlinee-api.herokuapp.com/api/cashflow/${this.selected}`;
      
      this.axios.get(herokuURL).then(response => {
        response.data.forEach(statement => {
          this.finances.push(statement);
        });
      });
    },
  },
};
</script>

<style>
* {
  margin: 0px;
}

.welcome {
  margin-bottom: 16px;
}
</style>

