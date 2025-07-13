let el1 = document.createElement("li");
el1.innerText = "El One"; //  first we ccreate an element   //   now we put content in the created element
document.getElementById("listId").append(el1); //  now we fetch parent tag where we want to put the created element

let el2 = document.createElement("li");
el2.innerText = "El Two is in body outside of parent container"; //  first we ccreate an element   //   now we put content in the created element
document.body.append(el2);

let el3 = document.createElement("li");
el3.innerText = "el three";
document.querySelector("ul").appendChild(el3);

let el4 = document.createElement("li");
el4.innerText = "el four";
// getElementsByClassName returns a live HTMLCollection — use [0] to get the first match
document.getElementsByClassName("listClass")[0].append(el4);

el5 = document.createElement("li");
el5.innerText = "el five";
document.getElementsByTagName("ul")[0].append(el5);
