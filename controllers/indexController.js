// controllers/indexController.js
const mygroup = require('../models/mygroup');

exports.getAll = (req, res) => {
    res.json(mygroup);
};
