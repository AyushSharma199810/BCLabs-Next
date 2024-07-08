import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('admin');
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
