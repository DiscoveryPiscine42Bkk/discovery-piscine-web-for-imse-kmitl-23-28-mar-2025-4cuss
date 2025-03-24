const balloon = document.getElementById('balloon');
let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let shrinkInterval;

// Function to change the size and color of the balloon on click
balloon.addEventListener('click', () => {
    // Increase size by 10px
    currentSize += 10;
    balloon.style.width = `${currentSize}px`;
    balloon.style.height = `${currentSize}px`;

    // Change color
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

    // If balloon size is greater than 420px, it explodes and resets
    if (currentSize > 420) {
        currentSize = 200;
        balloon.style.width = `${currentSize}px`;
        balloon.style.height = `${currentSize}px`;
        balloon.style.backgroundColor = 'red'; // Reset color to red
    }
});

// Function to shrink size and change color when mouse leaves the balloon
balloon.addEventListener('mouseleave', () => {
    // Start shrinking the balloon if it’s not already shrinking
    if (!shrinkInterval) {
        shrinkInterval = setInterval(() => {
            // Decrease size by 1px but ensure it doesn't go below 200px
            if (currentSize > 200) {
                currentSize -= 1;
                balloon.style.width = `${currentSize}px`;
                balloon.style.height = `${currentSize}px`;
            } else {
                clearInterval(shrinkInterval); // Stop shrinking once it reaches 200px
                shrinkInterval = null;
            }

            // Change color in reverse order
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
            balloon.style.backgroundColor = colors[colorIndex];
        }, 30); // Shrink every 30ms
    }
});

// Function to stop shrinking when the mouse enters the balloon
balloon.addEventListener('mouseenter', () => {
    if (shrinkInterval) {
        clearInterval(shrinkInterval);
        shrinkInterval = null; // Stop the shrinking process
    }
});
