var check_duze = document.querySelector("#check_duze");
var check_male = document.querySelector("#check_male");
var check_cyfry = document.querySelector("#check_cyfry");
var check_specjalne = document.querySelector("#check_specjalne");
var check_polskie = document.querySelector("#check_polskie");
var input_dlugosc = document.querySelector("#input_dlugosc");
document.querySelector("#button_generuj").addEventListener("click",function(){
var zbior = "";
var zbior2 ="";
if(check_duze.checked == true){
zbior +="ZAQWSXCDERFVBGTYHNMJUIKLOP"
}
if(check_male.checked == true){
zbior +="zaqwsxcderfvbgtyhnmjuiklop"
}
if(check_cyfry.checked == true){
zbior +='123456789';
}
if(check_specjalne.checked == true){
zbior +="`~!@#$%^&*()-_+=|]}[{':;?/>.<,"
}
if(check_polskie.checked == true){
zbior +="żąśźćęńół"
}
for(let i = 0; i<input_dlugosc.value; i++){

zbior2 += zbior.charAt(Math.floor(Math.random() * zbior.length));
}
document.querySelector("#input_wynik").value = zbior2;
});
document.querySelector("#button_resetuj").addEventListener("click",function(){

check_duze.checked = false;
check_male.checked = false;
check_cyfry.checked = false;
check_polskie.checked = false;
check_specjalne.checked = false;
input_dlugosc.value="";
document.querySelector("#input_wynik").value = "";
});