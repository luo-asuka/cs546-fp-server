const items = require("../config/mongoCollections").item;

module.exports = {

	async addItem(item) {
		const itemCollection = await items();
		const newInsertInformation = await itemCollection.insertOne(item);
		return newInsertInformation;
	},

	async getItem(iid) {
		const itemCollection = await items();
		const item = await itemCollection.findOne({"iid": iid});
		return item;
	},

	async getItemsByTag(tag) {
		const itemCollection = await items();
		const itemList = await itemCollection.find({"tag": tag});
		return itemList;
	},

	async getItemsByUser(uid) {
		const itemCollection = await items();
		const itemList = await itemCollection.find({"uid": uid});
		return itemList;
	}
}


