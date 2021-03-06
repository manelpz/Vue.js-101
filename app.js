new Vue({
    el: '#app',
    data: {
        title: 'Becoming a vue ninja',
        items:['mushroom','green shell','red shell','banana','start'],
        ninjas:[
            {name:'cristal', age: 25, belt:'black'},
            {name:'ryu', age: 20, belt:'yellow'},
            {name:'ken', age: 12, belt:'black'}
        ],
        wage: 10,
        name: 'emmanuel',
        showName:false,
        showAge: true,
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
        },
        updateName(e){
            //console.log(e.target.value)
            this.name = e.target.value
        },
        logMessage(){
            console.log('hello world')
        },
        toggleName(){
            this.showName = !this.showName
        },
        toggleAge(){
            this.showAge = !this.showAge
        }
    }
})