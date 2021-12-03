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

	/**
	 * @deprecated este método não deve mais ser utilizado.
	 */
	public static FromDto(dto: PetDto): Pet {
		const pet = new Pet();
		pet.Id = dto.Id;
		pet.Name = dto.Name;
		pet.Profile = dto.Profile;
		return pet;
	}

	public ToDto(): PetDto {
		return {
			Id: this.Id,
			Name: this.Name,
			Profile: this.Profile
		};
	}
}

export default Pet;