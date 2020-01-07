<template>
  <div class="hello">
    <h1>Welcome to Thor</h1>
    <h2>Please login</h2>
    <ul>
      <li>
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" placeholder="username">
      </li>
      <li>
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" placeholder="password">
      </li>
      <li>
        <button v-on:click.prevent="login"> Login </button>
      </li>
      <li>
        {{msg}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data () {
    return {
      title: 'Welcome to Thor',
      username: "",
      password: "",
      msg: ""
    }
  },
  methods: {
      login: function(){
        var credentials = {
            "username": this.username,
            "password": this.password
        };
        // @TODO - extract to environment variables
        // @TODO - implement i18n
        axios
            .post("https://196.30.50.142/api/v01/auth/login",credentials)
            .then(
              response => {
                this.$store.commit('session/processLogin',response.data);
                this.$router.push({path: this.$store.getters['session/defaultRoute']});
              }
            )
            .catch(
              error => {
                switch(error.response.status){
                  case 401: 
                    //incorrect credentials
                    console.log("401 received")
                    this.msg = "Please provide valid credentials";
                    break;
                  default: 
                    console.log("other received")
                    this.msg = "Oops, something went wrong. Please try again";
                }
              }

            )
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}

</style>
