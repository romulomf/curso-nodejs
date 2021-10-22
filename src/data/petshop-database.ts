import config from 'config';
import { Sequelize } from 'sequelize';

function petshopDatabase(): Sequelize {
	return new Sequelize({
		host: config.get('storage.host'),
		port: config.get('storage.port'),
		database: config.get('storage.database'),
		username: config.get('storage.password'),
		password: config.get('storage.password'),
		dialect: 'mariadb',
		logging: console.log,
		pool: {
			min: 2,
			max: 8
		}
	});
}

export default petshopDatabase;