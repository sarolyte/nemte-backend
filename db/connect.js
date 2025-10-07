import { MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.MONGODB_URI

let db;


export const connectDB = async () => {
    try {
        const clientConnection = await MongoClient.connect(connectionString);
        db = clientConnection.db('melo');
        console.log('Connected to Mongodb')
    } catch (error) {
        console.log('Failed to connect to MongoDb');
    }
}

export const getDB = () => {
    return db;
}