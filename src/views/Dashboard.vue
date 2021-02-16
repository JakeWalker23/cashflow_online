<template>
  <div class="about">
    <Navigation/>
    <h3>Welcome to Cashflow online. </h3>
    <h3 class="welcome">Sign up for free here.</h3>
    <select v-model="selected">
      <option v-for="transaction in transactions" v-bind:value="transaction.value">{{transaction.type}}</option>
    </select>
    <button @click="getCashflow()">Search</button>
    <div class="transaction">
    <Transaction v-for="data in this.finances" v-bind:value="data" v-bind:type="data.transaction_type" v-bind:description="data.transaction_description" v-bind:date="data.transaction_date" v-bind:amount="data.debited_amount"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
import Footer from "@/components/Footer.vue";
import Transaction from "@/components/Transaction.vue";
import axios from "axios";

export default {
  name: "dashboard",
  components: {
    Footer,
    Transaction,
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
      this.finances = [];

      let herokuURL = `https://cashflow-onlinee-api.herokuapp.com/api/cashflow/${
        this.selected
      }`;

      axios.get(herokuURL).then(response => {
        response.data.forEach(statement => {
          this.finances.push(statement);
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0px;
}


.transaction {
  margin-top: 10px;
}


.welcome {
  margin-bottom: 16px;
}
</style>

