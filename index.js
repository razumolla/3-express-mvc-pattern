const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect"); //for database
const toolsRouters =require("./routes/v1/tools.route");
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandler");

app.use(cors()); // Give client side access
app.use(express.json()); //parse tha json body from client post method
app.use(express.static("public")); // you can access any file from public folder
app.set("view engine", "ejs");

// app.use(viewCount);


// Apply the rate limiting middleware to all requests
// app.use(limiter)



// je route e mail send korar projojon hobe sei route e import korbo
dbConnect(); //for database

// Here you can add all routes
app.use('/api/v1/tools',toolsRouters)


app.get("/", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(__dirname + "/public/test.html");
  res.render("home.ejs",{
    id:2,
    user: {
      name:"test"
    }
  })
});

app.all("*",(req,res)=>{
    res.send("No Route Found")
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
