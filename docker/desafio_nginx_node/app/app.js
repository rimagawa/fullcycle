const express = require('express');
const app = express();
const mysql = require('mysql2');

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
		'CREATE TABLE users (name VARCHAR(255), id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))';
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
function firstFunction() {
	return new Promise((resolve, reject) => {
		let lista = [];
		con.connect(function (err) {
			if (err) throw err;
			con.query('SELECT name FROM users', async function (err, result, fields) {
				if (err) throw err;
				result.forEach(element => {
					lista.push(element['name']);
				});
				// get the results from post table
				console.log('Loop completed.');
				resolve(lista); // <---- Resolve the promise here
			});
		});
	});
}

app.get('/', async (req, res) => {
	const result = await firstFunction()
	res.send('<h1>Full Cycle Rocks!</h1><br><p>' + result + '</p>');
});

const PORT = 4400;

app.listen(PORT, () => {
	console.log(`PORT running on: ${PORT}`);
});
