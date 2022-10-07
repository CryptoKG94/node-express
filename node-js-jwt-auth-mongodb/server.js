const express = require('express');
const cors = require('cors');

const app = express();
var corsOptions = {
    origin: 'https://95.217.145.180:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to cryptokg94 application." });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, (req, res) => {
    console.log(`Server listening on ${PORT}`);
});