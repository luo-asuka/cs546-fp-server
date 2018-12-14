const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const data = require("../data");
const usersData = data.user;


router.get("/", (req, res) => {
	if (req.cookies.AuthCookie) {
		//logged in
		res.redirect("/items");
	}
	else {
		res.render("login");
	}
});



router.post("/", async (req, res) => {
	const uid = req.body.username;
	const password = req.body.password;
	const user = usersData.getUser(uid);
	if (user) {
		//find user
		const match = await bcrypt.compare(password, user.hashedPassword);
		if (match) {
			//password matches
			const expiresAt = new Date();
			expiresAt.setHours(expiresAt.getHours() + 24);
			res.cookie("AuthCookie", uid, { expires: expiresAt });
			res.redirect("/itemlist");
		}
		else {
			//psaaword does not match
			res.status(401);
			res.render("login", { error: "The password dose not match" });

		}
	}
	else {
		//no such user
		res.status(401);
		res.render("login", { error: "No such user" });
	}
	

});

module.exports = router;