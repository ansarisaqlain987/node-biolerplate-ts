import express, { Express } from 'express';


const app: Express = express();

app.get('/', (req, res) => {
    res.send("HELLO");
});

export default app;