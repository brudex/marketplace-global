"use strict";
// Import Models[node_modules]
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import passport from "passport";
import mogran from "morgan";
// Import Models[pastas]
import passportConfig from "./config/passport";
import routes from "./routes";
import appLocalsData from "./app.locals.data";
const app = express();
app.use(express.json());
// Morgan
app.use(mogran("dev"));

// Session
app.use(
	session({
		secret: process.env.SESSION_SECRET_KEY,
		resave: true,
		saveUninitialized: true,
	})
);

// PassPort
passportConfig(passport);
app.use(passport.initialize());
app.use(passport.session());

// Body Parser
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.use(ejsLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// static files
app.use(express.static(path.join(__dirname, "..", "public")));

// Materialize
app.use(
	express.static(
		path.join(__dirname, "..", "node_modules", "materialize-css", "dist")
	)
);

function populateLocals(res) {
	const locals = appLocalsData.getLocalsData();
	console.log("locals>>", locals);
	assignLocals(res, locals);
}

setTimeout(function () {
	console.log("Populating app locals >>>");
	appLocalsData.populateAppLocals(function (appLocals) {
		console.log("App locals Populated >>", appLocals);
	});
}, 1000);

function assignLocals(res, appLocals) {
	res.locals.categories = appLocals.categories;
	res.locals.zones = appLocals.zones;
}

app.use(async function loadDataFromDatabase(req, res, next) {
	try {
		const data = populateLocals(res);

		next();
	} catch (error) {
		// Handle errors if data loading fails
		console.error("Error loading data from database:", error);
		next(error); // Pass error to the error handling middleware
	}
});
app.use(function (err, req, res, next) {
	console.error(err);
	res.status(500).send("Internal Server Error");
});

// Rotas
app.use(routes);

export default app;
