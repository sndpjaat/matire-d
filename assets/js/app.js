const  menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");

menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden")
    menuList.classList.toggle("active");

}) 


const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn .tabbtn");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("active");
function clickhere(tabs) {
  tabcontant.forEach(e => e.style.display = "none");
  const selectcontant = document.getElementById(tabs)
  selectcontant.style.display = "block";
  const tabsactive = document.querySelectorAll(".allbtn .tabbtn")
  tabsactive.forEach(e => e.classList.remove("active"))
  const selecttab = document.querySelector(`.tabbtn[onclick = "clickhere('${tabs}')"]`)
  selecttab.classList.add("active")
}