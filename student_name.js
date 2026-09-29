// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const input = document.getElementById("studentName");
    const table = document.querySelector("table");

    // Find the last roll number in the table
    function getLastRollNo() {
        const rows = table.querySelectorAll("tr");
        if (rows.length <= 1) return 0; // only header exists
        const lastRow = rows[rows.length - 1];
        return parseInt(lastRow.cells[0].textContent);
    }

    // Handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stop page reload

        const name = input.value.trim();
        if (name === "") {
            alert("Please enter a student name!");
            return;
        }

        const rollNo = getLastRollNo() + 1;

        // Create a new row
        const newRow = table.insertRow();
        const rollCell = newRow.insertCell(0);
        const nameCell = newRow.insertCell(1);

        rollCell.textContent = rollNo;
        nameCell.textContent = name;

        // Clear input field
        input.value = "";
    });
});
