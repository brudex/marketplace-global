// Rotas GET
const getHomePage = (req, res) => {
	res.render("page/home", { session: false });
};

// export default {
// 	getHomePage,
// };

module.exports = { getHomePage };
