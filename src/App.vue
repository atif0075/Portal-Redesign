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
* {
  font-family: "poppins";
  scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 8px;
}
body::-webkit-scrollbar-thumb {
  background: #616161;
  border-radius: 50px;
}
</style>
