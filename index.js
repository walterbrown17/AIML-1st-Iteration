// JS Practical Revision Demo - Explained for Students

// Selecting elements using DOM methods
// document.getElementById() gets the element by its ID
const studentForm = document.getElementById('studentForm');
const outputDiv = document.getElementById('output');

// Adding an event listener to the form
// 'submit' event triggers when the form is submitted
studentForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from reloading on form submission

    // Fetching values from input fields using .value property
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let subjects = document.getElementById('subjects').value;

    // Type Conversion Example: age (string to number)
    age = Number(age);

    // Creating an object (Non-Primitive Data Type)
    let student = {
        name: name,
        age: age,
        subjects: subjects.split(',').map(item => item.trim()) // Convert CSV to Array
    };

    // Template Literals used to format the output
    let outputText = `
        <strong>Name:</strong> ${student.name} <br>
        <strong>Age:</strong> ${student.age} <br>
        <strong>Subjects:</strong> ${student.subjects.join(', ')}
    `;

    // Output displayed dynamically using innerHTML (DOM Manipulation)
    outputDiv.innerHTML = outputText;

    // Console logging for developer tools (visible in browser console)
    console.log('Student Object:', student);
});

/* 
    Formspree form DOES NOT need JS here as it is handled by Formspree’s backend. 
    This form posts directly without JS handling.
*/

/*
    Topics Demonstrated in this JS file:

    1. DOM Selection (getElementById)
    2. Event Listeners (addEventListener)
    3. Preventing Default Form Behavior (e.preventDefault)
    4. Fetching and manipulating input values
    5. Type Conversion (Number())
    6. String Methods (split, trim, join)
    7. Object creation (non-primitive type)
    8. Template Literals
    9. Dynamic DOM Manipulation (innerHTML)
    10. Console logging for debugging
*/

