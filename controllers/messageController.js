const mygroup = require('../models/mygroup');

exports.getAll = (req, res) => {
    const { id } = req.params;
    if (!id) {
        const names = mygroup.map((member) => `<li>${member.name}</li>`);
        const html = `<html><body><ul>${names.join('')}</ul></body></html>`;
        res.send(html);
    } else {
        res.send('Not valid');
    }
};
