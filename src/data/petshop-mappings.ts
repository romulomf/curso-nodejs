import { DataTypes, Sequelize } from "sequelize";
import { Call, Pet } from "../models/index";

async function petshopMappings(sequelize: Sequelize): Promise<void> {
	Call.init({
		Id: {
			field: 'ID',
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrementIdentity: true,
			primaryKey: true,
			allowNull: false,
			comment: 'Identificador exclusivo'
		},
		Client: {
			field: 'CLIENT',
			type: DataTypes.STRING,
			allowNull: false,
			comment: 'Nome do cliente'
		},
		Date: {
			field: 'DATE',
			type: DataTypes.DATE,
			allowNull: false,
			comment: 'Data e Hora do agendamento'
		},
		PetId: {
			field: 'PET_ID',
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Call',
				key: 'ID'
			},
			comment: 'Código do pet'
		},
		Service: {
			field: 'SERVICE',
			type: DataTypes.STRING,
			allowNull: true,
			comment: 'O serviço que deve ser feito'
		},
		Status: {
			field: 'STATUS',
			type: DataTypes.STRING,
			allowNull: false,
			comment: 'A situação do agendamento'
		},
		Observations: {
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

	Pet.init({
		Id: {
			field: 'ID',
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrementIdentity: true,
			primaryKey: true,
			allowNull: false,
			comment: 'Identificador exclusivo'
		},
		Name: {
			field: 'NAME',
			type: DataTypes.STRING,
			allowNull: false,
			comment: 'Nome ou Apelido do Pet'
		},
		FileData: {
			field: 'FILEDATA',
			type: DataTypes.BLOB,
			allowNull: true,
			comment: 'Dados da imagem de perfil do pet'
		},
		FileName: {
			field: 'FILENAME',
			type: DataTypes.STRING,
			allowNull: true,
			comment: 'Nome do arquivo de imagem do pet'
		}
	}, {
		sequelize,
		tableName: 'PETS',
		timestamps: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		version: 'VERSION'
	});

	Call.belongsTo(Pet, {
		foreignKey: 'PetId',
		as: 'Pet'
	});
	
	Pet.hasMany(Call, {
		as: 'Pet',
	});

	Call.sync();

	Pet.sync();
}

export default petshopMappings;