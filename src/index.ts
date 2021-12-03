import express from 'express';
import fileUpload from 'express-fileupload';
import {petshopDatabase, petshopMappings} from './data/index';
import {CallController, PetController} from './controllers/index';

const app: express.Express = express();

const server = app.listen(3000, async () => {
	console.log('o servidor express está em execução!')
	const sequelize = petshopDatabase();
	try {
		await sequelize.authenticate();
		petshopMappings(sequelize);
		console.info('sincronização com o banco de dados realizada com êxito');
	} catch (error) {
		console.error('não foi possível conectar com o banco de dados', error);
	}
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.text());

app.use(fileUpload({
	createParentPath: true
}));

app.use('/atendimento', CallController);
app.use('/pet', PetController);

process.on('SIGTERM', () => {
	server.close(() => console.info('O servidor express foi encerrado.'));
});