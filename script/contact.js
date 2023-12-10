// Contact form validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let isValid = true; // A flag to determine if the form data is valid

    // Validate that the name does not exceed 10 words
    const name = document.getElementById('name').value; 
    if (name.split(' ').length > 10) { 
        document.getElementById('name-error').textContent = 'Name cannot exceed 10 words.'; 
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = ''; 
    }

    // Validate that the subject does not exceed 20 words
    const subject = document.getElementById('subject').value; 
    if (subject.split(' ').length > 20) { 
        document.getElementById('subject-error').textContent = 'Subject cannot exceed 20 words.';
        isValid = false; 
    } else {
        document.getElementById('subject-error').textContent = ''; 
    }

    // Validate that the message does not exceed 500 words
    const message = document.getElementById('message').value; 
    if (message.split(' ').length > 500) { 
        document.getElementById('message-error').textContent = 'Message cannot exceed 500 words.';
        isValid = false; 
    } else {
        document.getElementById('message-error').textContent = ''; 
    }

    if (!isValid) {
        event.preventDefault(); // Prevent the form from submitting if the data is invalid
    }
});
