import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const AIFeedback = () => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {/* Khi chưa có lỗi */}
      <div className="flex flex-col items-center justify-center h-full text-gray-500 text-sm text-center opacity-60">
        <p>Chạy code để nhận phân tích từ AI</p>
      </div>

      {/* Ví dụ UI khi có thông báo (Bạn có thể bỏ comment để xem thử) */}
      {/* <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-3 mb-3">
        <div className="flex items-center gap-2 text-red-400 font-semibold mb-1">
          <AlertTriangle size={16} /> Lỗi Cú Pháp
        </div>
        <p className="text-xs text-gray-300">Bạn quên dấu chấm phẩy <code>;</code> ở cuối dòng 5.</p>
      </div>

      <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-3">
        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
          <CheckCircle size={16} /> Gợi ý tối ưu
        </div>
        <p className="text-xs text-gray-300">Bạn có thể dùng <code>const</code> thay vì <code>var</code> để code an toàn hơn.</p>
      </div>
      */}
    </div>
  );
};

export default AIFeedback;