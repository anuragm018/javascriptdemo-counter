const btn1 =document.getElementById("btn1");
const label1 = document.getElementById("label1");
const max= 20;
const min =2;
let rannum;
btn1.onclick=function(){
rannum=Math.floor(Math.random()*max)+min;
 label1.textContent=rannum;

}



    
 