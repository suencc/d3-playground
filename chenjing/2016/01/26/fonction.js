function multiply(a, b = 1) {
  return a*b;
}
function multiply2(multiplier,...theArgs){
  return theArgs.map(x=>multiplier*x);
}
multiply(5);
var arr=multiply(2,1,3);
console.log(arr);
