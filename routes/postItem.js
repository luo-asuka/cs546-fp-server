const express = require("express");
const router = express.Router();
const data = require("../data");
const itemsData = data.items;
const usersData = data.users;

router.get("/", (req, res) => {
	// if (!req.cookies.AuthCookie) {
	// 	//not logged in yet
	// 	res.redirect("/login");
	// 	return;
	// }
	res.render("postitem");
});

router.post("/", async (req, res) => {
	const uid = req.cookies.AuthCookie;		//seller id
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