let x = [];
let o = [];
let i = 1;
let turn = 1;

function insert(index){  
  if(turn%2===0){
document.getElementById(index).innerHTML = "X";
turn += 1;
i += 1;
 x[i] = index ;
console.log(x);
checkX();
  }
  else{
document.getElementById(index).innerHTML = "O";
turn += 1;
i += 1;
o[i] = index ;
console.log(o);
checkY();
}

}
function checkX(){
  if((x.includes(0)===true && x.includes(1)===true&& x.includes(2)===true) ||
 ( x.includes(3)===true && x.includes(4)===true && x.includes(5)===true )||
 ( x.includes(6)===true && x.includes(7)===true && x.includes(8)===true )||
 ( x.includes(0)===true && x.includes(3)===true && x.includes(6)===true) ||
 ( x.includes(1)===true && x.includes(4)===true && x.includes(7)===true) ||
 ( x.includes(2)===true && x.includes(5)===true && x.includes(8)===true )||
 ( x.includes(2)===true && x.includes(4)===true && x.includes(6)===true )||
 ( x.includes(0)===true && x.includes(4)===true && x.includes(8)===true)){
document.getElementById("cross").style.display = "inline";
  }
}

function checkY(){
  if((o.includes(0)===true && o.includes(1)===true && o.includes(2)===true) ||
  (o.includes(3)===true && o.includes(4)===true && o.includes(5)===true) ||
  (o.includes(6)===true && o.includes(7)===true && o.includes(8)===true) ||
  (o.includes(0)===true && o.includes(3)===true && o.includes(6)===true) ||
  (o.includes(1)===true && o.includes(4)===true && o.includes(7)===true) ||
  (o.includes(2)===true && o.includes(5)===true && o.includes(8)===true) ||
  (o.includes(2)===true && o.includes(4)===true && o.includes(6)===true) ||
  (o.includes(0)===true && o.includes(4)===true && o.includes(8)===true)){
document.getElementById("circle").style.display = "inline";
  }
}

/*
0 1 2
3 4 5
6 7 8*/