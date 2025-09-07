import express from 'express';
import cors from 'cors';
import router from './routes/routers.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true
}));
 
app.use(express.json());
app.use(cookieParser());
// Increase the JSON payload size limit
app.use(express.json({ limit: '10mb' })); // Adjust '10mb' as needed
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/api',router);

export default app;