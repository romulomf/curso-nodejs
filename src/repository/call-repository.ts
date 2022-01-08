// import moment from "moment";
import { Call } from "../models/index";
import { CallDto } from "../dtos/index";

class CallRepository {

	constructor() {
		// construtor padrão
	}

	public static async drop(id: number): Promise<boolean> {
		// const connection = await pool.getConnection();
		// const sql = `DELETE FROM CALLS WHERE ID = ${id}`;
		// try {
		// 	const rows = await connection.query(sql);
		// 	const deletedRows: number = rows.affectedRows;
		// 	return deletedRows > 0;
		// } catch (error) {
		// 	throw new Error(`Erro ao excluir o Atendimento #${id}\n${error}`);
		// }
		const rows = await Call.destroy({
			where: { Id: id }
		});
		return rows > 0;
		// throw new Error('não implementado');
	}

	public static async findAll(): Promise<Call[]> {
		// const connection = await pool.getConnection();
		// const sql = `SELECT ID, \`CLIENT\`, \`DATE\`, PET, \`SERVICE\`, \`STATUS\`, OBSERVATIONS FROM CALLS`;
		// try {
		// 	const rows: any[] = await connection.query(sql);
		// 	return rows.map(r => {
		// 		return {
		// 			Id: r.ID,
		// 			Client: r.CLIENT,
		// 			Date: new Date(r.DATE),
		// 			Pet: r.PET,
		// 			Service: r.SERVICE,
		// 			Status: r.STATUS,
		// 			Observations: r.OBSERVATIONS
		// 		} as Call;
		// 	})
		// } catch (error) {
		// 	throw new Error(`Erro ao obter os atendimentos\n${error}`);
		// }
		return Call.findAll();
		// throw new Error('não implementado');
	}

	public static async save(dto: CallDto): Promise<Call> {
		// const connection = await pool.getConnection();
		// const sql: string = `
		// INSERT INTO
		// 	CALLS (CLIENT, DATE, PET, SERVICE, STATUS, OBSERVATIONS)
		// VALUES
		// 	('${call.Client}', '${moment(call.Date).format('YYYY-MM-DD')}', '${call.Pet}', '${call.Service}', '${call.Status}', '${call.Observations}');
		// `;
		// try {
		// 	const response: any = await connection.query(sql);
		// 	call.Id = response.insertId;
		// 	return call;
		// } catch (error) {
		// 	throw new Error(`Erro ao salvar o atendimento:\n${error}`);
		// }
		return Call.create({
			Client: dto.Client,
			Date: dto.Date,
			Pet: dto.Pet,
			Service: dto.Service,
			Status: dto.Status,
			Observations: dto.Observations
		});
		// throw new Error('não implementado');
	}
}

export default CallRepository;