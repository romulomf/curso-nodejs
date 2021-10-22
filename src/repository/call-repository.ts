import moment from "moment";
import { pool } from "../config/index";
import { Call } from "../models/index";

class CallRepository {

	constructor() {
		// construtor padrão
	}

	public static async drop(id: number): Promise<boolean> {
		const connection = await pool.getConnection();
		const sql = `DELETE FROM CALLS WHERE ID = ${id}`;
		try {
			const rows = await connection.query(sql);
			const deletedRows: number = rows.affectedRows;
			return deletedRows > 0;
		} catch (error) {
			throw new Error(`Erro ao excluir o Atendimento #${id}\n${error}`);
		}
	}

	public static async findAll(): Promise<Call[]> {
		const connection = await pool.getConnection();
		const sql = `SELECT ID, \`CLIENT\`, \`DATE\`, PET, \`SERVICE\`, \`STATUS\`, OBSERVATIONS FROM CALLS`;
		try {
			const rows: any[] = await connection.query(sql);
			return rows.map(r => {
				return {
					Id: r.ID,
					Client: r.CLIENT,
					Date: new Date(r.DATE),
					Pet: r.PET,
					Service: r.SERVICE,
					Status: r.STATUS,
					Observations: r.OBSERVATIONS
				} as Call;
			})
		} catch (error) {
			throw new Error(`Erro ao obter os atendimentos\n${error}`);
		}
	}

	public static async save(call: Call): Promise<Call> {
		const connection = await pool.getConnection();
		const sql: string = `
		INSERT INTO
			CALLS (CLIENT, DATE, PET, SERVICE, STATUS, OBSERVATIONS)
		VALUES
			('${call.Client}', '${moment(call.Date).format('YYYY-MM-DD')}', '${call.Pet}', '${call.Service}', '${call.Status}', '${call.Observations}');
		`;
		try {
			const response: any = await connection.query(sql);
			call.Id = response.insertId;
			return call;
		} catch (error) {
			throw new Error(`Erro ao salvar o atendimento:\n${error}`);
		}
	}
}

export default CallRepository;