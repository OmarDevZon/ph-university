import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { userRoutes } from './user/user.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send(`${config.WELCOME_MESSAGE}`);
});

app.use('/api/users', userRoutes);

export default app;
