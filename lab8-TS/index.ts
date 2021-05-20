import express from 'express';

const app = express();

app.get('/',(req,res) => res.send('HelloPoleck'));

app.listen(8080,() => console.log('Server started'));

