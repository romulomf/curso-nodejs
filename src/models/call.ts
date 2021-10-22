import { CallDto } from '../dtos/index';
import { petshopDatabase } from '../data/index';
import { Model, DataTypes } from 'sequelize';

const sequelize = petshopDatabase();

class Call extends Model {

	private _id?: number;

	private _client!: string;

	private _date!: Date;

	private _pet!: string;

	private _service?: string;

	private _status!: string;

	private _observations?: string;

	constructor() {
		super();
	}

	public get Id(): number | undefined {
		return this._id;
	}

	public set Id(id: number | undefined) {
		this._id = id;
	}

	public get Client(): string {
		return this._client;
	}

	public set Client(client: string) {
		this._client = client;
	}

	public get Date(): Date {
		return this._date;
	}

	public set Date(date: Date) {
		this._date = date;
	}

	public get Pet(): string {
		return this._pet;
	}

	public set Pet(pet: string) {
		this._pet = pet;
	}

	public get Service(): string | undefined {
		return this._service;
	}

	public set Service(service: string | undefined) {
		this._service = service;
	}

	public get Status(): string {
		return this._status;
	}

	public set Status(status: string) {
		this._status = status;
	}

	public get Observations(): string | undefined {
		return this._observations;
	}

	public set Observations(observations: string | undefined) {
		this._observations = observations;
	}

	public static FromDto(dto: CallDto): Call {
		const call = new Call();
		call.Id = dto.Id;
		call.Client = dto.Client;
		call.Date = dto.Date;
		call.Pet = dto.Pet;
		call.Service = dto.Service;
		call.Status = dto.Status;
		call.Observations = dto.Observations;
		return call;
	}

	public ToDto(): CallDto {
		return {
			Id: this.Id,
			Client: this.Client,
			Date: this.Date,
			Pet: this.Pet,
			Service: this.Service,
			Status: this.Status,
			Observations: this.Observations
		};
	}
}

Call.init({
	_id: {
		field: 'ID',
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrementIdentity: true,
		primaryKey: true,
		allowNull: false,
		comment: 'Identificador exclusivo'
	},
	_client: {
		field: 'CLIENT',
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'Cliente'
	},
	_date: {
		field: 'DATE',
		type: DataTypes.DATE,
		allowNull: false,
		comment: 'Data / Hora do agendamento'
	},
	_pet: {
		field: 'PET',
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'Nome / Apelido do pet'
	},
	_service: {
		field: 'SERVICE',
		type: DataTypes.STRING,
		allowNull: true,
		comment: 'O serviço que deve ser feito'
	},
	_status: {
		field: 'STATUS',
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'A situação do agendamento'
	},
	_observations: {
		field: 'OBSERVATIONS',
		type: DataTypes.STRING,
		allowNull: true,
		comment: 'Notas adicionais sobre o agendamento'
	}
}, {
	sequelize,
	tableName: 'CALLS',
	timestamps: true,
	createdAt: 'CREATED_AT',
	updatedAt: 'UPDATED_AT',
	version: 'VERSION'
});

Call.sync();

export default Call;