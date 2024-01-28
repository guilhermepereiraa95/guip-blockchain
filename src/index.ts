

import express, { json } from "express";
import cors from 'cors';
import Blockchain from "./blockchain/blockchain";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(json());

const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
  res.json(blockchain.chain);  
});

app.post('/api/mine', (req, res) => {
    const { data } = req.body;
    blockchain.addBlock({data});

    res.redirect('/api/blocks');
});

app.listen(PORT, () => console.log(`listening at localhost/${PORT}`));


export default app;

