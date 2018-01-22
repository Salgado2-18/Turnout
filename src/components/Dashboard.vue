

<template>
<div id="dash" class="jumbotron">
  <h3> Events Dashboard</h3>
  <br>
  <hr>
  <AddEvents/>
  <hr>
  <div>
    {{$store.state}}
  </div>
  <br>
  <div>
    <button class="btn btn-danger btn-sm signout_btn" @click="signOut">Sign Out</button>
  </div>
</div>
</template>

<script>
import {
  firebaseApp,
  eventsRef
}
from '../firebaseApp'
import AddEvents from './AddEvents.vue'
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvents
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      console.log('events', events)
    })
  }
}
</script>
