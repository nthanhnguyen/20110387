const mygroup = require('../models/mygroup');

exports.getOne = (req, res) => {
    const { MSSV, id } = req.params;
    const member = mygroup.find((item) => item.id === MSSV);

    if (member) {
        res.json(member);
    } else {
        res.json({ error: 'not valid' });
    }
};

exports.addOne = (req, res) => {
    const { MSSV, id } = req.params;
    const { id: newMSSV, name } = req.body;

    // Kiểm tra điều kiện để thêm thành viên vào mygroup
    if (newMSSV === MSSV && !mygroup.some((item) => item.id === newMSSV)) {
        mygroup.push({ id: newMSSV, name });
        res.json({ success: 'Member added successfully' });
    } else {
        res.json({ error: 'Not valid' });
    }
};
