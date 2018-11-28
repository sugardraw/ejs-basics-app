var drinks = [
  { name: "Bloody Mary", drunkness: 3 },
  { name: "Martini", drunkness: 5 },
  { name: "Wine", drunkness: 5 },
  { name: "Beer", drunkness: 5 },
  { name: "Vodka", drunkness: 5 },
  { name: "Eierlikor", drunkness: 5 },
  { name: "Orujo", drunkness: 2 },
  { name: "Mosto", drunkness: 5 },
  { name: "Cognac", drunkness: 8 },
  { name: "Scotch", drunkness: 2 }
];

const chooseDrink = name => {
  let result = "";
  drinks.forEach(drink => {
    if (name === drink.name) {
      console.log(typeof name, typeof drink.name);
      result = drink.name;
    }
  });
  return result;
};

module.exports = chooseDrink;
