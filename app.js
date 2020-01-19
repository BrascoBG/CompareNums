function greaterNum([arg1,arg2]){
  let num1 = parseInt(arg1);
  let num2 = parseInt(arg2);

  if(num1 > num2){
    console.log(num1 + " is biggest");
  } else if(num1 < num2){
    console.log(num2 + " is biggest");
  } else {
    console.log("Ravni sa!");
  }
}

greaterNum([30,33]);
