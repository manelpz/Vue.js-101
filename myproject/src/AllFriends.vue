<template>
    <div id="all-friends">
        <h2>all friends</h2>
        <div v-for="(friend, index) in friends" :key="index">
            <span>{{friend.name}}</span>
        </div>
    </div>
</template>


<script>
    export default {
        name:'AllFriends',
        data(){
           return{}
            }
        }
</script>



<style>

</style>