import express from 'express';

import {Routes} from './App/Routes'

const app = express();
const port = process.env.PORT || 3000;

Routes(app);

app.listen(port, () => {
    console.log(`⚡️[server]⚡️: Server is running at http://localhost:${port}`);
});