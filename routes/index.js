const loginRoutes = require("./login");

const constructorMethod = app => {
	app.use("/login", loginRoutes);

	app.use("*", (req, res) => {
		res.redirec("/");
	});
}

module.exports = constructorMethod;