<template>
    <div id="all-friends">
        <h2>all friends</h2>
        <div v-for="friend in friends">
            <span>{{friend.name}}</span>
        </div>
    </div>
</template>


<script>
    export default {
        name:'AllFriends',
        data(){
            return{
                friends: [
                    {name: 'Mario', online: true},
                    {name: 'luigi', online: false},
                    {name: 'toad', online: true},
                    {name: 'bowser', online: false}
                ]
            }
        }
    }
</script>



<style>

</style>