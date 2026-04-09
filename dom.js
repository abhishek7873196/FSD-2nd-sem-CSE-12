let newheading =document.getElementById("heading");
newheading.textcontent="DOM manipulation in javaScript";
newheading.style.color="red";
newheading.style.fontSize="50px";

let paragraphs = document.getElementsByClassName("paragraph")
paragraphs[0].innerHTML="<strong>this paragraph has been updated using javaScript</strong>";
paragraphs[0].style.color="green";
paragraphs[0].style.fontSize="20px";

let newDiv=document.createElement("div");
newDiv.textContent="this is a new div elelment";
document.body.appendChild(newDiv);

function addList(list)
{
  let newList = document.createElement("11");

} 
