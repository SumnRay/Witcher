var MongoClient = require('mongodb').MongoClient
const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("witcher");
database.dropDatabase()
database = client.db("witcher");
const witch = database.collection("witch");
const result = await witch.insertOne({name:"Геральт"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
