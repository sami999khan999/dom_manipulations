// DOM manipulaton --

// selecting element {
// getElementById --
// getElementByClassName --
// getElementByTagName --
// querySelector --
// querySelectorAll --
// }

// styling element --

// creating element --

// // node traversals --

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // DOM manipulaton //

// // DOM manipulation in JavaScript involves modifying the content and structure of a webpage using the Document Object Model (DOM). The DOM is a programming interface for web documents, and it represents the web page as a hierarchical tree structure of nodes and objects that can be accessed and manipulated with JavaScript. //

// // DOM manipulation is commonly used to dynamically change the appearance and content of web pages in response to user interactions or other events. Some common tasks that can be performed with DOM manipulation include: //

// // 1. Changing the text or HTML content of an element //
// // 2. Adding or removing HTML elements from the page //
// // 3. Modifying the CSS styles of elements on the page //
// // 4. Adding or removing classes from elements on the page //
// // 5. Responding to user interactions, such as clicks or form submissions, by changing the page content dynamically //

// // DOM manipulation in JavaScript can be performed using a variety of methods, including selecting elements with CSS selectors, accessing and modifying element properties and attributes, and creating new HTML elements dynamically. Overall, DOM manipulation is a powerful tool for creating dynamic and interactive web pages with JavaScript. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // selecting element //

// // JavaScript can select HTML elements using a variety of methods, such as (getElementById), (getElementsByClassName), (querySelector), and (querySelectorAll). Once an element is selected, JavaScript can modify its content, attributes, or style using various DOM properties and methods. //

//============================================================================================================================================//

// // getElementById //

// // getElementById is a JavaScript method used to select a single element in the DOM (Document Object Model) by its unique ID attribute. The method takes a single argument, which is the ID of the element to select. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const title = document.getElementById("main-heading");

// console.log(title);

//============================================================================================================================================//

// // getElementByClassName //

// // getElementByClassName is a JavaScript method used to select one or more elements in the DOM (Document Object Model) based on their class name. The method takes a single argument, which is the name of the class or classes to select. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const countries = document.getElementsByClassName("country");

// console.log(countries);

//============================================================================================================================================//

// // getElementByTagName //

// // getElementsByTagName is a method in JavaScript that allows you to select one or more elements in the DOM (Document Object Model) based on their tag name.The method takes a single argument, which is the name of the tag or tags to select. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const input = document.getElementsByTagName("li");

// console.log(input);

//============================================================================================================================================//

// // querySelector //

// // querySelector is a method in JavaScript that allows you to select an element in the DOM (Document Object Model) based on a CSS selector. The method returns the first element that matches the specified selector.The method takes a single argument, which is the CSS selector to use. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const title = document.querySelector("#main-heading");
// // id = (#)
// console.log(title);

// const button = document.querySelector("button");
// // tag = ()
// console.log(button);

// const country = document.querySelector(".country");
// // class = (.)
// console.log(country);

//============================================================================================================================================//

// // querySelectorAll //

// // querySelectorAll is a method in JavaScript that allows you to select multiple elements in the DOM (Document Object Model) based on a CSS selector. The method returns a NodeList, which is an array-like object that contains all the elements that match the specified selector. The method takes a single argument, which is the CSS selector to use. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const country = document.querySelectorAll("li");

// console.log(country);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // styling element //

// // Styling elements in JavaScript involves manipulating the CSS properties of an element. There are several ways to apply styles to an element in JavaScript. //

//============================================================================================================================================//

const title = document.querySelector("#main-heading");

title.style.color = "lightgreen";
title.style.backgroundColor = "rgb(232, 243, 215)";
title.style.fontSize = "2rem";

const countries = document.querySelectorAll("ul");

for (let i = 0; i < countries.length; i++) {
  countries[i].style.color = "green";
  countries[i].style.marginTop = ".5rem";
  countries[countries.length - 1].style.marginBottom = "2rem";
  countries[0].style.marginTop = "2rem";
}

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // creating element //

// // To create a new element using DOM manipulation in JavaScript, we can use the createElement() method. This method creates a new element with the specified tag name. //

