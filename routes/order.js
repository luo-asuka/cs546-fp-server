const express = require("express");
const router = express.Router();
const data = require("../data");
const itemsData = data.items;
const usersData = data.users;
const ordersData = data.orders;

router.post("/", async (req, res) => {
	const sellerid = req.cookies.AuthCookie;
	const buyerid = req.body.buyerid;
	const itemid = req.body.itemid;
	const oid = itemid + "_" + buyerid;
	const status = "processing";

	const order = {
		oid: oid,
		buyerid: buyerid,
		sellerid: sellerid,
		itemid: itemid,
		status: status,
		buyerComment: "",
		sellerComment: ""
	};

	try {
		await ordersData.newOrder(order);
		res.redirect("/itemlist");
	}
	catch (error) {
		res.status(404).json({ error: error});
	}


});


router.get("/:oid", async (req, res) => {
	if (!req.cookies.AuthCookie) {
		//not logged in yet
		res.redirect("/login");
	}
	
	const oid = req.params.oid;
	const order = await ordersData.getOder(oid);
	if (order) {
		res.render("order", order);
	}
	else {
		res.status(404).json({ error: "Not Found" });
	}
	
});

router.post("/status/:oid", async (req, res) => {
	const oid = req.params.oid;
	const status = req.body.status;
	await ordersData.updateStatus(oid, status);
	
});

module.exports = router;