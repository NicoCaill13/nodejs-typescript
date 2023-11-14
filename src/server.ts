import express from 'express';
import axios from 'axios';
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    try {
        const result = await axios.get(`${process.env.APP_SILICO}/api/list/country`, {
            headers: {
                'apiKey': process.env.APP_API_KEY
            }
        });
        console.log(result.data)
        res.json(result.data)
    } catch (error) {
        console.log(error.message)
    }

})

app.listen(port, () => {
    console.log(`⚡️[server]⚡️: Server is running at http://localhost:${port}`);
});