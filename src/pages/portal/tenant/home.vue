<template>
  <div>
    <h1>{{title}}</h1>
    <p>
      <ul>
        <li>tenant: {{tenant_id}}</li>
      </ul>
    </p>
  </div>
</template>

<script>

export default {
  name: 'tenant_home',
  data () {
    return {
      title: 'Tenant home'
    }
  },
  computed:{
      tenant_id(){
        return this.$route.params.tenant_id;
      }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
