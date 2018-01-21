

<template>
<div id="dash" class="jumbotron form-inline">
  <h3>Sign in.</h3>
  <div class="form-group">
    <input type="text" placeholder="email" class="form-control" v-model="email" />
    <input type="password" placeholder="password" class="form-control" v-model="password" />
  </div>
  <div>

    <button class="btn btn-success" @click="initJokes"> Add 10 random jokes..</button>
    <button class="btn btn-warning" @click="addJoke"> Add random joke..</button>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
