const sideNav = document.getElementById("sideNav");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click",function(){
 if(sideNav.style.right == "-250px"){
  sideNav.style.right = "0";
 }
 else{
  sideNav.style.right = "-250px";
 }
});

	var scroll = new SmoothScroll('a[href*="#"]',{
  spped:1000,
  speedAsDuration:true
 });
