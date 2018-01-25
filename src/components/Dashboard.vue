

<template>
<div id="dash" class="jumbotron" style="overflow-y: scroll; height:400px;">
  <h3> Events Dashboard</h3>
  <br>
  <hr>
  <AddEvents/>
  <hr>
  <div class="col-md-12">
    <EventItem v-for="(event_item,index) in this.$store.state.events"
    :event="event_item"
    key="index"
    />
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
import EventItem from './EventItem.vue'
export default {
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
      firebaseApp.auth().signOut()
    }
  },
  components: {
    AddEvents,
    EventItem
  },
  mounted() {
    eventsRef.on('value', snap => {
      let events = []
      snap.forEach(event => {
        events.push(event.val())
      })
      this.$store.dispatch('setEvents', events)
    })
  }
}
</script>
