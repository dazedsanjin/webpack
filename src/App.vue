<template>
  <div id="app">
    <div class="message">{{ message }}</div>
  </div>
</template>
<script>
import './main.scss'
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue'
    }
  }
}
</script>
