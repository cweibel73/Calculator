var innie=[];
var innit;
var onnit;
var longArr=[];
var tryIt=0;
var lastNum=1;


function workThru(longArr) {
  
  
  for(var i=0;i<longArr.length;i++) {
    if(longArr[i]==="*"||longArr[i]==="/") {
      var firstMul = parseFloat(longArr[i-1]);
      var secondMul = parseFloat(longArr[i+1]);
      if(longArr[i]==="*") {
      tryIt = firstMul * secondMul;
        } else if(longArr[i]==="/") {
          tryIt = firstMul / secondMul;
          }
      longArr.splice(i-1,3,tryIt);
      i = i - 1;
    }
  }
  
  for(var j=0;j<longArr.length;j++) {
    if(longArr[j]==="+"||longArr[j]==="-") {
      var firstNum = parseFloat(longArr[j-1]);
      var secondNum = parseFloat(longArr[j+1]);
      if(longArr[j]==="+") {
      tryIt = firstNum + secondNum;
        } else if(longArr[j]==="-") {
          tryIt = firstNum - secondNum;
          }
      longArr.splice(j-1,3,tryIt);
      j = j - 1;
    }
   
  }  
  
}

function clear() {
  $("#test").html(0);
  innie=[];
  longArr=[];
  lastNum=1;
}

 function clickity(num) {
   innie.push(num);
 $("#test").html(innie);
 lastNum = 0;
 }
$("#1").on("click",function() {
  clickity(1);
});
 

$("#2").on("click",function() {
  clickity(2);
});

$("#3").on("click",function() {
  clickity(3);
});

$("#4").on("click",function() {
 clickity(4);
});

$("#5").on("click",function() {
  clickity(5);  
});

$("#6").on("click",function() {
  clickity(6);
});

$("#7").on("click",function() {
  clickity(7); 
});

$("#8").on("click",function() {
  clickity(8);  
});

$("#9").on("click",function() {
  clickity(9);
});

$("#0").on("click",function() {
  clickity(0);  
});


$("#dec").on("click",function() {
  innie.push('.');
 $("#test").html(innie);
 lastNum = 0;  
});



$("#AC").on("click",function() {
  clear(); 
});
$("#CE").on("click",function() {
    if(lastNum===1) {
      longArr.pop();
      $("#test").html(longArr);
      innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
  workThru(longArr);
  lastNum = 0;
  innie=[longArr];
  longArr=[];
  
    } else {
      innie=[];
      lastNum=1;
    
    $("#test").html(longArr);  
    }
  });

  $("#plus").on("click",function() {
    if(lastNum===1) {
    clear();
  } else {
    innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
    longArr.push("+");
    $("#test").html("+");
    innie = [];
    lastNum = 1; 
  }
                
});

$("#minus").on("click",function() { 
   if(lastNum === 0) {
    innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
    longArr.push("-");
    $("#test").html("-");
    innie = [];
    lastNum = 1; 
     } else { 
       innie.push("-");
       $("#test").html(innie);
       lastNum = 0;
       } 
  
});

$("#mul").on("click",function() { 
  if(lastNum===1) {
    clear();
  } else {
    innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
    longArr.push("*");
    $("#test").html("&times");
    innie = [];
    lastNum = 1;  
  }
});

$("#div").on("click",function() { 
  if(lastNum===1) {
    clear();
  } else {
    innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
    longArr.push("/");
    $("#test").html("&divide");
    innie = [];
    lastNum = 1; 
}
             
});

$("#eq").on("click",function() { 
  if(lastNum===1) {
    clear();
  } else {
    innit = innie.join('');
    onnit = parseFloat(innit);
    longArr.push(onnit);
  
  workThru(longArr);
  

  $("#test").html(longArr);
  lastNum = 0;
  innie=[longArr];
  longArr=[];
  
  
  
  }
  
});