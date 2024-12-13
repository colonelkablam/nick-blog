// Define the Post class
class Post {

    static currentId = 0; // Static property to track the current ID

    constructor(title, body, date = new Date()) {
        this.id = Post.currentId++; // Assign the current ID and increment
        this.title = title;
        this.body = body;
        this.date = date.toLocaleString(); // Format the date
    }
}

// Initialize an array to store Post objects
let posts = [
    new Post(
        "Hello World!",
        "Welcome to Kablam Games! We're a new indie studio passionate about creating small, engaging, tile-based web games. This is our first step into the world of game development, and we're excited to share our journey with you. Stay tuned for updates as we work on our first project!"
    ),
    new Post(
        "New Website Going Live!",
        "We're thrilled to announce that the Kablam Games website is now live! This will be the hub for all things Kablam—updates on our games, development insights, and ways to connect with us. As we start our journey into making fun, strategic tile-based web games, we hope you'll join us and share your thoughts along the way!"
    ),
];

// Function to get all posts
const getPosts = () => {
    return posts;
};

const findPostById = (id) => {
    return posts.find(post => post.id === id); // Convert id to a number
};

const updatePostById = (id, title, body) => {
    const post = findPostById(id);
    if (post) {
        post.title = title;
        post.body = body;
        post.date = new Date().toLocaleString(); // Update the timestamp
    }
};

// Function to add a new post
const addPost = (title, body, date = new Date()) => {
    const newPost = new Post(title, body, date); // Create a new Post instance
    posts.push(newPost); // Add it to the array
};

// Function to remove a post (e.g., by index)
const removePost = (index) => {
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1); // Remove the post by index
    }
};

const getLastPost = () => {
    return posts.length > 0 ? posts[posts.length - 1] : null; // Return the last post or null
};

// Export the functions as ES module
export { getPosts, addPost, removePost, getLastPost, updatePostById, findPostById };
