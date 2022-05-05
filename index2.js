//物件 Array大批
let classA = ['小明', '小白', '小華', ]
console.log('轉學前：', classA)

classA.push('小馬')
console.log('轉學後：', classA)

//陣列
let igPhotos = ['https://xx.img.com/a1.png',
                'https://xx.img.com/a2.png',
                'https://xx.img.com/a3.png'
]

console.log('第1筆', igPhotos[0])
console.log('第2筆', igPhotos[1])
console.log('第3筆', igPhotos[2])
console.log('第3筆', igPhotos[4])


//TODO del
//console.log('igPhotos', igPhotos)
//console.log('igPhotos', igPhotos.length)

//長度
//TODO del
//console.log(classA, length)

//物件 Object
const card = {
    name: '陳奕文前端的名片',
    address:'台中市北區文昌東二街',
    age:'28',
}

console.log('名字', card.name)  // . => card的name

const post = {
    image: 'https://xx.img.com/a1.png',
    desc: '今天生日很開心',
    dates: '2022/02/17',
    Comment:['真好', '恭喜生日', ],
}

const post2 = {
    image: 'https://xx.img.com/a1.png',
    desc: '今天生日很開心',
    dates: '2022/02/19',
    Comment:['真好', '恭喜生日', '恭喜生日' ,'恭喜生日'],
}

const wall = [
    post,
    post2,
]

console.log(wall)