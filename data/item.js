const item = require("../config/mongoCollections").item;

module.exports = {

	async addItem(item) {
		const itemCollection = await item();
		const newInsertInformation = await itemCollection.insertOne(item);
		return newInsertInformation;
	},

	async getItem(iid) {
		const itemCollection = await item();
		const item = await itemCollection.findOne({iid: iid});
		return item
	},

	async getItemsByTag(tag) {
		const itemCollection = await item();
		const items = await itemCollection.find({"tag": tag});
		return items;
	}

	async getItemsByUser(uid) {
		const itemCollection = await item();
		const items = await itemCollection.find({"uid": uid});
		return items;
	}
}


