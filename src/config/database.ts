import config from 'config';
import { createPool, Pool } from 'mariadb';

const pool: Pool = createPool({
	host: config.get('storage.host'),
	port: config.get('storage.port'),
	database: config.get('storage.database'),
	user: config.get('storage.username'),
	password: config.get('storage.password')
});

export default pool;