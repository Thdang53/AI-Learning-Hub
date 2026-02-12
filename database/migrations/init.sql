-- Lưu thông tin phản hồi của AI cho từng lần nộp bài [cite: 51]
CREATE TABLE AI_Feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    submission_id INT,
    syntax_errors JSON,
    logic_errors JSON,
    suggestions TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Lưu lịch sử hội thoại của Chatbot [cite: 52]
CREATE TABLE ChatHistory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT,
    role ENUM('user', 'assistant'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);