import express from 'express';

import { helloWorld, createUser }  from './routes';

const app = express();

app.get('/', helloWorld);

app.get('/createUser', createUser);

app.listen(3333);

console.log("Server Up!");