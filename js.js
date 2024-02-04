let numOne = document.querySelector(".input_number_one");
let numTwo = document.querySelector(".input_number_two");
let btn = document.querySelector(".button");
let span = document.querySelector(".span");
let select = document.querySelector(".select");

btn.onclick = function () {
  num1 = parseInt(numOne.value);
  num2 = parseInt(numTwo.value);
 
  let res;
  switch (select.value) {
    case "plus":
      res = num1 + num2;
      break;
      case "minus":
        res = num1 - num2;
        break;
        case "multiply":
            res = num1 * num2;
            break;
            case "share":
                res = num1 / num2;
                break;
  }
  if(isNaN(res)){
    res='Некорректный ввод'
  }

 span.innerHTML =res;

};




