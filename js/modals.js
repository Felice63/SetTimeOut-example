// 1] Query all the elements with class="show-modal" using the querySelectorAll() method and store them in a variable named 'showModal'. This generates an iterable object called a 'NODELIST'. A Nodelist is a collection of references to HTML elements in an HTML document, but the NODE items are not HTML elements. They are points in the Document Object Model (DOM) representing the elements.Each node in the DOM is an object.

// querySelectorAll() and getElementsByTagName() are not JavaScript methods. They are part of the browser APIs that let you access DOM nodes. You can then manipulate them with JavaScript.

const showModal = document.querySelectorAll(".show-modal");

// 2] I used the 'for/of' loop instead of the forEach() method to iterate over each nodelist because it gets values instead of properties.
// 'for/of' works on any iterable object.
// The forEach() method is typically used with arrays because it works on the indvidual indices of the array, as well as values. This is the same with the for/in loop which is also used with indices and numeric keys. A NodeList is not an array, but it has indexes assigned to each node and the length property can be used as well.

// The main difference between NodeLists vs. Arrays is that NodeLists are a way to access DOM elements. The DOM is an API separate from JavaScript, and nodelists are not part of JavaScript.  Other languages can access the DOM besides JavaScript.

// Arrays, however, are a specific JavaScript object that contain indexed collections of data types. A NodeList may look like an array, but it is not. You can loop through a NodeList and refer to its nodes by index. But, you cannot use Array methods like push(), pop(), or join() on a NodeList.

// You can convert a NodeList to and actual Array literal by doing Array.from(NodeList)

// To show the Modal Pop-up window, the 'el' parameter represents the individual instance of each 'showModal' depending on which one is clicked. 'el' could be named anything. An arrow function is being used for simplicity.

// The <dialog> element is the pop-up modal. The open attribute is added on click

for (const el of showModal)
  el.addEventListener("click", () => {
    const getModal = document.querySelector(".modal");
    const addOpen = document.createAttribute("open");

    // Conditional to check whether the dialog element has the 'open' attribute and if not, then add it
    if (getModal.hasAttribute("open") === false) {
      getModal.setAttributeNode(addOpen);
    }

    // Define and capture the values from the data-* attributes in the <section> elements that have class='show-modal'.
    // Remember, 'el' represents each individual instance of a clickable element
    const projName = el.dataset.name;
    const projDescript = el.dataset.description;
    const projImg = el.dataset.img;

    // console.log(projName, projDescript, projImg);

    // Store the 'addInfo' class in a variable
    const addTheInfo = document.querySelector(".addInfo");

    // Write the info to the pop-up to add it to the <section> element with class="addInfo". It goes is inside the <dialog> element.
    return (addTheInfo.innerHTML = `

  <h2>The ${projName}</h2>
  <img src="${projImg}">
  <p>${projDescript}</p>
  `);
  });

// https://css-tricks.com/a-bunch-of-options-for-looping-over-queryselectorall-nodelists/
