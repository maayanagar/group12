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

   // Assume sessions is an array of session objects
    sessions.forEach(session => {
        // Find the day column that matches the session day
        const dayColumn = Array.from(scheduleContainer.querySelectorAll('.day-column'))
                              .find(column => column.dataset.day === session.day);

        // Create a div for the session
        const sessionDiv = document.createElement("div");
        sessionDiv.classList.add("session");
        sessionDiv.id = session.id;
        sessionDiv.innerHTML = `${session.type}<br>${session.time}`;

        // Append the session div to the matched day column
        dayColumn.appendChild(sessionDiv);
    });
});
