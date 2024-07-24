document.addEventListener('DOMContentLoaded', () => {
    console.log(displayText); // Use the value of displayTextResult as needed
}); // Global variable to store the return value of displayText

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Set smooth scroll behavior for container
    const cardsContainer = document.querySelector('.container');
    if (cardsContainer) {
        cardsContainer.style.scrollBehavior = 'smooth';
    }

    // Change navbar style on scroll
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 50) { 
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }
        });
    }

    // Fetch the card text from Firebase on mouseover
    const cardTextRef = firebase.database().ref('card-text'); // Adjust the Firebase reference as needed
    cardTextRef.on('value', (snapshot) => {
        displayText = snapshot.val(); // Store the fetched value in the global variable
        document.getElementById('card-text1').innerText = displayText;
    });

});

// Function to show text
function showText() {
    // Use the already fetched displayTextResult
    document.getElementById('card-text1').innerText = "finef";
}

function hideText() {
    // Re-fetch the card text from Firebase on mouseout and set it
    const cardTextRef = firebase.database().ref('card-text'); // Adjust the Firebase reference as needed
    cardTextRef.once('value', (snapshot) => {
        const cardText = snapshot.val();
        document.getElementById('card-text1').innerText = displayTextResult;
    });
}

// Loading screen functionality
window.onload = function() {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    if (loadingScreen && mainContent) {
        // Hide the loading screen
        loadingScreen.style.display = "none";
        
        // Show the main content
        mainContent.style.display = "block";
    } else {
        console.error("Loading screen or main content element not found");
    }
};
