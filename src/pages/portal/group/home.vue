<template>
  <div>
    <h1>{{title}}</h1>
    <p>
      <ul>
        <li>tenant: {{tenant_id}}</li>
        <li>group: {{group_id}}</li>
      </ul>
    </p>
  </div>
</template>

<script>

export default {
  name: 'group_home',
  data () {
    return {
      title: 'Group home'
    }
  },
  computed:{
      group_id(){
        return this.$route.params.group_id;
      },
      tenant_id(){
        return this.$route.params.group_id;
      }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
