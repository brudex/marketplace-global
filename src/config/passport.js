"use strict";
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");
const { User, Merchant } = db.sequelize.models;

module.exports = async (passport) => {
	passport.use(
		"local-login",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
			},
			async (email, password, done) => {
				try {
					const user = await User.findOne({ where: { email }, raw: true });
					const merchant = await Merchant.findOne({
						where: { email },
						raw: true,
					});

					console.log("user login", user, "merchant login", merchant);

					if (user) {
						if (User.comparePassword(password, user)) {
							return done(null, user);
						} else {
							return done(null, false, { message: "" });
						}
					}

					console.log("got here merchant");
					if (merchant) {
						if (Merchant.comparePassword(password, merchant)) {
							return done(null, merchant);
						} else {
							return done(null, false, { message: "" });
						}
					}

					return done(null, false, { message: "" });
				} catch (error) {
					console.log("error login", error);
					done(null, false, { message: "" });
				}
			}
		)
	);

	passport.use(
		"local-register",
		new LocalStrategy(
			{
				usernameField: "email",
				passwordField: "password",
				passReqToCallback: true,
			},
			async (req, email, password, done) => {
				const { username, confirmPassword, type } = req.body;

				console.log("req.body", req.body, "password>>", password);
				if (password != confirmPassword) {
					console.log("password not matching");
					return done(null, false, { message: "" });
				}

				if (type == "customer") {
					await User.create({ username, email, password })
						.then((user) => done(null, user))
						.catch((err) => done(null, false, { message: "" }));
				} else {
					console.log("got here");
					await Merchant.create({ ...req.body })
						.then((merchant) => {
							console.log("merchant saved", merchant);
							done(null, merchant);
						})

						.catch((err) => {
							console.log("error", err);
							done(null, false, { message: "" });
						});
				}
			}
		)
	);

	// passas os dados para sessão
	passport.serializeUser((user, done) => {
		console.log("password seriallizerUser", user);
		done(null, user.uuid || user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findByPk(id, { raw: true })
			.then((user) => done(null, user))
			.catch((err) => {
				Merchant.findByPk(id, { raw: true })
					.then((user) => done(null, user))
					.catch((err) => done(err));
			});
	});
};
