import express from 'express';
import helmet from 'helmet'; 
import cors from 'cors'; 
import bodyParser from 'body-parser'; 
import compression from 'compression'; 
import path from 'path'; 

const app = express();

app.enable('trust proxy');
app.use(helmet());
app.use(cors());
app.use(express.static(path.normalize(path.join(__dirname, 'frontend'))));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

export default app;
