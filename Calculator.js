let outputScreen = document.getElementById("output-screen");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
  
button.addEventListener('click', (e) =>{
if(e.target.innerHTML == '='){
string = eval(string);
outputScreen.value = string;
}

else if(e.target.innerHTML == 'AC'){
string = "";
outputScreen.value = string;
}

else if(e.target.innerHTML == '%'){
string = string * 0.01;
outputScreen.value = string;
}

else if(e.target.innerHTML == 'DEL'){
  string = string.substring(0, string.length -1);
  outputScreen.value = string;
}

  else if(e.target.innerHTML == 'x'){
    string += "*";
    outputScreen.value = string;
  }

  else if(e.target.innerHTML == '÷'){
    string += '/';
    outputScreen.value = string;
  }

  else{
    string += e.target.innerHTML;
    outputScreen.value = string;
  }

  })
})
  
