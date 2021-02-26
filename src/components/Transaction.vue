<template>
    <div class="transaction">
        <div class="transaction__description">
            <p>{{description}}</p>
        </div>
        <div class="transaction__data">
            <h5>Amount:</h5>            
            <p>£{{amount}}</p>
            <h5>Type:</h5>            
            <p>{{type}}</p>
            <h5>Date:</h5>
            <p>{{date}}</p>
        </div>   
    </div>
</template>

<script>
export default {
  name: "transaction",
  props: ["type", "description", "date", "amount"],
};
</script>

<style lang="scss" scoped>
.transaction {
  background: white;
  height: 175px;
  width: 100%;
  color: white;
  font-size: 16px;
  border: 5px solid #42b983;
  margin-bottom: 50px;

  @media (min-width: 300px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__description {
    font-size: 32px;
    color: black
  }

  &__data {
    display: flex;
    justify-content: space-between;
    font-size: 32px;
    padding-top: 0px;
    margin: 0px 20px 0px 20px;
    color: black
  }
}
</style>