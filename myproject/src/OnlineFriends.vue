<template>
    <div id="online-friends">
        <h2>online friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span v-if="friend.online">{{friend.name}}</span>
        </div>
    </div>
</template>


<script>
    export default {
        name:'OnlineFriends',
        data(){
           return {}
        }
    }
</script>



<style>
    
</style>