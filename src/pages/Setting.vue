<template>
<div id='setting'>
  <h1>Setting</h1>
  <form action='/' method='get' @submit.prevent='updateUser'>
    <div>
      <label for='name'>名前</label>
      <input type='text' name='name' id='' v-model='name'>
    </div>
    <div>
      <label for='department'>部署</label>
      <input type='text' name='department' id='' v-model='department'>
    </div>
    <button>更新</button>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Setting',
  data: () => ({
    name: '',
    department: '',
  }),
  methods: {
    ...mapActions(['update']),
    updateUser() {
      const {name, department} = this
      const user = {
        name,
        department
      }
      this.update(user)
      this.$router.push('/about')
    }
  },
  created() {
    const {user} = this.$store.state
    this.name = user.name
    this.department = user.department
  }
}
</script>

<style>
</style>
