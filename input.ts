class Base {
	public get: () => any;
	public value: any;

	constructor(value) {
		this.value = value;
		this.get = () => value;
	}
}

class Extension extends Base {
	public get!: () => number;
}

const b = new Base(123);
console.log("base get", b.get());

const e = new Extension(123);
console.log("extension get", e.get());
