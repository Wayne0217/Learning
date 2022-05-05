// setTimeout(wakeUpUser, 5000);
// function wakeUpUser() {
//     alert("你打算永遠盯著這個無聊的頁面嗎")
// }


// var age = 28
// var name = 'wayne'
// if(age < 18){
//     alert("抱歉,此頁禁止觀看")
// }   else {
//     alert("歡迎觀看")
// }


// let joke = 'js走進一間酒吧';
// let toldjoke = false;
// let punchine = '小心分號'
// let result

// if (toldjoke == true){
//     alert(punchine);
//       }  else{
//     alert(joke)
//       }


// let wnemovie = "競技星球";
// let movieticket$ = 5;
// if (movieticket$ >= 9){
//     alert("太多了")
// }   else {
//     alert("我們去看" + wnemovie)
// }


// let scoops = 5;
// while (scoops > 0){
//     document.write("來一球!<br>");
//     scoops = scoops - 1;
// }
// document.write("沒有冰淇淋的生活是灰色的");


// 99罐啤酒
// let word = "bottles";
// let count = 20;
// while(count > 0){
// console.log(count + " " + word + " of beer on the wall");
// console.log(count + " " + word + " of beer,");
// console.log("take one down, pass it around,");
// count = count - 1;
// if(count > 0){
//     console.log(count + " " + word + " of beer on the wall");
// }   else{
//     console.log("no more" + word + " of beer on the wall");
// } 
// }


// 戰艦遊戲 - 初版(0 - 7)
// let location1 = 4;
// let location2 = 5;
// let location3 = 6;
// let guess;
// let hits = 0;
// let guesses = 0;
// let isSunk = false

// while (isSunk == false){                                                                  // (迴圈)戰艦尚無被擊破
//     guess = prompt("準備，瞄準，射擊！ 輸入 0 ~ 6 的數字 :");                               // 顯示可輸入參數文字框
//     if(guess < 0 || guess > 6){                                                           // 如果guess(猜測數)小於0 或 大於6
//     alert("請輸入0 ~ 6");                                                                 // 顯示此文字框
//     }   else    {
//         guesses = guesses + 1;                                                            // 總猜測次數 +1
//         if(guess == location1 || guess == location2 || guess == location3){              // 如果猜到 第一台戰艦 或 第二台戰艦 或 第三台戰艦
//             alert("命中!")                                                               // 顯示此文字框
//             hits = hits + 1;                                                            // 命中次數 +1
//         if (hits == 3){                                                                 // 如果命中數是3
//             isSunk = true                                                               // 戰艦全數擊破
//             alert("你擊破了戰艦!!");                                                     // 顯示此文字框
//             }
//         }   else    {
//             alert("未命中")
//         }
//     }
// }
// let stats = "你猜了 " + guesses + "次擊沉戰艦" + 
//             "你的射擊準確率為 " + (3 / guesses);
//     alert(stats);


// 戰艦遊戲 - 射擊5次隨機位置版(0 - 49)
// let randomLoc = Math.floor(Math.random() * 50);
// let location1 = randomLoc;
// let location2 = location1 + 1;
// let location3 = location2 + 1;
// let location4 = location3 + 1;
// let location5 = location4 + 1;
// let guess;
// let hits = 0;
// let guesses = 0;
// let isSunk = false

// while (isSunk == false){
//     guess = prompt("準備，瞄準，射擊！ 輸入 0 ~ 49 的數字 :");
//     if(guess < 0 || guess >= 50){
//     alert("請輸入0 ~ 49");
//     }   else    {
//         guesses = guesses + 1;
//         if(guess == location1 || guess == location2 || guess == location3 || guess == location4 || guess == location5 ){
//             alert("命中!")
//             hits = hits + 1;
//         if (hits == 5){
//             isSunk = true
//             alert("你擊破了戰艦!!");
//             }
//         }   else    {
//             alert("未命中")
//         }
//     }
// }
// let stats = "你猜了 " + guesses + "次擊沉戰艦" + 
//             "你的射擊準確率為 " + (5 / guesses);
//     alert(stats);


// function doIt(param){
//     param = 2;
// }
// let test = 1;
// doIt(test);
// console.log(test);


