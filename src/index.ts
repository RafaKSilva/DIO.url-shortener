import express, { Response, Request} from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const urlController =  new URLController();

app.post('/shorten',urlController.shorten);
app.get('/:hash',urlController.redirect);

app.get('/status',(req: Request, res: Response) => {
	res.send("server OK");
});

app.listen(5000,() => {
	console.log('access on httt://localhost:5000');
});




