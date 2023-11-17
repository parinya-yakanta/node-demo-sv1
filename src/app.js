import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import usersRouter from './routes/users.js';
import pillsRouter from './routes/pills.js';
import authRouter from './routes/auth.js';

app.use(express.json());
app.use('/users', usersRouter);
app.use('/pills', pillsRouter);
app.use('/auth', authRouter);

app.listen(process.env.APP_PORT || 3000, () => {
  console.log(`Server is running ${process.env.APP_PORT}`);
});
