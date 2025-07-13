// elements
let title = document.createElement("h2"); // Create a title element
let eventInput = document.createElement("input");
let btn = document.createElement("button");
let countdown = document.createElement("p");
let msg = document.createElement("h2");
// adding props to elements created above
// title
title.innerText = "Event Countdown Timer"; // Set the text content of the title element

// input type date time
eventInput.type = "datetime-local"; // Set the type of input to datetime-local
eventInput.name = "eventTime";
eventInput.id = "event-time";
eventInput.placeholder = "Select date and time";
eventInput.innerText = "hello";

// submit button
btn.innerText = "Start Timer";
btn.type = "submit";

// display countdown "${days}d ${hours}h ${minutes}m ${seconds}s remaining`;"
countdown.innerText = `10d 5h 30m 12s remaining...!!!`; // Set the initial text content of the countdown element
countdown.style.color = "blue"; // Set the text color of the countdown element
countdown.style.fontSize = "30px";
countdown.style.fontWeight = "bold";

// h2 message tag
msg.innerText = "Countdown Finished";
msg.style.visibility = "hidden"; // Initially hide the message element

// Assign classes using classList
title.classList.add("title"); // Add a class to the title element
eventInput.classList.add("event-input");
btn.classList.add("start-button");
countdown.classList.add("countdown-display");
msg.classList.add("final-message");

// fetch the container div from the DOM
const container = document.querySelector("div"); // Select the container div from the DOM

// append elements to the div
container.appendChild(title); // Append the title element to the
container.appendChild(eventInput);
container.appendChild(btn);
container.appendChild(countdown);
container.appendChild(msg);

let timerInterval; // Declare a variable to store the interval ID (used to clear previous timers)

// Function to start the countdown timer
function startCountdown() {
    // Convert the input date-time value to a timestamp in milliseconds
    const eventTime = new Date(eventInput.value).getTime();

    // Validate: If the input is empty or the selected time is in the past, show an alert and exit
    if (!eventInput.value || eventTime <= Date.now()) {
        alert("Enter a valid future date and time.");
        return;
    }

    // Get the current timestamp
    const now = new Date().getTime();

    // Calculate time difference between selected event time and current time
    const timeRemaining = eventTime - now;

    // Extra validation (optional but safe): If remaining time is negative, show an alert
    if (timeRemaining < 0) {
        alert(
            "The selected date and time is in the past. Please select a future date and time."
        );
        return;
    }

    // Clear any existing countdown interval before starting a new one
    clearInterval(timerInterval);

    // Start a new interval that runs every 1000 milliseconds (1 second)
    timerInterval = setInterval(() => {
        // Update current time on each tick
        const now = new Date().getTime();

        // Recalculate remaining time
        const timeRemaining = eventTime - now;

        // If countdown is over (time <= 0), stop the interval and show final message
        if (timeRemaining <= 0) {
            clearInterval(timerInterval); // Stop the timer
            countdown.innerText = "0d 0h 0m 0s remaining"; // Final display
            msg.style.visibility = "visible"; // Make the final message visible
            return; // Exit the interval callback
        }

        // Calculate days from remaining milliseconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

        // Calculate hours (excluding full days)
        const hours = Math.floor(
            (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        // Calculate minutes (excluding full hours)
        const minutes = Math.floor(
            (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );

        // Calculate seconds (excluding full minutes)
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown text in the DOM
        countdown.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
    }, 1000); // Run the function every second
}

// Add an event listener to the button to start the countdown when clicked
btn.addEventListener("click", startCountdown);

// // console log the elements
// console.table({ title, eventInput, btn, countdown, msg });
