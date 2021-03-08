<template>
  <div class="about">
    <Navigation/>
    <div class="welcome">
      <h3>Welcome to Cashflow online. </h3>
      <h3>Sign up for free here.</h3>
    </div>
    <div class="search">
      <div class="search__dropdown">
        <select  v-model="selected">
          <option v-for="transaction in transactions" v-bind:value="transaction.value">{{transaction.type}}</option>
        </select>
      </div>
      <div class="search__input">
        <input type="search" v-model="date">
      </div>
      <div class="search__button">
        <button @click="getCashflow()">Search</button>
      </div>
    </div>    
    <div class="error" v-if="this.errorMessage">
        <p class="errorText">Please enter date in YYYY-MM-DD format</p>
    </div>
    <div class="transaction">
      <Transaction v-for="data in this.finances" v-bind:value="data" v-bind:type="data.transaction_type" v-bind:description="data.transaction_description" v-bind:date="data.transaction_date" v-bind:amount="data.debited_amount"/>
      <div v-if="this.finances.length == 0 && this.searched">
        <p>No transactions available from this search</p>
      </div>
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
      selected: "dd",
      date: "",
      transactions: [
        {
          type: "Direct Debit",
          value: "dd",
        },
        {
          type: "Credit",
          value: "fpo",
        },
        {
          type: "Debited",
          value: "deb",
        },
        {
          type: "Transfer",
          value: "tfr",
        },
      ],
      searched: false,
      errorMessage: false
    };
  },
  methods: {
    async getCashflow() {
      this.validateSearch(this.date)

      this.finances = [];
      let url = `http://localhost:3000/api/cashflow/deb/2021-02-02`
      // let herokuURL = `https://cashflow-onlinee-api.herokuapp.com/api/cashflow/${this.selected}/${this.date}`;

      axios.get(url).then(response => {
        response.data.forEach(statement => {
          this.finances.push(statement);
        });
      });
      this.searched = true
    },
    async validateSearch(date) {
      let regex = /^\d{4}-\d{2}-\d{2}$/;
      
      if (!date.match(regex)) {
        this.errorMessage = true;
        return
      } else {
        this.errorMessage = false;
      }
    }
  },
  computed: {
    date: function() {
      return this.date
    }
  }
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

.search {
  display: flex;
  justify-content: center;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
  }

  &__dropdown {
    margin-right: 10px;
    
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  &__input {
    margin-right: 10px;
    
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  &__button {
    margin-right: 10px;
    
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}

.errorText {
  margin-top: 10px;
  color: red;
}
</style>

