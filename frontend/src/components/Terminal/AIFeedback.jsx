import React from 'react';
import { AlertTriangle, CheckCircle, Lightbulb, XCircle } from 'lucide-react';

const AIFeedback = ({ analysis }) => {
  // 1. Trạng thái chờ: Khi chưa bấm chạy code
  if (!analysis) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 p-6 text-center">
        <Lightbulb size={32} className="mb-2 opacity-50" />
        <p className="text-xs">Nhấn "Run Code" để AI phân tích.</p>
      </div>
    );
  }

  // 2. Trạng thái lỗi: Nếu Backend trả về lỗi (hoặc Gemini không phản hồi đúng format)
  if (analysis.error) {
     return <div className="p-4 text-red-500 text-sm">Lỗi: {analysis.error}</div>;
  }

  // 3. Hiển thị kết quả phân tích
  return (
    <div className="h-full overflow-y-auto p-4 custom-scrollbar">
      
      {/* Điểm số */}
      <div className="flex items-center justify-between mb-4 bg-gray-50 p-3 rounded-lg border border-gray-100">
         <div>
            <span className="text-[10px] text-gray-400 uppercase font-bold">Chất lượng Code</span>
            <div className="text-lg font-bold text-gray-800">
              {/* Giả sử AI chưa trả về score thì mặc định 80 */}
              {analysis.score || "Đang chấm..."} 
            </div>
         </div>
         <div className="text-2xl">
            {analysis.syntax_errors && analysis.syntax_errors.length > 0 ? "⚠️" : "✅"}
         </div>
      </div>

      {/* Danh sách lỗi cú pháp (Syntax Errors) */}
      {analysis.syntax_errors && analysis.syntax_errors.length > 0 && (
        <div className="mb-4">
           <h4 className="text-xs font-bold text-red-500 uppercase mb-2 flex items-center gap-1">
             <XCircle size={14} /> Cần khắc phục
           </h4>
           <div className="space-y-2">
             {analysis.syntax_errors.map((err, idx) => (
               <div key={idx} className="bg-red-50 border-l-2 border-red-400 p-2 text-xs text-red-800">
                 {typeof err === 'string' ? err : JSON.stringify(err)}
               </div>
             ))}
           </div>
        </div>
      )}

      {/* Gợi ý (Suggestions) */}
      {analysis.suggestions && (
        <div>
           <h4 className="text-xs font-bold text-blue-500 uppercase mb-2 flex items-center gap-1">
             <Lightbulb size={14} /> Gợi ý cải thiện
           </h4>
           <div className="bg-blue-50 p-3 rounded text-xs text-blue-900 leading-relaxed border border-blue-100">
              {/* Gemini có thể trả về string hoặc array, xử lý cả 2 */}
              {Array.isArray(analysis.suggestions) 
                ? analysis.suggestions.map((s, i) => <div key={i} className="mb-1">• {s}</div>)
                : analysis.suggestions
              }
           </div>
        </div>
      )}

    </div>
  );
};

export default AIFeedback;