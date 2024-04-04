import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/task.routes.js';

const app = express()

app.use(cors());

// app.use(cors({
//     origin: '//dominio'
// }));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

export default app;