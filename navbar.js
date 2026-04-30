const menuRightSide = document.getElementById("menuRightSide");
const rightSide = document.getElementById("rightSide");

menuRightSide.addEventListener("click",() => {
    rightSide.classList.toggle("active");
});