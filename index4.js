// For迴圈

/*
let a = 10
a = a + 20
a += 20
console.log('a', a)
*/


 // i++ => i = i + 1
 // i+=2 => i = i + 2

/*
for(let i = 0; i < 10; i+=2){
    console.log('i:', i);
}
*/

//3個人的班級
//0 1 2 => classA的index


//let classA = [100, 70, 59]
//classA.push(40)
 //console.log(classA[0])
 //console.log(classA[1])
 //console.log(classA[2])
 //console.log(classA[3])
//for(let i = 0; i < classA.length; i++){
//    console.log('i:', classA[i]);
//}



//for(let i = 0; i < classA.length; i++) {
//    if (i === 2) {
//        classA[i] = 999
//    }
//}
//    console.log('classA', classA)


/*
const a1 = {
    name:'陳奕文',
    desc:'貼文1'
}

console.log(a1.name)    // a1的name是啥
console.log(a1.desc)    // a1的desc是啥

// [物件1, 物件2....]
const posts = [
    {
        name:'陳奕文',
        desc:'貼文1'
    },
    {
        name:'陳奕文2',
        desc:'貼文2'
    },
]

for(let i = 0; i < posts.length; i++){
    if( i === 1){
        let post = posts[i]
        console.log(post);
    }
}
*/

// While迴圈
// trager目標
/*
let condition = true
let traget = 10
let i = 0

while(condition){
    if(i === traget){
    condition = false
}
    console.log(i);
    i++
}
*/