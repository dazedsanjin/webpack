<template>
  <div id="app">
    <div class="message">{{ message }}</div>
    <div class="image">
      <img :src="Image" alt="图片" />
    </div>
  </div>
</template>
<script>
import './main.scss'
import Image from './images/image.png'
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello Vue',
      Image: Image
    }
  }
}
</script>
