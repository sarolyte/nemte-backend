import { MongoClient} from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = 'mongodb+srv://admin:lalaLand.1@cluster0.rv055z4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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