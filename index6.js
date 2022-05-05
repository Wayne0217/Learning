// 構造函數 function (進階)

// function createCard(initname){
//    this.name = initname
// }
// const a1 = new createCard('陳奕文')
// console.log('a1', a1);

// class的基本操作

// class Card {
//     constructor (initName) {
//         this.name = initName
//     }
// }
// const c1 = new Card("陳奕文")
// console.log('c1', c1);
// console.log(c1.name);
// 與上 function 相同

// this 對象取決於當下執行的環境是誰 this就是誰
// Card 物件

// class Card {
//     constructor (initName) {
//         this.name = initName
//         // this
//         // this.hello = this.hello.bind(this)
//     }

//     hello = () => {
//         console.log("hello", this.name);
//     }
// }

// const c1 = new Card("陳奕文")
// console.log('c1', c1);
// c1.hello()

// const a = { name : 'AA' }
// a.hellooo = c1.hello
// a.hellooo()

//  繼承
// class Car {
//     constructor(initName){
//         this.name = initName
//     }
//     start () {
//         console.log('車子啟動');
//     }
// }

// class Porshe extends Car{
//     constructor(namePorshe) {
//         super(namePorshe)
//     }

//     start2() {
//         super.start()
//         console.log('車子排氣');
//     }

//     start() {
//         super.start()
//         console.log('porshe車子啟動');
//     }
// }

// const p1 = new Porshe("陳奕文的porshe")
// p1.start()
// console.log('name',p1.name);