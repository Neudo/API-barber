// pages/api/saveData.ts
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log('Request received test')
    if (req.method === 'POST') {
        console.log('Request received')
        const { data } = req.body;

        const client = new MongoClient(process.env.MONGODB_URI!, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();
            console.log('Connected to the database')
            const database = client.db('barber');
            const collection = database.collection('slots');
            await collection.insertOne({ data });

            res.status(201).json({ message: 'Data saved successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}
