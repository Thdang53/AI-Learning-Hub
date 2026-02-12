const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', // Điền mật khẩu MySQL của bạn vào file .env
  database: process.env.DB_NAME || 'smartcode_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const promisePool = pool.promise();

console.log("🔌 Đang kết nối MySQL...");

module.exports = promisePool;