// document object model
// alert("hello");

// let element = document.getElementById("container");
// let element = document.getElementsByClassName("container")[0];
// let element = document.getElementsByTagName("div")[0];
// let element = document.querySelector("div");
// let element = document.querySelectorAll("div")[0];
// let element = document.querySelector("div");
// element.children[0].textContent = "hello world";
// element.firstElementChild.textContent = "hello world";
// element.lastElementChild.textContent = "hello world";
// console.log(element);
// console.log(element.tagName);

// console.log(element.innerHTML);

// element.style.backgroundColor = "lightBlue";
// element.innerHTML =
// "hello world cwknvirsiu wefihwei ufsbgiewr biv i idsbi dbdi bdlibiar il";
// element.innerText = "Wkae";
// element.textContent =
// "lorem lorem lorem lorem loremlorem loremloremloremloremloremloremloremloremlorem";
let body = document.getElementsByTagName("body")[0];
console.log(body);
let element = document.createElement("h2");

body.append(element);
console.log(element);

element.innerText = "Hello JavaScript";
element.innerText += "from Kashmir";
