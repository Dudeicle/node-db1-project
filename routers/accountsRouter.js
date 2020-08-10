const express = require("express");

// database access using knex
const db = require("../data/dbConfig");

const router = express.Router();

// router.get("/", (req, res) => {
// 	db.select("*")
// 		.from("accounts")
// 		.then((accounts) => {
// 			res.status(200).json({ data: accounts });
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			res.status(500).json({ error: error.message });
// 		});
// });

router.get("/", (req, res) => {
	db("accounts")
		.then((accounts) => {
			res.status(200).json({ data: accounts });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ error: error.message });
		});
});

module.exports = router;
