function showContent(interestId) {
    document.querySelectorAll('.content-container').forEach(container => {
        container.style.display = 'none';
    });

    const contentToShow = document.getElementById(interestId);
    if (contentToShow) {
        contentToShow.style.display = 'block';
    }
}

if (document.getElementById('gardening')) {
    showContent('gardening');
}

document.querySelectorAll('.content-container').forEach(container => {
    let currentImgIndex = 0;
    const images = container.querySelectorAll('img');
    const totalImages = images.length;

    if (totalImages > 0) {
        images[currentImgIndex].style.display = 'block';
    }

    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (totalImages > 0) {
                images[currentImgIndex].style.display = 'none';
                currentImgIndex = (currentImgIndex - 1 + totalImages) % totalImages;
                images[currentImgIndex].style.display = 'block';
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (totalImages > 0) {
                images[currentImgIndex].style.display = 'none';
                currentImgIndex = (currentImgIndex + 1) % totalImages;
                images[currentImgIndex].style.display = 'block';
            }
        });
    }
});
