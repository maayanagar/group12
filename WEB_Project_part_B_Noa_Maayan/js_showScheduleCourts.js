document.addEventListener("DOMContentLoaded", function () {
    const scheduleContainer = document.querySelector(".schedule-container");
    const daysOfWeek = ["שישי", "חמישי", "רביעי", "שלישי", "שני", "ראשון"];

    // Create and append day columns with headers
    daysOfWeek.forEach(day => {
        const dayColumn = document.createElement("div");
        dayColumn.classList.add("day-column");
        dayColumn.dataset.day = day; // Assign a data attribute for the day

        const dateHeader = document.createElement("div");
        dateHeader.classList.add("date-header");
        dateHeader.textContent = day; // Use a static day name for the header
        dayColumn.appendChild(dateHeader);

        scheduleContainer.appendChild(dayColumn);
    });

   // Assume courts is an array of court objects
    courts.forEach(court => {
        // Find the day column that matches the court day
        const dayColumn = Array.from(scheduleContainer.querySelectorAll('.day-column'))
                              .find(column => column.dataset.day === court.day);

        // Create a div for the court
        const courtDiv = document.createElement("div");
        courtDiv.classList.add("session");
        courtDiv.id = court.id;
        courtDiv.innerHTML = `${court.type}<br>${court.time}`;

        // Append the court div to the matched day column
        dayColumn.appendChild(courtDiv);
    });
});
