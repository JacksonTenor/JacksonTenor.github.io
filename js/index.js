var num = [];
var numbers = [];
var operations = [];
var deci = false;
var carry = false;

function number (n){
  if (carry == false){
    num.push(n);
    document.getElementById("display").innerHTML = num.join("");
  }else{
    num=[];
    carry=false;
    number(n);
  }
}

function sum() {
  if(num.length !== 0){
    numbers.push(parseFloat(num.join("")));
    num = [];
    while (operations.indexOf("m") != -1 && operations.indexOf("d") != -1) {
      if (operations.indexOf("m") < operations.indexOf("d")){
        var i = operations.indexOf("m");
        operations.splice(i, 1);
        var ans = numbers[i] * numbers[i+1];
        numbers.splice(i, 2, ans);
      }else {
        var i = operations.indexOf("d");
        operations.splice(i, 1);
        var ans = numbers [i] / numbers[i+1];
        numbers.splice(i, 2, ans);
      }
    }
    while (operations.indexOf("m") != -1){
      var i = operations.indexOf("m");
      operations.splice(i, 1);
      var ans = numbers[i] * numbers[i+1];
      numbers.splice(i, 2, ans);
    }
    while (operations.indexOf("d") != -1){
      var i = operations.indexOf("d");
      operations.splice(i, 1);
      var ans = numbers[i] / numbers[i+1];
      numbers.splice(i, 2, ans);
    }
    while (operations.indexOf("a") != -1){
      var i = operations.indexOf("a");
      operations.splice(i, 1);
      var ans = numbers[i] + numbers[i+1];
      numbers.splice(i, 2, ans);
    }
    while (operations.indexOf("s") != -1){
      var i = operations.indexOf("s");
      operations.splice(i, 1);
      var ans = numbers [i] - numbers[i+1];
      numbers.splice(i, 2, ans);
    }
    document.getElementById("display").innerHTML = (Math.round(numbers * 1000) /1000);
    num = numbers.toString().split("");
    numbers = [];
    operations = [];
    deci = false;
    carry = true;
  }
}

function operator(op){
  if(num.length !== 0){
    operations.push(op);
    numbers.push(parseFloat(num.join("")));
    num = [];
    deci = false; 
  }
}

function decimal () {
  if (deci == false){
    num.push(".");
    deci = true;
    document.getElementById("display").innerHTML = num.join("");
  }
}

function clearAll(){
  num = [];
  numbers = [];
  operations = [];
  deci = false;
  carry = false;
  document.getElementById("display").innerHTML = 0;
}

function clearExp(){
  if(num.length == 0){
    clearAll();
  }else{
    num = [];
    deci = false;  
    carry = false;
  }
  document.getElementById("display").innerHTML = 0;
}
