const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const aiRoutes = require('./src/routes/aiRoutes'); // Chúng ta sẽ tạo file này ở bước 2

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Cấu hình Middleware
app.use(cors()); // Cho phép Frontend kết nối vào
app.use(express.json()); // Cho phép đọc dữ liệu JSON gửi lên

// Định nghĩa Routes (Tuyến đường)
app.use('/api/ai', aiRoutes);

// Route kiểm tra server sống hay chết
app.get('/', (req, res) => {
  res.send('✅ SmartCode Backend is running!');
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});