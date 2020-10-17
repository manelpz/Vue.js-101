new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        wage: 10,
        name: 'emmanuel',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods:{
        greet(time){
            return `Hello and good ${time}, ${this.name} `
        },
        changeWage(amount){
            this.wage += amount
        }
    }
})