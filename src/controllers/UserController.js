const { User } = require("../models");
// import AppGlobalData from "../app.global.data";

// Rotas GET
const getLogin = (req, res) => {
	//res.render("page/login", { session: false, layout: "login" });
	res.locals.zones = AppGlobalData.zones;
	res.render("page/auth", { title: "Login Page", layout: "layout/auth" });
};

const getRegister = (req, res) => {
	res.locals.zones = AppGlobalData.zones;
	res.render("page/auth#sign-up", {
		title: "Login Page",
		layout: "layout/auth",
	});
};

const getIndex = async (req, res) => {
	//res.locals.user = { name: "John", email: "john@example.com" };
	// res.locals.categories = AppGlobalData.categories;
	// res.locals.zones = AppGlobalData.zones;

	// console.log("AppGlobalData.categories", AppGlobalData.categories);
	// console.log("AppGlobalData.zones", AppGlobalData.zones);

	res.render("page", { session: false });
};

const getAbout = (req, res) => {
	res.render("page/about");
};

const getContact = (req, res) => {
	res.render("page/contact");
};

const getAuth = (req, res) => {
	res.render("page/login");
};

const getLogout = (req, res) => {
	req.logout();
	res.redirect("/"); // ADD rota depois do logout
};

module.exports = {
	getLogin,
	getRegister,
	getIndex,
	getAbout,
	getContact,
	getAuth,
	getLogout,
};
