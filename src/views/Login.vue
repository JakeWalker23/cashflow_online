<template>
  <div class="container">
    <div class="items">
      <div class="logins">
        <h1 class="header">Cashflow</h1>
        <h4>Cashflow helps you control your finances.</h4>  
      </div>
      <div class="login">
            <input class="login__email" placeholder="email" v-model="email"/>
            <input class="login__password" placeholder="password" v-model="password"/>
            <div>
                <button class="login__submit" type="Submit" @click="login">Log in</button>
            </div>
        </div>
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

.logins {
  border: 1px solid white;

  @media (min-width: 500px) {
    margin-right: 100px;
    }
  }

.header {
    color: #42b983;
    font-size: 50px;
}

 .container {
      max-width: 1200px;
      display: flex;
      justify-content: center;
  }

  .login {
      height: 180px;
      width: 350px;
      padding-top: 20px;
      box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);
      -webkit-box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);
      -moz-box-shadow: 6px 4px 19px 0px rgba(0,0,0,0.77);

      &__email {
          width: 320px;
          border-radius: 6px;
          height: 40px;
          font-size: 20px;
          margin-bottom: 10px;
    }

      &__password {
          width: 320px;
          border-radius: 6px;
          height: 40px;
          font-size: 20px;
          margin-bottom: 10px;      
          
      }

      &__submit {
          border-radius: 6px;
          background:#42b983;
          width: 332px;
          height: 40px;
          color: white;
          font-size: 20px;
      }
  }

</style>


<script>
import Login from "@/components/Login.vue";
import firebase from "firebase/app";

export default {
    name: "login",
    components: {
        Login
    },
    data() {
      return {
        email: '',
        password: ''
    }
  },
    methods: {
      login: function() {
        console.log(this.email)
        console.log(this.password)
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log(user)
            this.$router.push('/dashboard');
        },
          (err) => {
            alert('Oops. ' + err.message)
            }
          );
        },
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
          })
          .catch(error => {
            alert(error.message);
            this.$router.push('/');
          });
  },
      }
    }
</script>

