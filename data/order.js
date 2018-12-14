const orders = require("../config/mongoCollections").order;

module.exports = {

	async newOrder(order) {
		const orderCollection = await orders();
		const newInsertInformation = await itemCollection.insertOne(order);
		return newInsertInformation;

	},

	async getOrder(oid) {
		const orderCollection = await orders();
		const order = await itemCollection.findOne({"oid": oid});
		return order;
	},

	async updateStatus(oid, newStatus) {
		const orderCollection = await orders();
		orderCollection.update( { "oid": oid }, { $set: {"status": newStatus} });
	},

	async addBuyerCmt(oid, comment) {
		const orderCollection = await orders();
		orderCollection.update( { "oid": oid }, { $set: {"buyerComment": comment} });
	},

	async addSellerCmt(oid, comment) {
		const orderCollection = await orders();
		orderCollection.update( { "oid": oid }, { $set: {"sellerComment": comment} });
	}
}


