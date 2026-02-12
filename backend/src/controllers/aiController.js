const { GoogleGenerativeAI } = require("@google/generative-ai");

// Khởi tạo Gemini AI với API Key bảo mật tại server 
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.analyzeCode = async (req, res) => {
  try {
    const { code, exercisePrompt } = req.body; // Nhận dữ liệu từ Frontend [cite: 30]

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Thiết lập System Prompt để Gemini trả về đúng định dạng yêu cầu [cite: 31, 33]
    const prompt = `
      Bạn là một trợ giảng lập trình. Đây là đề bài: "${exercisePrompt}".
      Đây là mã nguồn của sinh viên: "${code}".
      Hãy phân tích và trả về kết quả dưới định dạng JSON gồm các trường:
      - syntax_errors: Lỗi cú pháp (nếu có).
      - logic_errors: Lỗi logic so với đề bài.
      - suggestions: Gợi ý cách sửa (không cung cấp toàn bộ code giải).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Trả kết quả về cho Frontend [cite: 68]
    res.json(JSON.parse(text));
  } catch (error) {
    res.status(500).json({ error: "Lỗi kết nối với AI Engine" });
  }
};