// function dogYears(dogName, age){
//     let years = age * 7;
//     console.log(dogName, "is", years, "years old");
// }
// let myDog = "Fido";
// dogYears(myDog, 4);
// //分隔
// function makeTea(cups, tea){
//     console.log("Brew", cups, "cups of", tea);
// }
// let guests = 3;
// makeTea(guests, "Earl Grey");
// //分隔
// function secret(){
//     console.log("Wooooooooooo!");
// }
// secret();
// //分隔
// function speak(kind){
//     let defaultSound = "";
//     if (kind == "dog"){
//         alert("Woof")
//     }   else if (kind == "cat"){
//         alert("Meow");
//     }   else {
//         alert(defaultSound);
//     }
// }
// let pet = prompt("Enter a type of pet: ")
// speak(pet);


// function bake(degrees){
//     let message;

//     if (degrees > 500){
//         message = "我不是一個核反應堆!";
//     }   else if (degrees < 100){
//         message = "我不是一台冰箱!";
//     }   else    {
//         message = "對我來說，這是一個非常適合的溫度。";
//     }
//     return message;
// }
// let status = bake(350);


// let avatar = "generic";
// let skill = 1.0;
// let pointsPerLevel = 1000;
// let userPoints = 2008;

// function getAvatar(points){
//     let level = points / pointsPerLevel;
    
//     if(level == 0){
//         return "Teddy bear";
//     }   else if(level == 1){
//         return "Cat"
//     }   else if(level >= 2){
//         return "Gorilla"
//     }
// }

// function updatePoints(bonus, newPoints){
//     let i = 0
//     while(i <bonus){
//         newPoints = newPoints + skill * bonus;
//         i = i + 1;
//     }
//     return newPoints + userPoints;
// }

// userPoints = updatePoints(2, 100);
// avatar = getAvatar(2112);


// let balance = 10500;
// let cameraOn = true;

// function steal(balance, amount){
//     cameraOn = false;
//     if (amount < balance){
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }
// let amount = steal(balance, 1250);
// alert("Criminal: you stole", amount, "!")


//自動短語產生器
// function makePhrases(){
//     let words1 = ["你", "我", "他", "他們", "你們", "我們"];
//     let words2 = ["要", "不要", "快要", "想要", "不需要", "快要"];
//     let words3 = ["吃飯", "喝水", "睡覺", "洗澡", "休息", "上班"];

//     let rand1 = Math.floor(Math.random() * words1.length);
//     let rand2 = Math.floor(Math.random() * words2.length);
//     let rand3 = Math.floor(Math.random() * words3.length);

//     let phrase = words1[rand1] + words2[rand2] + words3[rand3];
//     alert(phrase);
// }
// makePhrases();


//陣列之表格
// let scores = [7, 2, 6, 10, 25, 53, 60, 19, 22, 11, 23, 25, 53, 10, 6,
//                  19, 11, 23, 53, 10, 21, 60, 82, 46, 50];
// for(let i = 0; i < scores.length; i++){
//     let output = "物品編號#" + i + " " +  "scores:" + scores[i];
//     console.log(output);
// }


//陣列之表格兼抓取最大值
// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 
//               54, 48, 69, 34, 55, 51, 52, 44, 51,
//               69, 64, 66, 55, 52, 61, 46, 31, 57,
//               52, 44, 18, 41, 53, 55, 61, 51, 44];
// var highscore = 0;
// var output;
// for(var i = 0; i < scores.length; i++){
//     output = "Bubble solution #" + i + " " + "score:" + scores[i];
//     console.log(output);
//     if (scores[i] > highscore){
//         highscore = scores[i];
//     }
//}
// console.log("Bubble tests:" + i);
// console.log("Highest bubble score:" + highscore); 

// var bestSolutions = [];
// for(var i = 0; i < scores.length; i++){
//     if(scores[i] == highscore){
//         bestSolutions[(scores[i])]
//     }
// }
// console.log("Solutions with the highest score: " + bestSolutions);





//99乘法表
// function multiply(a, b){
//     for(let a = 1; a <= 9; a++){
//       for(let b = 1; b <= 9; b++){
//           console.log(a + "*" + b +  "=" + a * b)
//       }
//     }
//   }  