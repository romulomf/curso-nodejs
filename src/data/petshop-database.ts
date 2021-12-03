import config from 'config';
import { Sequelize } from 'sequelize';

function petshopDatabase(): Sequelize {
	return new Sequelize({
		host: config.get('development.host'),
		port: 3306,
		database: config.get('development.database'),
		username: config.get('development.username'),
		password: config.get('development.password'),
		dialect: config.get('development.dialect'),
		logging: console.log,
		pool: {
			min: 2,
			max: 8
		}
	});
}

export default petshopDatabase;