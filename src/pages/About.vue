<template>
<div id="about">
  <h1>About</h1>
  <dl>
    <dt>名前</dt>
    <dd>{{user.name}}</dd>
  </dl>
  <dl>
    <dt>部署</dt>
    <dd>{{user.department}}</dd>
  </dl>
  <router-link to="/setting">編集する</router-link>

</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style>
</style>
