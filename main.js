// dom manipulation

// 1. selecting elements

// getElementById()
// const title = document.getElementById("main-heading");
// const secondTitle = document.getElementById("list");

// // getElementByClassName()
// const country = document.getElementsByClassName("country");

// //getElementByTagNsme()
// const input = document.getElementsByTagName("input");

// // querySelector()
// const title2 = document.querySelector("#main-heading"); // id(#)
// const countries = document.querySelectorAll(".country"); // class(.)
// const input2 = document.querySelector(".btn");
// const list = document.querySelector("li"); // tag()

// // querySelectorAll()
// const titleAll = document.querySelectorAll("#main-heading");
// const listAll = document.querySelectorAll("li");
// const countrieALL = document.querySelectorAll(".country");
// console.log(listAll);

// =========================================================================== //

// 2. styling elements

// const title = document.querySelector("#main-heading");
// title.style.color = "crimson"; // inliseStyle
// title.style.backgroundColor = "black";
// title.style.fontSize = "3rem";

// const countries = document.querySelectorAll(".country");
// for (let i = 0; i < countries.length; i++) {
//   countries[i].style.color = "hotPink";
//   countries[i].style.fontSize = "1.2rem";
// }

// ===========================================================================//

// 3. creating elementds

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// // li.innerText = "India";
// li.textContent = "India";

// // append
// // ul.append(li);
// // ul.appendChild(li)
// ul.insertAdjacentElement("beforeend", li);

// const ul = document.querySelector("ul");
// const li2 = document.createElement("li");

// li2.textContent = "Japan";

// ul.insertAdjacentElement("afterbegin", li2);

// const firstCountry = document.querySelector(".country");
// firstCountry.textContent = "BD";
// console.log(firstCountry);

// const countries = document.querySelectorAll("li");
// for (let i = 0; i < countries.length; i++) {
//   countries[3].textContent = "Russia";
// }

// const myCounttry = "Bangladesh";

// const container = document.querySelector(".container");
// container.innerHTML = `<h1 id="main-heading">Countries</h1>
//       <h2 id="list">List</h2>
//       <ul>
//         <li class="country">Bangldesh</li>
//         <li class="country">USA</li>
//         <li class="country">Canada</li>
//         <li class="country">Dubai</li>
//         <li class="country">UK</li>
//       </ul>
//       <input type="text" class="input" />
//       <button class="btn">Add Country</button>`;
// console.log(container.innerHTML);

// const h1 = document.querySelector("#main-heading");
// // h1.remove();
// h1.setAttribute("class", "main-hedding");
// h1.setAttribute("color", "red");
// console.log(h1.getAttribute("color"));
// h1.removeAttribute("class");
// h1.removeAttribute("color");

// h1.classList.add("main-heading", "first-country");
// h1.classList.remove("main-heading");

// if (a === 10) {
//   h1.classList.toggle("main-heading");
// }
// const a = 1;
// if (a) h1.classList.toggle("main-heading");
// console.log(h1.classList.toggle("main-heading"));

// ===========================================================================//

// 4. node traversole

// const ul = document.querySelector("ul");
// console.log(ul.parentElement);
// console.log(ul.parentNode);
// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// const h1 = document.querySelector("h1");
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);

// ===========================================================================//

// // 5. event handelers

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = input.value;
  li.classList.add = "country";
  ul.append(li);
  input.value = "";
});
