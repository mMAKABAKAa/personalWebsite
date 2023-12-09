// Contact form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let isValid = true; // A flag to determine if the form data is valid

    // Validate that the name does not exceed 10 words
    const name = document.getElementById('name').value; // Get the value entered in the 'name' field
    if (name.split(' ').length > 10) { // Split the name by spaces and check if the word count exceeds 10
        document.getElementById('name-error').textContent = 'Name cannot exceed 10 words.'; // Display an error message if the condition is true
        isValid = false; // Set the isValid flag to false indicating invalid form data
    } else {
        document.getElementById('name-error').textContent = ''; // Clear the error message if the name is valid
    }

    // Validate that the subject does not exceed 20 words
    const subject = document.getElementById('subject').value; // Get the value entered in the 'subject' field
    if (subject.split(' ').length > 20) { // Split the subject by spaces and check if the word count exceeds 20
        document.getElementById('subject-error').textContent = 'Subject cannot exceed 20 words.'; // Display an error message if the condition is true
        isValid = false; // Set the isValid flag to false indicating invalid form data
    } else {
        document.getElementById('subject-error').textContent = ''; // Clear the error message if the subject is valid
    }

    // Validate that the message does not exceed 500 words
    const message = document.getElementById('message').value; // Get the value entered in the 'message' field
    if (message.split(' ').length > 500) { // Split the message by spaces and check if the word count exceeds 500
        document.getElementById('message-error').textContent = 'Message cannot exceed 500 words.'; // Display an error message if the condition is true
        isValid = false; // Set the isValid flag to false indicating invalid form data
    } else {
        document.getElementById('message-error').textContent = ''; // Clear the error message if the message is valid
    }

    if (!isValid) {
        event.preventDefault(); // Prevent the form from submitting if the data is invalid
    }
});
