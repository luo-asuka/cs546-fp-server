const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const data = require("../data");
const usersData = data.user;

const saltRounds = 10;


router.get("/signup", (req, res) => {
	res.render("signup");
});



router.post("/signup", async (req, res) => {
	const uid = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	const hashedPassword = bcrypt.hashSync(password, saltRounds);
	const user = {
		uid: uid,
		hashedPassword: hashedPassword,
		email, email
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