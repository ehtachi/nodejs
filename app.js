const express = require("express");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//setting the pug html template engine
app.set("view engine", "pug");
app.set("views", "views");

//parsing the data from the form
app.use(express.urlencoded({ extended: true }));

//giving access to the public directory so that images and css can be sent that are used on the html pages
app.use(express.static(path.join(__dirname, "public")));

// all /admin paths will go here
app.use("/admin", adminData.routes);

//other paths will go here if defined
app.use(shopRoutes);

//error handling --> if the path does not match the paths that are already defined
app.use("/", (req, res) => {
  res.status(404).render("404");
});

app.listen(3000);
