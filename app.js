import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import {join} from "path";

import { fileURLToPath } from "url";

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

app.get("/", (req, res) => {
    res.render("layouts/main", 
        {
            content: "../pages/index",
            pageTitle: "Home Page",
        });
});


app.listen(PORT, ()=> {
    console.log(`Listening on port `)
})


