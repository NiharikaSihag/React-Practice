import express from 'express';
import connectToDB from './db.js';
import router from './Routes/NRoutes.js';

const app = express();
app.use(express.json());
app.get('/', (req,res) => {
    res.send('Heyy')
})
app.use('', router);
const startServer = async() =>{
    connectToDB();

    app.listen(5000, () => {
        console.log('Server started at : http://localhost:5000')
    })
}
startServer();