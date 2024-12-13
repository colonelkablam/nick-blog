import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {join} from "path";

import { fileURLToPath } from "url";
import { getPosts, addPost, removePost, getLastPost } from "./handle-posts.js"; // Import the posts logic


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

//  MIDDLEWARE  ///

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, "/public")));

// get the raw request stream into a JS object 'body'
app.use(bodyParser.urlencoded({ extended: true }));


//  REQUEST HANDLING  ///

app.get("/", (req, res) => {
    const lastPost = getLastPost();

    res.render("layouts/main", 
        {
            content: "../pages/home",
            pageTitle: "Home Page",
            lastPost,
        });
});

app.get("/new-post", (req, res) => {
    res.render("layouts/main", 
        {
            content: "../pages/new-post",
            pageTitle: "Add New Post",
        });
});

app.post("/new-post", (req, res) => {
    const { title, body } = req.body;
    addPost(title, body);
    res.redirect("/new-post");
    console.log(title, body);
})

app.get("/archive", (req, res) => {
    const posts = getPosts();

    res.render("layouts/main", 
        {
            content: "../pages/archive",
            pageTitle: "Archive",
            posts,
        });
});


app.listen(PORT, ()=> {
    console.log(`Listening on port `)
})


