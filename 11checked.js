const mycheck = document.getElementById("mycheck");
const myatm = document.getElementById("myatm");
const myvisa = document.getElementById("myvisa");
const submitbtn = document.getElementById("submitbtn");
const submitpara = document.getElementById("submitpara");
let icheckbox;
submitbtn.onclick = function(){
    if (mycheck.checked){
        submitpara.textContent=`subscribed`;
        
    }else {
        submitpara.textContent = "not subscibed";
    }

}