interface PetDto {

	Id?: number;

	Name: string;

	Profile?: {
		Data: Buffer,
		Name: string,
		Type: string
	};
}

export default PetDto;