const balloon = document.getElementById('balloon');
let currentSize = 200;
const colors = ['red', 'green', 'blue'];
let colorIndex = 0;
let shrinkInterval;


balloon.addEventListener('click', () => {
    
    currentSize += 10;
    balloon.style.width = `${currentSize}px`;
    balloon.style.height = `${currentSize}px`;

    
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];

   
    if (currentSize > 420) {
        currentSize = 200;
        balloon.style.width = `${currentSize}px`;
        balloon.style.height = `${currentSize}px`;
        balloon.style.backgroundColor = 'red'; 
    }
});


balloon.addEventListener('mouseleave', () => {
   
    if (!shrinkInterval) {
        shrinkInterval = setInterval(() => {
            
            if (currentSize > 200) {
                currentSize -= 1;
                balloon.style.width = `${currentSize}px`;
                balloon.style.height = `${currentSize}px`;
            } else {
                clearInterval(shrinkInterval); 
                shrinkInterval = null;
            }

            
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;
            balloon.style.backgroundColor = colors[colorIndex];
        }, 30); 
    }
});


balloon.addEventListener('mouseenter', () => {
    if (shrinkInterval) {
        clearInterval(shrinkInterval);
        shrinkInterval = null;
    }
});
