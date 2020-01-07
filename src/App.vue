<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/login">Login</router-link>
      <router-link to="/">System</router-link>
      <router-link to="/tenants/ent3">Tenant ent3</router-link>
      <router-link to="/tenants/ent3/groups/grp1">Group grp1 of ent3</router-link>
      <router-link to="/tenants/ent3/groups/grp1/users/bart.simpson@uc.mtn.com">Bart Simpson</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
