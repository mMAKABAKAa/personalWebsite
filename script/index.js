// A string containing the text to be displayed in a typewriter effect
const text = "🐑 Well, look who's back for more 👀";
// The delay in milliseconds between each character being typed
const typingDelay = 100;
// Index to keep track of the current character position in the text
let textIndex = 0;

// Function that simulates the typewriter effect
function typeWriter() {
    // Check if the current index is less than the length of the text
    if (textIndex < text.length) {
        // Add the current character to the HTML content of the element with ID 'typewriter'
        document.getElementById("typewriter").innerHTML += text.charAt(textIndex);
        // Increment the text index to point to the next character
        textIndex++;
        // Call the typeWriter function again after a delay, creating a loop
        setTimeout(typeWriter, typingDelay);
    } else {
        // Once the entire text is displayed, call resetTyping after a delay of 3000 milliseconds
        setTimeout(resetTyping, 3000); // Wait for some time before resetting
    }
}

// Function to reset the typewriter effect
function resetTyping() {
    // Clear the content of the element with ID 'typewriter'
    document.getElementById("typewriter").innerHTML = '';
    // Reset the text index to 0 to start from the beginning of the text
    textIndex = 0;
    // Call the typeWriter function to start typing again
    typeWriter();
}

// Event listener for changes in the visibility of the document (tab or window)
document.addEventListener('visibilitychange', function() {
    // If the document becomes visible (not hidden)
    if (!document.hidden) {
        // Reset the typing effect
        resetTyping();
    }
});

// Initial call to the typeWriter function to start the effect
typeWriter();
