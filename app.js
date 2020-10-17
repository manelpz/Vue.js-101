new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        wage: 10,
        name: 'emmanuel',
        url: 'http://www.youtube.com',
        classes: ['one', 'two'],
        coords:{
            x:0,
            y:0
        }
    },
    methods:{
        greet(time){
            return `Hello and good ${time}, ${this.name} `
        },
        changeWage(amount){
            this.wage += amount
        },
        logEvent(e){
            console.log(e);
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }
    }
})