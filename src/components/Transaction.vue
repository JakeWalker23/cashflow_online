<template>
    <div class="transaction">
        <div class="transaction__description">
            <p>{{description}}</p>
        </div>
        <div class="transaction__data">
          <div class="transaction__amount">
            <p class="amount">Amount:</p>            
            <p>£{{amount}}</p>
          </div>
          <div class="transaction__type">
            <p class="type">Type:</p>            
            <p>{{type}}</p>
          </div>
          <div class="transaction__date">  
            <p class="date">Date:</p>
            <p>{{date}}</p>
          </div>
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
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
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

  @media(max-width: 750px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
  }

  &__description {
    font-size: 32px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media(max-width: 750px) {
      padding: 0;
      font-size: 1.5rem;
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__data {
    font-size: 32px;
    padding-top: 0px;
    margin: 0px 20px 0px 20px;
    color: black;

  @media(max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-end;    
    padding: 0;
    font-size: 16px;
    text-align: left;
    max-width: 250px;
    }

  @media(min-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: space-end;    
    padding: 0;
    font-size: 20px;
    text-align: left;
    max-width: 250px;
    }
  }

  &__amount {
    display: flex;
    
    @media (max-width: 750px) {
      display: flex;
      text-align: left;
    }
}

  &__type {
    display: flex;
  
    @media (max-width: 750px) {
      display: flex;
      text-align: left;
    }
}

  &__date {
    display: flex;
  
    @media (max-width: 750px) {
      display: flex;
      text-align: left;
      margin-left: 0;
    }
  }

  .amount {
    font-weight: bold;
    margin-right: 10px;
  }

  .type {
    font-weight: bold;
    margin-right: 10px;
  }

  .date {
    font-weight: bold;
    margin-right: 10px;
  }

}
</style>