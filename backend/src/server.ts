import express from 'express';

const app = express(); 

app.get('/', (req, resp) => {
    return resp.json({ message: 'Hello World'});
})

app.listen(3333);