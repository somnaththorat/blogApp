import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors  from 'cors';
import postRoutes from './routes/routes.js';


const app = express();

app.use(bodyParser.json({limit:"30mb", extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:"true"}));

app.use(cors());
app.use('/posts',postRoutes);

const URL = 'mongodb://localhost:27017/blogApp';
const PORT = 5000;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`server successfully running on port ${PORT}`);
    });
}).catch(err => {
    console.log('ERROR: ', err);
});
