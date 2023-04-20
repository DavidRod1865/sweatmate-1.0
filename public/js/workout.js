const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting
    const selectedDate = document.getElementById("date").value; // Get the selected date from the input field
    window.location.href = `/home/workouts?date=${selectedDate}`; // Redirect to the workouts route with the selected date as a query parameter
});