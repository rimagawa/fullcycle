const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'db',
	user: 'root',
	password: 'password',
	database: 'nodedb',
});

con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');
	const sql =
		'CREATE TABLE users (name VARCHAR(255), id INT NOT NULL AUTO_INCREMENT)';
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('Table users created');
	});
	var sql_insert =
		"INSERT INTO users (name) VALUES ('Rafael')";
	con.query(sql_insert, function (err, result) {
		if (err) throw err;
		console.log('1 record inserted');
	});
});

app.get('/', (req, res) => {
	con.connect(function (err) {
		if (err) throw err;
		console.log('Connected!');
		const sql = 'SELECT name FROM users';
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log(result);
		});
	});
	res.send('<h1>Full Cycle Rocks!</h1>');
});

const PORT = 4400;

app.listen(PORT, () => {
	console.log(`PORT running on: ${PORT}`);
});
