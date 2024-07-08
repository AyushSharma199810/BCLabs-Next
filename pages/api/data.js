import { MongoClient } from 'mongodb';
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connection URI and database name from environment variable
const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
 
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('cluster0');
    const collection = database.collection('assets');
    
    const data = await collection.find({}).toArray();

    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  } finally {
    await client.close();
  }
}
