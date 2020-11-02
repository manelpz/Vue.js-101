
<template>
    <div class="blogs">
        <h2>{{blogTitle}}</h2>
        <button @click="changeTitle">change title</button>
    </div>
</template>


<script>
    export default{
        name:'Blogs',
        data(){
            return {
                blogTitle: 'Blogs'
            }
        },
        methods:{
            changeTitle(){
                this.blogTitle='Amazing blog site'
            }
        },
        beforeCreate(){
            alert('before create hook')
        },
        created(){
            alert('created hook')
        },
        beforeUpdate(){
            alert('beforeUpdate');
        }
        
    }
</script>