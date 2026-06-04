const form = document.querySelector("form");
const studentIDContainer = document.querySelector("#studentIDContainer");
const type = document.querySelector("#type");
const output = document.querySelector("#output");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const studentID = document.querySelector("#studentID");
const accessCode = document.querySelector("#accessCode");


function updatetype() {
    const value = form.type.value;
    if (value === "Student"){
        studentIDContainer.hidden = false;
        studentID.required = true;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
    else if (value === "Guest"){
        studentIDContainer.hidden = true;
        studentID.required = false;
        accessCodeContainer.hidden = false;
        accessCode.required = true;
    }
    else {
        studentIDContainer.hidden = true;
        studentID.required = false;
        accessCodeContainer.hidden = true;
        accessCode.required = false;
    }
    console.log("pleasework");
}

type.addEventListener("change", updatetype);
    




form.addEventListener("submit", (event) => {
    event.preventDefault();
    output.textContent = "";
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const date = form.Date.value;
    

    if (type === "Student" && form.studentID.value.length !== 9) {
        output.textContent = "Please enter a valid 9-digit student ID.";

        console.log("AC")
        return;
    }

    if (type === "Guest" && form.accessCode.value !== "EVENT131") {
        output.textContent = "Please enter a valid access code.";
    
        console.log("AC")
        return;
    }

    output.innerHTML = `
    <h2>Your Ticket:</h2>
    <p><strong>Name:</strong> ${firstName + " " +lastName}</p>
    <p><strong>Type:</strong> ${type}</p>
    <p><strong>Date:</strong> ${date}</p>
    `;

});