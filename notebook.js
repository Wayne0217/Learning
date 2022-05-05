//備忘錄
const content = document.getElementById('content')
const date = document.getElementById('date')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')

const listContent = []

// class RanderFeature{
//     append(){

//     }
//     rander(){
//         //渲染頁面的list
//     let htmlStr = ''
    
//     listContent.forEach(function(item){
//         htmlStr = htmlStr + `
//         <div class='item'>
//             <div>
//                 <p>內容：${item.content}</p>
//                 <p>時間：${item.date}</p>
//             </div>
//             </div>
//         `
//     })
//         list.innerHTML = htmlStr
    
//     }
// }

// const r1 = new RanderFeature()

function rander(){
    //渲染頁面的list
let htmlStr = ''

listContent.forEach(function(item){
    htmlStr = htmlStr + `
    <div class='item'>
        <div>
            <p>內容：${item.content}</p>
            <p>時間：${item.date}</p>
        </div>
        </div>
    `
})
    list.innerHTML = htmlStr

}

addedBtn.addEventListener('click', function(){

    listContent.push({
        content: content.value,
        date: date.value
    })

    rander()
})

deletedBtn.addEventListener('click', function(){
listContent.shift()

    rander()
})