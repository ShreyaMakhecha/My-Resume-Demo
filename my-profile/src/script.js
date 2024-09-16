// Function to open the selected tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";
}

// Function to edit text sections
function editSection(sectionId, promptMessage) {
    const currentText = document.getElementById(sectionId).innerText;
    const newText = prompt(promptMessage, currentText);
    if (newText) {
        document.getElementById(sectionId).innerText = newText;
    }
}

// Function to edit list items
function editList(listId, promptMessage) {
    const currentItems = Array.from(document.getElementById(listId).children).map(li => li.innerText);
    const newItems = prompt(promptMessage, currentItems.join(', '));
    if (newItems) {
        const list = document.getElementById(listId);
        list.innerHTML = '';
        newItems.split(',').forEach(item => {
            const li = document.createElement('li');
            li.innerText = item.trim();
            list.appendChild(li);
        });
    }
}

// Function to edit contact information
function editContact() {
    const email = prompt("Enter your email:", document.getElementById("contact").innerText.split(": ")[1]);
    const phone = prompt("Enter your phone number:", document.getElementById("phone").innerText.split(": ")[1]);
    
    if (email) {
        document.getElementById("contact").innerText = "Email: " + email;
    }
    if (phone) {
        document.getElementById("phone").innerText = "Phone: " + phone;
    }
}

// Open the default tab on load
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});