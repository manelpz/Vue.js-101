
<template>
    <div class="blogs">
        <h2>blogs</h2>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name:'Blogs',
        data(){
            return{
                
            }
        },
        methods:{
           
        },
        created(){
           axios.get('https://jsonplaceholder.typicode.com/posts/').then(response =>{
                console.log(response)   
            })
        }
        
    }
</script>