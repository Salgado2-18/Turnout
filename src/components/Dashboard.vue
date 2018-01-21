<template>
<div id="dash" class="jumbotron">
  <h3> Events Dashboard</h3>
  <br>
  <div>
    {{$store.state}}
  </div>
  <br>
  <div> <button class="btn btn-danger btn-sm signout_btn" @click="signOut">Sign Out</button></div>
</div>
</template>
<script>
import {
  firebaseApp
} from '../firebaseApp'

export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  }
}
</script>
