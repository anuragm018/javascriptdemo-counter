const input = document.getElementById("input");
const submit=document.getElementById("submit");
const result = document.getElementById("result");
let age ;
 submit.onclick = function(){
    age =input.value;
    age = Number(age);
      if (age==0){
        result.textContent=`U R JUST BORNED `;
      }
      else if(age <18) {
        result.textContent=` U R NOT ALLOWED FOR THE APPLICATION `;
      }
      else{
        result.textContent=`U R ALLOWED FOR THE APPLICATION `
      }
    }
 
