const express = require("express");
const app = express();
const ejs = require("ejs");
const reducer = require("./scripts/reducer");
const url = require("url");
const redux = require("redux");
const bodyParser = require("body-parser");

// const fs = require('fs')
// console.log(fs.readFileSync('./test.txt').toString())
// console.log(fs.readFileSync('./test.txt','hex'))
// console.log(fs.readFileSync('./test.txt','binary'))

/**
 *
 * redux implementation
 */

const store = redux.createStore(reducer);

/**
 * Array of data to be used
 *
 * */

var drinksDB = [
  { name: "Bloody Mary", price: 3 + "€" },
  { name: "Martini", price: 5 + "€" },
  { name: "Wine", price: 5 + "€" },
  { name: "Beer", price: 5 + "€" },
  { name: "Vodka", price: 5 + "€" },
  { name: "Eierlikor", price: 5 + "€" },
  { name: "Orujo", price: 2 + "€" },
  { name: "Mosto", price: 5 + "€" },
  { name: "Cognac", price: 8 + "€" },
  { name: "Scotch", price: 2 + "€" }
];

/**
 * functions whicht will be reacting on
 * event (add, delete)
 *
 */

function chooseDrink(name) {
  let result = [];
  drinksDB.forEach(drink => {
    if (name === drink.name) {
      result.push(drink);
    }
  });
  return result;
}

function deleteDrink(name) {
  let result = [];

  store.getState().forEach(drink => {
    if (name === drink.name) {
      store.getState().splice(store.getState().indexOf(drink), 1);
      result = store.getState();
    }
  });

  return result;
}

const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// index page
app.get("/", function(req, res) {
  res.render("index");
});

app.get("/drink-order", function(req, res) {
  const query = url.parse(req.url, true).query;
  store.dispatch({
    type: "ADD_DRINK",
    payload: chooseDrink(query.drink)
  });

  res.render("order", { chooseDrink: store.getState() });
});

app.post("/drink-order/", function(req, res) {
  store.dispatch({
    type: "DELETE_DRINK",
    payload: deleteDrink(req.body.drink)
  });

  res.render("order", { chooseDrink: store.getState() });
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
