<template>
<div id="dash" class="jumbotron form-inline">
  <h3>Sign Up</h3>
  <div class="form-group">
    <input type="text" placeholder="email" class="form-control" v-model="email" />
    <input type="password" placeholder="password" class="form-control" v-model="password" />
  </div>
  <div class="buttons">
    <button class="btn btn-success" @click="signUp">Sign Up</button>
    <br>
    <br>
    <br>
    <br>
    <p class="errorMessage">{{error.message}} </p>
    <br>
  </div>
</div>
</template>
<script>
import {
  firebaseApp
}
from '../firebaseApp'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(
          error => {
            this.error = error
          }
        )
    }
  }
}
</script>
