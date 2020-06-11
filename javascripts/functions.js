// jshint esversion: 7

//Req. 3b
let arrAvg = (arr) => {
  let sum = 0;
  let average = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;
  return average;
};

// Req. 3c
let arrMax = (arr) => {
  var maxN = arr[0];
  arr.forEach(m => {
    if(m > maxN) {
      maxN = m;
    }
  });
  return maxN;
};
 //Req. 3d
 let sumEvens = (arr) => {
   var sum = 0;
   for(var num of arr) {
     if(num%2 == 0)
     sum = sum + num;
   }
   return sum;
 };

//Req. 3e
function alphaPosition(ch) {
  ch.split(' ').join('');
  var chari = "";
  var arr = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  for(var i = 0; i < ch.len; i++){
    chari = ch.charAt(i).toLowerCase();
    if(alphabet.indexOf(chari) > -1){
      arr.push(alphabet.indexOf(chari));
    }
  }
  return arr;
}
console.log(alphaPosition(""));
