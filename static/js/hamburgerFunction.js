// function toggleMenu() {
//     const hamburger = document.querySelector('.hamburger-bar-container');
//     const navbar = document.querySelector('.nav-links');
//     const closeBtn = document.querySelector('.close-btn');
//     // Check if the navbar is currently visible
//     if (navbar.style.display === "none") {
//         // If navbar is visible, hide it and show the hamburger icon
//         navbar.style.display = "none";
//         hamburger.style.display = "block";  // Show the hamburger icon
//         closeBtn.style.display = "none";  // Show the hamburger icon
//     } else {
//         // If navbar is hidden, show it and hide the hamburger icon
//         navbar.style.display = "flex";
//         hamburger.style.display = "none";  // Hide the hamburger icon
//         closeBtn.style.display = "flex";  // Show the hamburger icon
//     }
// }
// function closeMenu() {
//     const hamburger = document.querySelector('.hamburger-bar-container');
//     const navbar = document.querySelector('.nav-links');
//     const closeBtn = document.querySelector('.close-btn');

//     // Unconditionally close the menu
//     navbar.style.display = "none";  // Hide the navbar
//     hamburger.style.display = "flex";  // Show the hamburger icon
//     closeBtn.style.display = "none";  // Hide the X icon
// }
let isMenuOpen = false; // Tracks menu state

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger-bar-container');
    const navbar = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');

    if (!isMenuOpen) {
        // Open the menu
        navbar.style.display = "flex";  // Show navbar
        hamburger.style.display = "none";  // Hide hamburger icon
        closeBtn.style.display = "flex";  // Show close icon
        isMenuOpen = true; // Update state
    } else {
        // Close the menu
        closeMenu(); // Use the closeMenu function to reset everything
    }
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger-bar-container');
    const navbar = document.querySelector('.nav-links');
    const closeBtn = document.querySelector('.close-btn');

    // Close the menu
    navbar.style.display = "none";  // Hide navbar
    hamburger.style.display = "flex";  // Show hamburger icon
    closeBtn.style.display = "none";  // Hide close icon
    isMenuOpen = false; // Update state
}

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    console.log(navbar.classList); // Check the class list
});
