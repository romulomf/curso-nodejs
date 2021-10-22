class RepositoryError extends Error {

	constructor(message: string) {
		super()
		this.message = message;
		this.name = 'RepositoryError';
	}
}

export default RepositoryError;