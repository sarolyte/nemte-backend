import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectDB } from './db/connect.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const startServer = async () => {
    try {
        await connectDB(); //waits for DB to connect before continuing
        console.log('Database connected');

        app.listen(3000);
    } catch (error) {
        console.error('Failed to start server:', error);
    }
};

startServer();