//============================================================================================================================================//

const ul = document.querySelector("ul");

//--------------------------------------------------------------------------------------------------------------------------------------------//

const li = document.createElement("li");
const li2 = document.createElement("li");

// createELement() methode creates an element //

//--------------------------------------------------------------------------------------------------------------------------------------------//

li.textContent = "India";
li2.innerText = "Japan";

// textContant and innerText property provides text for the selected element //

//--------------------------------------------------------------------------------------------------------------------------------------------//

ul.append(li);
ul.appendChild(li2);
// append() and appendChild() method add a element to the bottom of another element. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

ul.insertAdjacentElement("beforeend", li);
// insertAdjacentElement() element lets us choos a positon for the element theat we want to add //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const countries2 = document.querySelector("li");

countries2.innerText = "BD";
// we can change the value of an existing element. //

console.log(countries2.innerText);
console.log(countries2.textContent);

//--------------------------------------------------------------------------------------------------------------------------------------------//

const h1 = document.querySelector("h1");

h1.setAttribute("class", "main-heading");
// we can set calass or id (attribute) using setAttribute method //

li.setAttribute("class", "country");
li2.setAttribute("class", "country");

//--------------------------------------------------------------------------------------------------------------------------------------------//

const button = document.querySelector("button");

console.log(button.getAttribute("class"));
// we csn find attribute of any element using (getAttribute method . //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const h = document.querySelector("h1");

h.removeAttribute("class");
// we can remove an attribute using (removeAttribute)
console.log(h);

//--------------------------------------------------------------------------------------------------------------------------------------------//

const ul2 = document.querySelector("ul");

ul2.classList.add("countries");
ul2.classList.remove("countries");
// classList is used for adding ar removing one or more class in any element. //

const a = 10;

if (a <= 10) ul2.classList.toggle("countries");
// classList.toggle method allowa us add or remove class based on a condition. //

console.log(ul2.classList.contains("countries"));
// classlist.contains will provede us boolean output //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // node traversals //

// // DOM (Document Object Model) node traversals refer to the process of moving through the nodes of an HTML document in order to access or manipulate specific elements. //

//============================================================================================================================================//

const ul3 = document.querySelector("ul");

console.log(ul3.parentElement);
// parentElement is a property of a DOM node that returns the parent element node of the current element. //

console.log(ul3.parentNode);
// parentNode is a property of a DOM node that returns the parent node of the current node. //

console.log(ul3.childElementCount);
// childElementCount is a property of a DOM element node that returns the number of child elements that the element has.
//

console.log(ul3.childNodes);
// childNodes is a property of a DOM node that returns a collection of all child nodes of the current node, including element nodes, text nodes, comment nodes, and other types of nodes. //

console.log(ul3.children);
// children is a property of a DOM element node that returns a collection of all child element nodes of the current element. //

console.log(ul3.firstChild);
// firstChild is a property of the Node interface that represents the first child node of the current node. //

console.log(ul3.lastChild);
//  lastChild is a property of the Node interface that represents the last child node of the current node. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const heading = document.querySelector("h1");

console.log(heading.nextSibling);
//  nextSibling is a property that belongs to the Node interface and is used to access the next sibling node of the current node in the DOM (Document Object Model) tree. //

console.log(heading.previousSibling);
// previousSibling is a property that belongs to the Node interface and is used to access the previous sibling node of the current node in the DOM (Document Object Model) tree. //
console.log(heading.nextElementSibling);
// nextElementSibling is a property that belongs to the Element interface and is used to access the next sibling element node of the current element in the DOM (Document Object Model) tree. //

console.log(heading.previousElementSibling);
//  previousElementSibling is a property that belongs to the Element interface and is used to access the previous sibling element node of the current element in the DOM (Document Object Model) tree. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // event handeler //

// //  an event handler is a function that is called in response to a specific event occurring in the web page or web application. Event handlers are used to respond to user actions, system events, or other events that occur in the browser. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const ul4 = document.querySelector("ul");

btn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.classList.add("country");
  ul4.insertAdjacentElement("beforeend", li);
  li.textContent = input.value;
  input.value = "";
});
