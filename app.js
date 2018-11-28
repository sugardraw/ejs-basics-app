const express = require("express");
const app = express();
const ejs = require("ejs");
const chooseDrink = require("./scripts/drinks");
const url = require("url");

const port = 3000;
const drinkName = "Orujo";

app.set("view engine", "ejs");

// index page
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/drink-order", function(req, res) {
  const query = url.parse(req.url, true).query;

  const goToShop = () => {
    console.log("hi");
  };

  res.render("order", { chooseDrink: chooseDrink(query.drink) });
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
