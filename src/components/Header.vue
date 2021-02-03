<template>
  <div class="container">
    <section class="header">
      <div class="header__logo">
        <img class="logo" src="../assets/logo.png" />
        <p class="header__text">Cashflow Online</p>
      </div>
      <div class="header__social">
        <img class="header__social-a" src="../assets/icons/facebook.svg" />
        <img class="header__social-a" src="../assets/icons/twitter.svg" />
        <img class="header__social-a" src="../assets/icons/instagram.svg" />
      </div>
      <div class="header__navigation">
        <img
          class="header__navigation-burger"
          src="../assets/icons/burger-open.svg"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style>
.container {
  background: rgb(41, 196, 100);
}

.header {
  display: flex;
  justify-content: space-around;
}

.header__logo {
  display: flex;
  width: 250px;
  padding: 3px;
}

.logo {
  margin-top: 2px;
  height: 30px;
  width: 30px;
}

.header__text {
  font-family: "Helvetica";
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 10px;
  color: white;
}

.header__social {
  display: flex;
  justify-items: end;
  color: white;
}

.header__social-a {
  height: 20px;
  width: 20px;
  color: white;
  padding: 5px 0px 12px 0px;
  margin-right: 5px;
}

.header__navigation-burger {
  border: 1px solid white;
}
</style>
