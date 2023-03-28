console.log("<<< 1");

function counter(){
    for (let i = 3; i <= 13; i++){
        console.log(i);
    }
}
counter();

console.log("<<< 2");

function numberTen(number){
    for (let n = 0; n < 10; n++){
        console.log(number);
    }
}
numberTen(10);

console.log("<<< 3");

function plusNumber(a, b){
    if (a > b){
        console.log(a);
    }
    else {
        console.log(b);
    }
}
plusNumber(14, 13);