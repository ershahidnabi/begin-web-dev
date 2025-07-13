let items = ["Apple", "Banana", "Orange", "Mango"];
// This is a list of items to be displayed in the HTML document.
// The items are stored in an array called 'items'.

// Function to create a list item and append it to the unordered list
function createListItem(item) {
    const li = document.createElement("li");

    // This function creates a new list item element.
    li.textContent = item;
    document.querySelector(".items").appendChild(li);
    return li;
}
