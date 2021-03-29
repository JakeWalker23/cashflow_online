<template>
  <div class="about">
    <Navigation />
    <div class="search">
      <div class="search__dropdown">
        <select v-model="selected">
          <option
            v-for="transaction in transactions"
            v-bind:value="transaction.value"
            >{{ transaction.type }}</option
          >
        </select>
      </div>
      <div class="search__input">
        <md-datepicker v-model="date" :md-model-type="String">
          <label>Select date</label>
        </md-datepicker>
      </div>
      <div class="search__button">
        <button @click="getCashflow()">Search</button>
      </div>
    </div>
    <div class="error" v-if="this.errorMessage">
      <p class="errorText">Please enter date in YYYY-MM-DD format</p>
    </div>
    <div class="cashflow" v-if="this.finances.length > 0">
      <div class="cashflow-calculation">
        <h4 class="calc">
          Cashflow: £{{
            this.finances[this.finances.length - 1]["cashflow"].toFixed(2)
          }}
        </h4>
      </div>
    </div>
    <div class="transaction">
      <Transaction
        v-for="data in this.finances"
        v-bind:value="data"
        v-bind:type="data.transaction_type"
        v-bind:description="data.transaction_description"
        v-bind:date="data.transaction_date"
        v-bind:amountIn="data.debited_amount"
        v-bind:amountOut="data.credited_amount"
      />
      <div v-if="this.finances.length == 0 && this.searched">
        <p>No transactions available from this search</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Upload from "@/components/Upload.vue";
import Footer from "@/components/Footer.vue";
import Transaction from "@/components/Transaction.vue";
import axios from "axios";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from 'vue'
import 'moment'

Vue.use(VueMaterial)

export default {
  name: 'LabeledDatepicker',
  name: "dashboard",
  components: {
    Footer,
    Transaction,
  },
  data() {
    return {
      finances: [],
      selected: "dd",
      selectedDate: null,
      date: "",
      transactions: [
        {
          type: "Direct Debit",
          value: "dd",
        },
        {
          type: "Payments In",
          value: "fpi",
        },
        {
          type: "Payments Out",
          value: "fpo",
        },
        {
          type: "Salary",
          value: "bp",
        },
        {
          type: "Debited",
          value: "deb",
        },
        {
          type: "Cash Withdrawal",
          value: "cpt",
        },
        {
          type: "Internal Transfers",
          value: "tfr",
        },
      ],
      searched: false,
      errorMessage: false,
    };
  },
  methods: {
    async getCashflow() {
      this.validateSearch(this.date);
        console.log(this.date)

      this.finances = [];
      let herokuURL = `https://cashflow-onlinee-api.herokuapp.com/api/cashflow/${this.selected}/${this.date}`;

      axios.get(herokuURL).then((response) => {
        response.data.forEach((statement) => {
          this.finances.push(statement);
        });
        console.log(this.finances);
      });
      this.searched = true;
    },
    validateSearch(date) {
      let regex = /^\d{4}-\d{2}-\d{2}$/;

      if (!date.match(regex) || date == null) {
        this.errorMessage = true;
        return;
      } else {
        this.errorMessage = false;
      }
    },
  },
  computed: {
    date: function() {
      return this.date 
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
    margin-top: auto;    

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
      border: 1px solid red;
    }
  }

  &__input {
    margin-right: 10px;
    margin-top: 0 auto;    
    
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
    }
  }

  &__button {
    margin-right: 10px;
    margin-top: auto;    

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}

.cashflow-calculation {
  font-size: 1.5rem;
  color: #42b983;
  text-decoration: underline;
}

.cashflow {
  text-align: left;
  margin-top: 20px;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
  }
}

.errorText {
  margin-top: 10px;
  color: red;
}
</style>
