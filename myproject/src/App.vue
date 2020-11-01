<template>
  <div id="app">
 <h1>{{title}}</h1>
 <Navbar/>
 <AllFriends :friends="friends" @delete="deleteFriend"/>
 <OnlineFriends :friends="friends"/>

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
      title: 'my first vue app',
      friends: [
          {name: 'Mario', online: true},
          {name: 'luigi', online: false},
          {name: 'toad', online: true},
          {name: 'bowser', online: false}
      ]
            
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name
      })
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
