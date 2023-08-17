import Chance from "chance";
const chance = new Chance();

const Random = {
	id(): string {
		return chance.string({
			length: 6,
			casing: "lower",
			alpha: true,
			numeric: true,
		});
	},

	name(): string {
		return chance.name();
	},

	avatar(): string {
		return chance.avatar({fileExtension: "jpg", protocal: "https"});
	},
};

export default Random;
