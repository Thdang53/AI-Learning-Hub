import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Workspace = () => {
  // Trạng thái lưu trữ mã nguồn và phản hồi từ AI
  const [code, setCode] = useState("// Viết mã JavaScript của bạn tại đây...");
  const [aiFeedback, setAiFeedback] = useState(null);

  // Giả lập luồng gửi code lên Backend để AI phân tích [cite: 30, 31, 32]
  const handleAskAI = () => {
    console.log("Đang gửi code tới Node.js Backend để Gemini phân tích...");
    // Mock dữ liệu trả về từ Gemini API [cite: 33, 51]
    setAiFeedback({
      syntax_errors: "Không có lỗi cú pháp.",
      logic_errors: "Bạn đang in thiếu số 10 trong yêu cầu bài toán.",
      suggestions: "Hãy thay đổi điều kiện vòng lặp từ 'i < 10' thành 'i <= 10'."
    });
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-gray-200">
      {/* Header điều hướng [cite: 60] */}
      <header className="h-14 border-b border-gray-700 bg-[#252526] flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold text-xl">SmartCode</span>
          <span className="text-gray-500 text-sm">| AI Tutor</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 rounded text-sm font-medium">Chạy Code</button>
          <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 rounded text-sm font-medium">Nộp Bài</button>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* CỘT TRÁI (30%): Nội dung bài học & Chatbot [cite: 55] */}
        <section className="w-[30%] border-r border-gray-700 flex flex-col bg-[#252526]">
          {/* Nửa trên: Lý thuyết & Đề bài [cite: 56] */}
          <div className="h-1/2 p-5 overflow-y-auto border-b border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-3">Bài 1: Vòng lặp cơ bản</h2>
            <div className="prose prose-invert text-sm text-gray-400 leading-relaxed">
              <p>Yêu cầu: Sử dụng vòng lặp <code>for</code> để in ra các số từ 1 đến 10.</p>
              <p className="mt-2 font-light">Lưu ý: Kết quả hiển thị trong phần Terminal bên phải.</p>
            </div>
          </div>
          {/* Nửa dưới: AI Chatbot [cite: 57, 36] */}
          <div className="h-1/2 flex flex-col">
            <div className="p-3 bg-gray-800/50 text-xs font-bold text-gray-500 uppercase">Trợ giảng ảo AI</div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              <div className="bg-blue-900/20 border border-blue-800/50 p-3 rounded-lg text-sm text-blue-200">
                Chào bạn! Mình là AI trợ giảng. Nếu gặp khó khăn khi giải bài này, hãy nhắn cho mình nhé!
              </div>
            </div>
            <div className="p-4 bg-[#1e1e1e]">
              <input 
                type="text" 
                placeholder="Hỏi AI về dòng code số 5..." 
                className="w-full bg-[#3c3c3c] border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* CỘT GIỮA (40%): Trình soạn thảo Monaco Editor [cite: 58, 59] */}
        <section className="w-[40%] border-r border-gray-700 relative flex flex-col">
          <div className="bg-[#2d2d2d] px-4 py-2 text-xs text-gray-400 border-b border-gray-700">
            main.js
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              theme="vs-dark"
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value)}
              options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false }}
            />
          </div>
          {/* Nút bấm nổi gọi AI [cite: 60] */}
          <button 
            onClick={handleAskAI}
            className="absolute bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform active:scale-95"
          >
            <span className="text-lg">✨</span>
            <span className="font-medium text-sm">Hỏi AI sửa lỗi</span>
          </button>
        </section>

        {/* CỘT PHẢI (30%): Terminal & AI Feedback [cite: 61] */}
        <section className="w-[30%] flex flex-col bg-[#1e1e1e]">
          {/* Terminal [cite: 62, 63] */}
          <div className="h-2/5 p-4 font-mono text-sm border-b border-gray-800 overflow-y-auto">
            <div className="text-gray-500 mb-2 font-bold select-none">{">"} TERMINAL</div>
            <div className="text-green-500">1 2 3 4 5 6 7 8 9</div>
          </div>
          {/* AI Feedback Area  */}
          <div className="h-3/5 p-5 overflow-y-auto">
            <div className="text-gray-500 mb-4 font-bold select-none underline decoration-purple-500/50 underline-offset-4">AI ANALYSIS</div>
            
            {!aiFeedback ? (
              <p className="text-gray-600 italic text-sm text-center mt-10">Nhấn nút "Hỏi AI sửa lỗi" để nhận phân tích mã nguồn từ Gemini.</p>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-red-900/10 border-l-4 border-red-500 rounded-r-md">
                  <h4 className="text-red-400 text-xs font-bold uppercase mb-1">Lỗi Logic</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{aiFeedback.logic_errors}</p>
                </div>
                <div className="p-4 bg-green-900/10 border-l-4 border-green-500 rounded-r-md">
                  <h4 className="text-green-400 text-xs font-bold uppercase mb-1">Gợi ý từ Gemini</h4>
                  <p className="text-gray-300 text-sm leading-relaxed italic">{aiFeedback.suggestions}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Workspace;