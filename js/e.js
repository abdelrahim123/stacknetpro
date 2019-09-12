var d1 = document.getElementById('logInAppearance');
var d2 = document.getElementById('hiddenTitle');
var d3 = document.getElementById('hiddenLogIn');
var d4 = document.getElementById('close');
d1.onclick=function(){
    d3.style.display="block";
    d2.style.display="none";
}
d4.onclick=function(){
    d3.style.display="none";
    d2.style.display="block";
}
