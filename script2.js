let randomLoc = Math.floor(Math.random() * 50);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let location4 = location3 + 1;
let location5 = location4 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false

while (isSunk == false){
    guess = prompt("準備，瞄準，射擊！ 輸入 0 ~ 49 的數字 :");
    if(guess < 0 || guess >= 50){
    alert("請輸入0 ~ 49");
    }   else    {
        guesses = guesses + 1;
        if(guess == location1 || guess == location2 || guess == location3 || guess == location4 || guess == location5 ){
            alert("命中!")
            hits = hits + 1;
        if (hits == 5){
            isSunk = true
            alert("你擊破了戰艦!!");
            }
        }   else    {
            alert("未命中")
        }
    }
}
let stats = "你猜了 " + guesses + "次擊沉戰艦" + 
            "你的射擊準確率為 " + (5 / guesses);
    alert(stats);