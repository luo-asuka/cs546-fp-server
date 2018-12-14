const signupRoutes = require("./signup");
const loginRoutes = require("./login");
const postItemRoutes = require("./postItem");
const orderRoutes = require("./order");

const constructorMethod = app => {
	app.use("/signup", signupRoutes);
	app.use("/login", loginRoutes);
	app.use("/postitem", postItemRoutes);
	app.use("/order", orderRoutes);


	app.use("*", (req, res) => {
		res.status(404).json({ error: "Not Found" });
	});
}

module.exports = constructorMethod;