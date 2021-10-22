interface CallDto {

	Id?: number;

	Client: string;

	Date: Date;

	Pet: string;

	Service?: string;

	Status: string;

	Observations?: string;
}

export default CallDto;