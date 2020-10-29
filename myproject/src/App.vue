<template>
  <div id="app">
 <h1>{{title}}</h1>
  </div>
</template>

<script>
import Navbar from './Navbar'

export default {
  name: 'app',
components:{
  Navbar: Navbar
},
data () {
    return {
      title: 'my first vue app'
    }
  }
}
</script>

<style>
h1{
  color:#444;
  font-weight: normal;
  text-align: center;
}
</style>
