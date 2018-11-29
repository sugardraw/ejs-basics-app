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

module.exports = {
  chooseDrink: function(name) {
    let result = [];
    drinksDB.forEach(drink => {
      if (name === drink.name) {
        result.push(drink);
      }
    });
    return result;
  },

  deleteDrink: function(name) {
    let result = [];

    drinksDB.forEach(drink => {
      if (name === drink.name) {
        drinksDB.splice(drinksDB.indexOf(drink),1)
        console.log(name, drinksDB[drinksDB.indexOf(drink)], drinksDB);
      }
    });

    return result;
  }
};
