const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/', (_req, res) => {
    res.status(200).json({
        'project name': 'NBA',
        'description': 'Industry project',
        'createdBy': 'Jon Wu'
    })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));