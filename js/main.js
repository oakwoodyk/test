/* 木村回答案 */
const a = 103;
const b = 72;
const c = 189;

const getMax = (a, b, c)=>{
if (a > b && a > c){
console.log(`The maximum value is ${a}`);
}
else if (b > a && b>c){
console.log(`The maximum value is ${b}`);
}
else if (c > a && c > b) {
console.log(`The maximum value is ${c}`);
}
}

getMax(a,b,c);