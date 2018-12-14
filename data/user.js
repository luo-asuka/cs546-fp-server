const user = require("../config/mongoCollections").user;

module.exports = {

	async addUser(user) {
		const userCollection = await user();
		let newUer = {
			uid: user.uid,
			hashedPassword: user.hashedPassword,
			email: user.email,
			itemList: [],
			msgList: []
		};
		const newInsertInformation = await userCollection.insertOne(newUer);
		return newInsertInformation;
	},

	async getUser(uid) {
		const userCollection = await user();
		const user = await userCollection.findOne({uid: uid});
		return user;

	},

	async changePW(uid, newHashedPassword) {

	},

	async addItem(uid, iid) {
		const userCollection = await user();
		let user = this.getUser(uid);
		let itemList = user.itemList;
		itemList.push(iid);
		userCollection.update(	{ "uid": uid },
								{ $set: {"itemList": itemList} } );
	},

	async receiveMsg(uid, mid) {
		const userCollection = await user();
		let user = this.getUser(uid);
		let msgList = user.msgList;
		msgList.push(mid);
		userCollection.update(	{ "uid": uid },
								{ $set: {"msgList": msgList} } );
	}

}


