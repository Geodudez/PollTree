const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '../public')))


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))