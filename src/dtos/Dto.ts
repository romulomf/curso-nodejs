interface Dto<T, U> {

	ToModel(): T;

	From(model: T): U;
}