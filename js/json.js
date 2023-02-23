const user = { id: 1, name: "Gorib Aamir", job: "actor" };

// JavaScript Object Notation (JSON)
const stringgified = JSON.stringify(user);

// console.log(stringgified);

const shop = {
  owner: "Alia",
  address: {
    street: "kochukhet bhuter goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
