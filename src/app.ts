import express, { type Application } from 'express';
import cors from 'cors';
import router from './routers';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('', router);

export default app;
