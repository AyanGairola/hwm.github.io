var selectField=document.getElementById("selectField");
var selectText=document.getElementById("selectText");
var options= document.getElementsByClassName("options");
var list=document.getElementById("list");
var arrowIcon=document.getElementById("arrowIcon")

var selectField2=document.getElementById("selectField2");
var selectText2=document.getElementById("selectText2");
var options2= document.getElementsByClassName("options2");
var list2=document.getElementById("list2");
var arrowIcon2=document.getElementById("arrowIcon2")

selectField.onclick=function(){
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate")
}
selectField2.onclick=function(){
    list2.classList.toggle("hide");
    arrowIcon2.classList.toggle("rotate")
}

function handleOptionClick(options, selectText, list, arrowIcon) {
    for (const option of options) {
       option.addEventListener("click", function() {
          selectText.innerHTML = this.textContent;
          list.classList.toggle("hide");
          arrowIcon.classList.toggle("rotate");
       });
    }
 }
 
 handleOptionClick(options, selectText, list, arrowIcon);
 handleOptionClick(options2, selectText2, list2, arrowIcon2);
 





