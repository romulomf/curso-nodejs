// import { pool } from '../config/index';
import { Pet } from '../models/index';

class PetRepository {

	constructor() {
		// construtor padrão
	}

	public static async drop(id: number): Promise<boolean> {
		// const connection = await pool.getConnection();
		// const sql = `DELETE FROM PETS WHERE ID = ${id}`;
		// try {
		// 	const rows = await connection.query(sql);
		// 	const deletedRows: number = rows.affectedRows;
		// 	return deletedRows > 0;
		// } catch(error) {
		// 	throw new Error(`Erro ao excluir o Pet #${id}\n${error}`);
		// }
		throw new Error('não implementado');
	}

	public static async findAll(): Promise<Pet[]> {
		// const connection = await pool.getConnection();
		// const sql = `SELECT ID, NAME, FILEDATA, FILENAME, MIMETYPE FROM PETS;`;
		// try {
		// 	const rows: any[] = await connection.query(sql);
		// 	return rows.map(r => {
		// 		return  {
		// 			Id: r.ID,
		// 			Name: r.NAME,
		// 			Profile: {
		// 				Data: r.FILEDATA,
		// 				Name: r.FILENAME,
		// 				Type: r.MIMETYPE,
		// 			}
		// 		} as Pet;
		// 	});
		// } catch(error) {
		// 	throw new Error(`Erro ao obter os pets:\n${error}`);
		// }
		throw new Error('não implementado');
	}

	public static async findOne(id: number): Promise<Pet | null> {
		// const connection = await pool.getConnection();
		// const sql = `SELECT ID, NAME, FILEDATA, FILENAME, MIMETYPE FROM PETS WHERE ID = ${id}`;
		// let rows: Array<any>;
		// try {
		// 	rows = await connection.query(sql);
		// } catch (error) {
		// 	throw new Error(`Erro ao obter o pet #${id}:\n${error}`);
		// }
		// if(rows.length == 1) {
		// 	return {
		// 		Id: rows[0].ID,
		// 		Name: rows[0].NAME,
		// 		Profile: {
		// 			Data: Buffer.from(rows[0].FILEDATA, 'binary'),
		// 			Name: rows[0].FILENAME,
		// 			Type: rows[0].MIMETYPE,
		// 		}
		// 	} as Pet;
		// }
		// return null;
		throw new Error('não implementado');
	}

	public static async save(pet: Pet): Promise<Pet> {
		// const connection = await pool.getConnection();
		// try {
		// 	const response: any = await connection.query({
		// 		namedPlaceholders: true,
		// 		sql: `INSERT INTO PETS (NAME, FILEDATA, FILENAME, MIMETYPE) VALUES (:name, :fileData, :fileName, :mimeType)`
		// 	},{
		// 		name: pet.Name,
		// 		fileData: pet.Profile?.Data,
		// 		fileName: pet.Profile?.Name,
		// 		mimeType: pet.Profile?.Type
		// 	});
		// 	pet.Id = response.insertId;
		// 	return pet;
		// } catch(error) {
		// 	throw new Error(`Erro ao salvar o pet:\n${error}`);
		// }
		throw new Error('não implementado');
	}
}

export default PetRepository;