import { PetDto } from '../dtos/index';
import { petshopDatabase } from '../data/index';
import { Model, DataTypes } from 'sequelize';

const sequelize = petshopDatabase();

class Pet extends Model {

	private _id?: number;

	private _name!: string;

	constructor() {
		super();
	}

	public get Id(): number | undefined {
		return this._id;
	}

	public set Id(id: number | undefined) {
		this._id = id;
	}

	public get Name(): string {
		return this._name;
	}

	public set Name(name: string) {
		this._name = name;
	}

	Profile?: {
		Data: Buffer,
		Name: string,
		Type: string
	};

	public static FromDto(dto: PetDto): Pet {
		const pet = new Pet();
		pet.Id = dto.Id;
		pet.Name = dto.Name;
		pet.Profile = dto.Profile;
		return pet;
	}
}

Pet.init({
	_id: {
		field: 'ID',
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrementIdentity: true,
		primaryKey: true,
		allowNull: false,
		comment: 'Identificador exclusivo'
	},
	_name: {
		field: 'NAME',
		type: DataTypes.STRING,
		allowNull: false,
		comment: 'Nome / Apelido do Pet'
	},
}, {
	sequelize,
	tableName: 'PETS',
	timestamps: true,
	createdAt: 'CREATED_AT',
	updatedAt: 'UPDATED_AT',
	version: 'VERSION'
});

Pet.sync();

export default Pet;