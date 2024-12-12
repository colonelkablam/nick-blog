let Post = {
    title: "",
    body: "",
    date: null
};

// Initialize an array to store Post objects
let posts = [];

// Example of adding Post objects to the array
posts.push({
    title: "First Post",
    body: "This is the body of the first post.",
    date: new Date() // Current date and time
});

function addPost(newTitle, newBody, currentDate = new Date()) {
    posts.push({
        title: newTitle,
        body: newBody,
        date: currentDate    
    })
}

// Select the toggle button and the navbar links
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the "active" class on the navbar links
    navbarLinks.classList.toggle('active');
});