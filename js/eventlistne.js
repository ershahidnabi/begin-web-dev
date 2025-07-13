// // let btn = document.querySelector("button");
// // btn.onmouseup = () => {
// //     console.log("hello");
// // };

// // btn.addEventListener("click", () => {
// //     alert("clicked");
// // });

// // btn.removeEventListener("click", () => {
// //     // alert("done");
// //     console.log("done");
// // });

// // const hello = () => {
// //     alert("button clicked");
// // };

// // btn.addEventListener("click", hello);

// // btn.removeEventListener("click", hello);

// // let para = document.createElement("p");
// // let btn = document.createElement("button");

// // para.innerText =
// //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda.";
// // btn.innerHTML = "Click Me";

// // document.querySelector("div").append(para);
// // document.querySelector("div").append(btn);
// // document.body.style.backgroundColor = "black";

// // para.style.backgroundColor = "red";
// // para.style.color = "white";
// // para.style.padding = "10px";

// // btn.onclick = () => {
// //     para.style.backgroundColor = "yellow";
// //     para.style.color = "purple";
// //     document.body.style.backgroundColor = "green";
// // };

// let para = document.createElement("p");
// let btn = document.createElement("button");

// para.innerText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, assumenda.";
// btn.innerHTML = "Click Me";

// document.querySelector("div").append(para);
// document.querySelector("div").append(btn);
// let mode = "light";
// const hello = () => {
//     if (mode === "dark") {
//         btn.innerHTML = "Dark Mode On";
//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//         console.log("dark mode");
//         mode = "light";
//     } else {
//         btn.innerHTML = "Light Mode On";
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";
//         mode = "dark";
//     }
// };
// btn.addEventListener("click", hello);

// 9-jul-25

// const obj = {
//     Name: "John Doe",
//     age: 30,
//     hello() {
//         console.log("Hello, " + this.Name);
//     },
// };
// // console.log(obj);

// const obj2 = {
//     hello2() {
//         console.log("hello");
//     },
//     Address: "Srinagar",
// };

// obj1.prototype = obj1;

// you are creating website for your clg, crate class user with 2 props name and ElementInternals. it also has a method called view data that allows user to view website data. create a new classs called admin which inherits from user, add a new method called editdata to admin that allows it to edit website data.
class User {
    constructor(name, ElementInternals) {
        this.name = name;
        this.ElementInternals = ElementInternals;
    }

    viewData() {
        console.log("Name: " + this.name);
        console.log("ElementInternals: " + this.ElementInternals);
    }
}

class Admin extends User {
    constructor(name, ElementInternals) {
        super(name, ElementInternals);
        this.role = "Admin";
    }
    editData(newElementInternals) {
        this.ElementInternals = newElementInternals;
        console.log("Website data edited by Admin: " + this.name);
    }
}
// Example usage
const admin1 = new Admin("Alice Johnson", "Initial Internals Data");
admin1.viewData();
admin1.editData("Updated Internals Data");
admin1.viewData();

const user1 = new User("John Doe", "Internals Data");
const user2 = new User("Jane Smith", "More Internals Data");
user1.viewData();
user2.viewData();
// console.log(user1);
// console.log(user2);
// user1.viewData();
// user2.viewData();
// user1.viewData = function() {
//     console.log("Name: " + this.name);
//     console.log("ElementInternals: " + this.ElementInternals);
// };
// user2.viewData = function() {
//     console.log("Name: " + this.name);
//     console.log("ElementInternals: " + this.ElementInternals);
// };
