import React from 'react';
import { Send, Bot } from 'lucide-react';

const AIChat = () => {
  return (
    <>
      <div className="p-3 bg-gray-800 font-semibold text-sm border-b border-gray-700 flex items-center gap-2 text-white">
        <Bot size={16} className="text-green-400"/> Trợ giảng AI
      </div>
      
      {/* Khu vực tin nhắn */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-900">
        <div className="flex gap-2">
           <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shrink-0">
             <Bot size={16} text-white />
           </div>
           <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none text-sm text-gray-200">
             Chào bạn! Mình là trợ lý ảo SmartCode. Bạn cần giúp đỡ gì với bài tập này không?
           </div>
        </div>
      </div>

      {/* Ô nhập liệu */}
      <div className="p-3 border-t border-gray-700 bg-gray-800 flex gap-2">
        <input 
          type="text" 
          placeholder="Hỏi AI..." 
          className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm text-white outline-none focus:border-blue-500 focus:bg-gray-600 transition-colors"
        />
        <button className="p-2 bg-blue-600 rounded hover:bg-blue-500 text-white transition-colors">
          <Send size={16} />
        </button>
      </div>
    </>
  );
};

export default AIChat;