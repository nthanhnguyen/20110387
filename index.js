const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Khởi tạo danh sách mygroup
const mygroup = [{ id: '20110387', name: 'Nguyen Thanh Nguyen' }];

// Routes
const indexRouter = require('./routes/index');
const MSSVRouter = require('./routes/MSSV');
const messageRouter = require('./routes/message');

app.use('/', indexRouter);
app.use('/:MSSV/:id', MSSVRouter);
app.use('/message/:id', messageRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
