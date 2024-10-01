const express = require('express');
const mongoose = require('mongoose');
const quizRoutes = require('./routes/quizRoutes');
const questionRoutes = require('./routes/questionRoutes');

const app = express();
app.use(express.json()); // Middleware để phân tích JSON body

// Kết nối đến MongoDB
mongoose.connect('mongodb+srv://thanhphu1103:d1SeurNgEZWi3m1G@sdn.3g9im.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Sử dụng các router
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
