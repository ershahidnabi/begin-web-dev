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

// let body = document.getElementsByTagName("body")[0];
// console.log(body);
// let element = document.createElement("h2");

// body.append(element);
// console.log(element);

// element.innerText = "Hello JavaScript";
// element.innerText += "from Kashmir";

// create 3 divs with common class name box, access them and add some unique text to each of them

// let element = document.getElementsByClassName("box")[0];
// let elementa = document.getElementsByClassName("box")[1];
// let elementz = document.getElementsByClassName("box")[2];

// element.innerText = "hello world";
// elementa.innerText = "Asrar sir is the best";
// elementz.innerText = "asim";

//  getAttribute, setAttribute
// let element = document.getElementById("box1");
// element.setAttribute("class", "box8");

// let val = element.getAttribute("class");

// element.style.backgroundColor = "red";
// element.style.height = "100px";
// element.style.width = "100px";
// console.log(val);

// let element = document.createElement("div");

// append, prepend, before, after

// let element = document.getElementsByClassName("container");
// let newElement = document.createElement("div");
// console.log(newElement);
// body.append = "hello world";

// create a new btn element give it a text click me, bg red and textcolor white. insert btn as firstelement of body tag
// let element = document.querySelectorAll("container")[0];
// let newbtn = document.createElement("button");
// element.prepend(newbtn);
// console.log(element);
// newbtn.innerText = "Click Me";
// element.innerText = "hello world";

// create p tag in html, give it a class and some styling, now create a new class and try to append this class to p element using js

// const div = document.createElement("div");
// div.className = "foo";

// our starting state: <div class="foo"></div>
// console.log(div.outerHTML);

// // use the classList API to remove and add classes
// div.classList.remove("foo");
// div.classList.add("another-class");

// <div class="another-class"></div>;
// console.log(div.outerHTML);

// // if visible is set remove it, otherwise add it
// div.classList.toggle("visible");

// // add/remove visible, depending on test conditional, i less than 10
// div.classList.toggle("visible", i < 10);

// // false
// console.log(div.classList.contains("foo"));

// // add or remove multiple classes
// div.classList.add("foo", "bar", "baz");
// div.classList.remove("foo", "bar", "baz");

// // add or remove multiple classes using spread syntax
// const cls = ["foo", "bar"];
// div.classList.add(...cls);
// div.classList.remove(...cls);

// // replace class "foo" with class "bar"
// div.classList.replace("foo", "bar");
