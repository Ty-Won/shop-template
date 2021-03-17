const {
    MongoClient
} = require('mongodb');
const dotenv = require("dotenv");

async function connectToDB() {
    dotenv.config();

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ayjkf.mongodb.net/test?authSource=admin&replicaSet=atlas-o0n856-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    connectToDB: connectToDB
}