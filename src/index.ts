import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import {petshopDatabase} from './data/index';
import {CallController, PetController} from './controllers/index';

const app: express.Express = express();

const sequelize = petshopDatabase();
sequelize.sync();

app.listen(3000, () => console.log('o servidor express está em execução!'));

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(fileUpload({
	createParentPath: true
}));

app.use('/atendimento', CallController);
app.use('/pet', PetController);