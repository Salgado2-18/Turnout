

<template>
<div class="">
  <div>
    <h4>Adding new Events<input type="checkbox" v-model="showForm"></h4>
    <div class="form" v-if="showForm">
      <div class="form-group f1">
        <label>Title</label>
        <input type="text" class="form-control" v-model="event.title" />
      </div>
      <div class="form-group f1">
        <label>Description</label>
        <input type="text" class="form-control" v-model="event.description" />
      </div>
      <div class="form-group f1">
        <label>Date</label>
        <input type="date" class="form-control" v-model="event.date" />
      </div>
      <div class="form-group f1">
        <label>Location</label>
        <input type="text" class="form-control" v-model="event.location" />
      </div>
      <button class="btn-sm btn-success" @click="addEvent">Submit The Event</button>
    </div>
  </div>
</div>
</template>

<script>
import {
  eventsRef
} from '../firebaseApp'
export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        location: '',
        date: '',
        email: ''
      },
      showForm:false
    }
  },
  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event)
    }
  }
}
</script>
