import 'reflect-metadata';
import express from 'express';
import route from './routes';
import cors from 'cors';

import './app/database/connection';

const app = express();
app.use(express.json());
app.use(cors());
app.use(route);

export {app}
