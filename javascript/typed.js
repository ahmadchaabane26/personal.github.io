//
window.addEventListener('DOMContentLoaded', function() {
    var nameElement = document.getElementById('name');
    var jobTitleElement = document.getElementById('job-title');

    // Update name and job title dynamically
    nameElement.textContent = 'Your Name';
    jobTitleElement.textContent = 'Job Title';
});
//scroll for name 
document.getElementById('name-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top of the page smoothly
});
//scroll for contents
document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        var target = document.querySelector(this.getAttribute('href')); // Get the target section based on the link's href attribute
        if (target) {
            var targetPosition = target.offsetTop; // Get the target section's position from the top of the page
            window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Scroll to the target section smoothly
        }
    });
});
// Get all dropdown buttons
const dropbtns = document.querySelectorAll(".dropbtn");

// Add click event listener to each dropdown button
dropbtns.forEach((dropbtn) => {
  dropbtn.addEventListener("click", function () {
    // Toggle the 'active' class on the clicked dropdown button
    this.classList.toggle("active");
    
    // Get the corresponding dropdown content
    const dropdownContent = this.nextElementSibling;

    // Toggle the 'active' class on the dropdown content
    dropdownContent.classList.toggle("active");

    // Check if the dropdown content is active
    const isActive = dropdownContent.classList.contains("active");

    // Apply fade-in or fade-out animation based on the active state
    if (isActive) {
      fadeIn(dropdownContent);
    } else {
      fadeOut(dropdownContent);
    }
  });
});

// Fade-in animation function
function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = "block";

  // Increase the opacity gradually over time
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.1;
    element.style.opacity = opacity;

    // Stop the interval once opacity reaches 1
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 30);
}

// Fade-out animation function
function fadeOut(element) {
  // Decrease the opacity gradually over time
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.1;
    element.style.opacity = opacity;

    // Hide the element and stop the interval once opacity reaches 0
    if (opacity <= 0) {
      element.style.display = "none";
      clearInterval(interval);
    }
  }, 30);
}
        // JavaScript code for typing animation
        const lines = [
            "Hello, I am a third-year Software Engineering student seeking  opportunities to gain hands-on experience.",
            "With a friendly and outgoing personality, I'm motivated for success and eager to contribute to real-world projects."
        ];
        const typingText = document.getElementById('typing-text');

        let lineIndex = 0;
        let charIndex = 0;
        const typingSpeed = 50; // Adjust typing speed as needed
        const displayDuration = 2000; // Adjust display duration in milliseconds (3 seconds in this example)

        function type() {
            if (lineIndex >= lines.length) {
                setTimeout(() => {
                    lineIndex = 0;
                    typingText.innerHTML = ""; // Clear the typing text
                    type();
                }, displayDuration);
                return;
            }

            if (charIndex < lines[lineIndex].length) {
                typingText.innerHTML += lines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                typingText.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(type, typingSpeed);
            }
        }

        type();
        var prevScrollpos = window.pageYOffset;

        window.onscroll = function() {
          var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.querySelector('.header-container').classList.remove('hide');
          } else {
            document.querySelector('.header-container').classList.add('hide');
          }
          prevScrollpos = currentScrollPos;
        };
        