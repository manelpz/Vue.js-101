<template>
  <div id="app">
 <h1>{{title}}</h1>
 <Navbar/>
 <AllFriends/>
 <OnlineFriends/>

  <nav>
      <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
      </ul>
  </nav>

  </div>
</template>

<script>
import Navbar from './Navbar'
import AllFriends from './AllFriends'
import OnlineFriends from './OnlineFriends'

export default {
  name: 'app',
components:{
  Navbar,
  AllFriends,
  OnlineFriends
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
