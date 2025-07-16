




import express from 'express';
import dotenv from 'dotenv';
import movieRoutes from './routes/movieRoutes.js'




dotenv.config();


const app = express();
const PORT = 3000;



app.use(express.json());
app.use('/api', movieRoutes);



app.listen(PORT, ()=> {console.log(`server is runnin on port: ${PORT}`)})