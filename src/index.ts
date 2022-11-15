import express from 'express';
import { ExpressInstance } from '../types';
import createRouters from '../utils/create-routers';
import { GlobalErrorHandler } from './common/error-handler';

const app: ExpressInstance = createRouters(express());

app.use(GlobalErrorHandler);

export default app;