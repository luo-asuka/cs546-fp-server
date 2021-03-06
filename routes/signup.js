const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const data = require("../data");
const usersData = data.users;

const saltRounds = 10;


router.get("/", (req, res) => {
	res.render("signup");
});



router.post("/", async (req, res) => {
	const uid = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	const hashedPassword = await bcrypt.hash(password, saltRounds);
	const user = {
		uid: uid,
		hashedPassword: hashedPassword,
		email: email,
		itemList: [],
		msgList: []
	};
	try {
		await usersData.addUser(user);
		res.redirect("/login");
	}
	catch (error) {
		res.status(404).json({ error: error });
	}

});


module.exports = router;