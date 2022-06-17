let dropDownContainer = document.querySelector('#drop-down-input');
let dropDownMenu = document.querySelector('#drop-down-menu');



dropDownContainer.addEventListener("click", () => {
  if(dropDownMenu.classList.contains("retract"))
  {
    dropDownMenu.style.display = "flex";

    
    setTimeout(() => {
      dropDownMenu.classList.remove("retract");
        dropDownMenu.classList.add("display");
    }, 200);
  

  } else {
    dropDownMenu.classList.remove("display");
    dropDownMenu.classList.add("retract");

    setTimeout(() => {
      dropDownMenu.style.display = "none";
    }, 200);
  }
})