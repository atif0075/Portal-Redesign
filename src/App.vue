<template>
  <router-link to="/">Home</router-link>|
  <router-link to="/about">About</router-link>|
  <router-link to="/signin">SignIn</router-link>

  <router-view />
</template>
<script>

export default {
  name: "App",

};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap");
* {
  font-family: "Lato", sans-serif;
  scrollbar-width: 0;
}

*::-webkit-scrollbar {
  width: 0;
}
</style>
