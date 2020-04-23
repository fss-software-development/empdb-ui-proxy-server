var faker = require('faker');

var database = { accounts: []};

for (var i = 1; i<= 50; i++) {
  database.accounts.push({
    accountId: i,
    accountName: faker.commerce.productName(),
	regionId: i
    //description: faker.lorem.sentences(),
    //price: faker.commerce.price(),
    //imageUrl: "https://source.unsplash.com/1600x900/?product",
   // quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));