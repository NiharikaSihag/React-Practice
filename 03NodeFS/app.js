import express from 'express';
import User from './models/user.js';
import connectDB from './db.js';
import Admin from './models/admin.js';
import Client from './models/client.js';
import cors from 'cors'

import router from './Routes/authRoute.js';
const app = express();
app.use(express.json());

// app.get('/', (req, res)=>{
//     res.send('Hey from express')
// })
app.use(cors());


app.use('/auth', router)
// app.use('/profile', profileRoute)

const startServer = async () => {
    await connectDB();
    app.listen(5000, () => {
        console.log('http://localhost:5000')
    })
}
startServer();