const dbConnection = require("./mongoConnection");


const getCollectionFn = collection => {
	let _col = undefined;

	return async () => {
		if (!_col) {
			const db = await dbConnection();
			_col = await db.collection(collection);
		}
		return _col;
	};
};

module.exports = {
	user: getCollectionFn("user"),
	item: getCollectionFn("item"),
	order: getCollectionFn("order"),
	message: getCollectionFn("message"),
	static: getCollectionFn("static"),
};
