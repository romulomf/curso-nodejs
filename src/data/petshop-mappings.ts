import { DataTypes, Sequelize } from "sequelize";
import { Call, Pet } from "../models/index";

function petshopMappings(sequelize: Sequelize): void {
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
		Pet: {
			field: 'PET',
			type: DataTypes.STRING,
			allowNull: false,
			comment: 'Nome ou Apelido do pet'
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
	
	Call.sync();

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
	}, {
		sequelize,
		tableName: 'PETS',
		timestamps: true,
		createdAt: 'CREATED_AT',
		updatedAt: 'UPDATED_AT',
		version: 'VERSION'
	});
	
	Pet.sync();
}


export default petshopMappings;