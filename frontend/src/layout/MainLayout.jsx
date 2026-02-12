import React from 'react';
// Sửa lại đường dẫn import để trỏ đúng vào thư mục components
import CodeEditor from '../components/Editor/CodeEditor';
import LessonContent from '../components/Sidebar/LessonContent';
import AIChat from '../components/Sidebar/AIChat';
import Output from '../components/Terminal/Output';
import AIFeedback from '../components/Terminal/AIFeedback';
import { Play, UploadCloud } from 'lucide-react';

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-900 text-white overflow-hidden">
      
      {/* --- CỘT TRÁI (30%): Nội dung & Chatbot --- */}
      <div className="w-[30%] flex flex-col border-r border-gray-700">
        <div className="h-1/2 overflow-y-auto border-b border-gray-700 bg-gray-900">
          <LessonContent />
        </div>
        <div className="h-1/2 flex flex-col bg-gray-800">
          <AIChat />
        </div>
      </div>

      {/* --- CỘT GIỮA (40%): Trình soạn thảo Code --- */}
      <div className="w-[40%] flex flex-col border-r border-gray-700 bg-[#1e1e1e]">
        <div className="h-12 bg-gray-800 flex items-center px-4 justify-between border-b border-gray-700">
           <div className="flex items-center gap-2">
             <span className="text-sm font-semibold text-gray-300">main.js</span>
           </div>
           <div className="flex gap-2">
             <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-xs px-3 py-1.5 rounded text-white font-medium transition-colors">
               <Play size={14} /> Chạy Code
             </button>
             <button className="flex items-center gap-1 bg-green-600 hover:bg-green-500 text-xs px-3 py-1.5 rounded text-white font-medium transition-colors">
               <UploadCloud size={14} /> Nộp Bài
             </button>
           </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <CodeEditor />
        </div>
      </div>

      {/* --- CỘT PHẢI (30%): Terminal & Feedback --- */}
      <div className="w-[30%] flex flex-col bg-black">
        <div className="h-1/2 flex flex-col border-b border-gray-700">
           <div className="h-8 bg-gray-800 flex items-center px-3 border-b border-gray-700">
             <span className="text-xs uppercase font-bold text-gray-400">Terminal Output</span>
           </div>
           <Output />
        </div>
        <div className="h-1/2 flex flex-col bg-gray-900">
           <div className="h-8 bg-gray-800 flex items-center px-3 border-b border-gray-700 justify-between">
             <span className="text-xs uppercase font-bold text-purple-400">✨ AI Analysis</span>
             <span className="text-[10px] text-gray-500">Powered by Gemini</span>
           </div>
           <AIFeedback />
        </div>
      </div>

    </div>
  );
};

export default MainLayout;