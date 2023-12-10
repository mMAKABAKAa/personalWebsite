// Function to show content based on the provided interestId
function showContent(interestId) {
    // Hide all elements with the class 'content-container'
    document.querySelectorAll('.content-container').forEach(container => {
        container.style.display = 'none';
    });

    // Find the element with the given interestId
    const contentToShow = document.getElementById(interestId);
    // If the element exists, set its display to 'block', making it visible
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}

// If an element with the ID 'gardening' exists, show its content
if (document.getElementById('gardening')) {
    showContent('gardening');
}

// For each element with the class 'content-container'
document.querySelectorAll('.content-container').forEach(container => {
    let currentImgIndex = 0;
    const images = container.querySelectorAll('img');
    const totalImages = images.length;

    // If there are images, display the first one
    if (totalImages > 0) {
        images[currentImgIndex].style.display = 'block';
    }

    // Find the previous and next buttons within the current container
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    // If the previous button exists, add a click event listener
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            // On click, hide the current image
            if (totalImages > 0) {
                images[currentImgIndex].style.display = 'none';
                // Calculate the index of the previous image, wrapping around if necessary
                currentImgIndex = (currentImgIndex - 1 + totalImages) % totalImages;
                // Display the previous image
                images[currentImgIndex].style.display = 'block';
            }
        });
    }

    // If the next button exists, add a click event listener
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            // On click, hide the current image
            if (totalImages > 0) {
                images[currentImgIndex].style.display = 'none';
                // Calculate the index of the next image, wrapping around if necessary
                currentImgIndex = (currentImgIndex + 1) % totalImages;
                // Display the next image
                images[currentImgIndex].style.display = 'block';
            }
        });
    }
});
