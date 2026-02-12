const express = require('express');
const router = express.Router();
// Import controller bạn đã có sẵn
const aiController = require('../controllers/aiController'); 

// Định nghĩa: Khi Frontend gọi POST /api/ai/analyze -> Chạy hàm analyzeCode
router.post('/analyze', aiController.analyzeCode);

module.exports = router;