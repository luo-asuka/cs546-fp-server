const express = require("express");
const router = express.Router();
const data = require("../data");
const itemsData = data.item;
const usersData = data.user;

router.post("/", asnyc (req, res) => {
	const uid = req.cookies.AuthCookie;
	const title = req.body.title;
	const iid = uid + "_" + title;
	const condition = req.body.condition;
	const description = req.body.description;
	const originalPrice = req.body.originalPrice;
	const currentPrice = req.body.currentPrice;
	const tag = req.body.tag;

	const item = {
		iid: iid,
		title: title,
		description: description,
		condition: condition,
		originalPrice: originalPrice,
		currentPrice: currentPrice,
		tag: tag
	};

	try {
		await itemsData.addItem(item);
		await usersData.addItem(uid, iid);
		res.redirect("/itemlist");
	}
	catch (error) {
		res.status(404).json({ error: error});
	}

});



module.exports = router;