document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const homepage = document.getElementById("homepage");
  const comic = document.getElementById("comic");
  const scrollAmount = window.innerWidth * 0.5; // scroll by 50% of screen width

  // Load images dynamically
  const imageFiles = [
    'wln0319-1-1.webp',
    'wln0319-1-2.webp',
    'wln0319-2-1.webp',
    'wln0319-2-2.webp',
    'wln0319-3-1.webp',
    'wln0319-3-2.webp',
    'wln0319-4-1.webp',
    'wln0319-4-2.webp',
    // Add more image filenames as needed
  ];

  // Add event listener for start button
  startButton.addEventListener("click", function () {
    // Fade out the overlay by changing its opacity
    homepage.style.opacity = '0';

    // After the transition duration (0.5s), hide the overlay and reveal the comic viewer
    setTimeout(function () {
      homepage.style.display = "none";
      comic.style.display = "flex";

      // Load images into the comic container
      imageFiles.forEach(src => {
        const img = document.createElement('img');
        img.src = `works/md/image/${src}`;
        comic.appendChild(img);
      });
    }, 500);
  });

  // Handle scrolling by tapping left or right side of the screen
  document.body.addEventListener('click', (e) => {
    const x = e.clientX;
    const middle = window.innerWidth / 2;

    if (x > middle) {
      // Tap on right side = scroll right
      comic.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      // Tap on left side = scroll left
      comic.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  });
});

