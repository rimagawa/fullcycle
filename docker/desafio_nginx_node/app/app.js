const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("<h1>Full Cycle Rocks!</h1>");
});

const PORT = process.env.PORT || 4400;

app.listen(PORT, () => {
	console.log(`PORT running on: ${PORT}`);
});
