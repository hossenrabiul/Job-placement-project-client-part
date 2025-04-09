
   // JavaScript for Carousel-Like Transitions
   const reviews = document.querySelectorAll('.review');
   let currentIndex = 0;

   function showNextReview() {
     // Hide the current review
     reviews[currentIndex].classList.remove('active');
     reviews[currentIndex].classList.add('previous');

     // Move to the next review
     currentIndex = (currentIndex + 1) % reviews.length;

     // Show the next review
     reviews[currentIndex].classList.remove('next');
     reviews[currentIndex].classList.add('active');

     // Reset classes for previous reviews
     setTimeout(() => {
       reviews.forEach((review, index) => {
         if (index !== currentIndex) {
           review.classList.remove('previous', 'next');
         }
       });
     }, 1000); // Match the transition duration
   }

   // Start the review changer
   setInterval(showNextReview, 5000); // Change review every 5 seconds