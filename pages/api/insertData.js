const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connection URI and database name from environment variable
const uri = process.env.MONGODB_URI;

// Connection URI and database name
const dbName = 'cluster0'; // Replace with your database name

// Sample data to insert
const data = [
  { symbol: 'BTC/USD', lastTrade: 63000, change24h: -2.21, change24hValue: -1426.18 },
  { symbol: 'ETH/USD', lastTrade: 3408.90, change24h: -0.33, change24hValue: -11.20 },
  { symbol: 'DOGE/USD', lastTrade: 0.15, change24h: 15.75, change24hValue: 0.02 },
  { symbol: 'ALGO/USD', lastTrade: 0.15, change24h: 0.00, change24hValue: 0.00 },
  { symbol: 'DOT/USD', lastTrade: 5.64, change24h: 0.00, change24hValue: 0.00 },
  { symbol: 'UNI/USD', lastTrade: 9.79, change24h: 0.00, change24hValue: 0.00 },
  { symbol: 'COMP/USD', lastTrade: 45.67, change24h: -0.95, change24hValue: -0.44 },
];

async function insertData() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection('assets'); // Replace with your collection name

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);
  } catch (error) {
    console.error('Error inserting documents:', error);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

insertData();
