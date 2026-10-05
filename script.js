// --- Login Logic ---
function handleLogin(event) {
    event.preventDefault(); 
    // In a real app, you would check credentials here.
    // For this project, we just redirect to the dashboard.
    window.location.href = "dashboard.html";
}

// --- Logout Logic ---
function logout() {
    window.location.href = "index.html";
}

// --- Dashboard Logic: Add Medicine to List ---
function addMedicine(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // 1. Get values from the input fields
    const name = document.getElementById("medName").value;
    const dosage = document.getElementById("medDosage").value;
    const time = document.getElementById("medTime").value;

    // Format the time to AM/PM for better appearance
    const timeArray = time.split(":");
    let hours = parseInt(timeArray[0]);
    const minutes = timeArray[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedTime = hours + ":" + minutes + " " + ampm;

    // 2. Find the medicine list in the HTML
    const medicineList = document.getElementById("medicineList");

    // 3. Create a new list item (li) dynamically
    const newListItem = document.createElement("li");
    newListItem.className = "medicine-item";

    // 4. Set the HTML content of the new list item
    newListItem.innerHTML = `
        <div class="med-info">
            <span class="med-icon">💊</span>
            <div>
                <h4>${name}</h4>
                <p>${dosage}</p>
            </div>
        </div>
        <div class="med-time">${formattedTime}</div>
    `;

    // 5. Append it to the list
    medicineList.appendChild(newListItem);

    // 6. Clear the form inputs
    document.getElementById("addMedicineForm").reset();
}