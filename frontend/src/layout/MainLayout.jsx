import React, { useState } from 'react';
import CodeEditor from '../components/Editor/CodeEditor';
import LessonContent from '../components/Sidebar/LessonContent';
import AIChat from '../components/Sidebar/AIChat';
import Output from '../components/Terminal/Output';
import AIFeedback from '../components/Terminal/AIFeedback';
// Import service gọi API
import { getAIAnalysis } from '../services/aiService'; 
import { Play, CheckCircle, ChevronLeft, ChevronRight, BookOpen, MessageSquare, ArrowLeft, LayoutTemplate, Terminal } from 'lucide-react';

const MainLayout = () => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('lesson'); 
  const [isRunning, setIsRunning] = useState(false);
  
  // State lưu code của sinh viên (Mặc định là code mẫu)
  const [code, setCode] = useState("// Viết code của bạn tại đây...\nconsole.log('Hello World');");
  
  // State lưu kết quả phân tích từ AI (Gemini)
  const [aiResult, setAiResult] = useState(null);

  // Hàm xử lý khi bấm nút "Run Code"
  const handleRunCode = async () => {
    setIsRunning(true);
    setAiResult(null); // Reset kết quả cũ

    try {
      // 1. Gọi API Backend (cần đợi khoảng 2-3 giây)
      // "Đề bài..." là context gửi kèm để AI hiểu đang làm bài gì
      const result = await getAIAnalysis(code, "Đề bài: Viết chương trình Javascript cơ bản.");
      
      console.log("Kết quả từ AI:", result); // Debug xem log
      setAiResult(result); // 2. Lưu kết quả để hiển thị

    } catch (error) {
      console.error("Lỗi khi gọi AI:", error);
      alert("Không thể kết nối tới Server Backend. Hãy chắc chắn bạn đã chạy 'node server.js'");
    } finally {
      setIsRunning(false); // Tắt trạng thái loading
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#f0f0f0] overflow-hidden font-sans text-sm text-gray-800">
      
      {/* HEADER */}
      <header className="h-14 bg-white border-b border-gray-300 flex items-center justify-between px-4 shadow-sm z-30 shrink-0">
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-800 text-sm flex items-center gap-2">
              Bài 1: Giới thiệu Javascript
            </h1>
            <span className="text-[10px] text-gray-500">Chương 1: Nhập môn</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button 
              onClick={handleRunCode}
              disabled={isRunning}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all border border-gray-300 ${isRunning && 'opacity-50 cursor-not-allowed'}`}
           >
             <Play size={14} fill={isRunning ? "none" : "currentColor"} className={isRunning ? "animate-spin" : ""} /> 
             {isRunning ? 'Analyzing...' : 'Run Code'}
           </button>
           <button className="flex items-center gap-2 px-4 py-1.5 rounded-md font-bold text-white bg-green-600 hover:bg-green-700 transition-all shadow-sm shadow-green-600/20 active:scale-95">
             Submit <CheckCircle size={14} />
           </button>
        </div>
      </header>

      {/* BODY */}
      <div className="flex-1 flex overflow-hidden p-2 gap-2">
        
        {/* CỘT TRÁI */}
        <div className={`${leftOpen ? 'w-[35%] min-w-[320px]' : 'w-0'} flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 relative`}>
          {leftOpen && (
            <>
              <div className="flex border-b border-gray-100">
                <button onClick={() => setActiveTab('lesson')} className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'lesson' ? 'border-blue-500 text-blue-600 bg-blue-50/50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>
                  <BookOpen size={16} /> Bài học
                </button>
                <button onClick={() => setActiveTab('chat')} className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === 'chat' ? 'border-purple-500 text-purple-600 bg-purple-50/50' : 'border-transparent text-gray-500 hover:bg-gray-50'}`}>
                  <MessageSquare size={16} /> Trợ giảng AI
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {activeTab === 'lesson' ? <LessonContent /> : <AIChat />}
              </div>
            </>
          )}
        </div>

        {/* CỘT GIỮA: EDITOR */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] rounded-xl shadow-sm border border-gray-700 overflow-hidden relative min-w-0 z-10">
            <div className="h-9 bg-[#252526] border-b border-[#333] flex items-center justify-between px-3 select-none">
                 <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <span className="text-blue-400 font-bold">JS</span> main.js
                 </div>
                 <div className="flex gap-1">
                    <button onClick={() => setLeftOpen(!leftOpen)} className="p-1 hover:bg-white/10 rounded text-gray-400"><LayoutTemplate size={14}/></button>
                 </div>
            </div>
            <div className="flex-1 overflow-hidden">
              {/* Truyền hàm setCode để lấy dữ liệu code khi người dùng gõ */}
              <CodeEditor onChange={(value) => setCode(value || "")} />
            </div>
        </div>

        {/* CỘT PHẢI: TERMINAL & FEEDBACK */}
        <div className={`${rightOpen ? 'w-[30%] min-w-[300px]' : 'w-0'} flex flex-col gap-2 transition-all duration-300`}>
          
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
             <div className="h-9 bg-gray-50 border-b border-gray-200 flex items-center px-3 justify-between">
                <span className="text-xs font-bold text-gray-600 flex items-center gap-2"><Terminal size={14}/> Console</span>
                <button onClick={() => setRightOpen(!rightOpen)} className="text-gray-400 hover:text-gray-600"><ChevronRight size={16}/></button>
             </div>
             <div className="flex-1 bg-white p-0">
                <Output />
             </div>
          </div>

          {/* AI Feedback Box - Truyền kết quả thật vào đây */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
             <div className="h-9 bg-purple-50 border-b border-purple-100 flex items-center px-3 justify-between">
                <span className="text-xs font-bold text-purple-600 flex items-center gap-2">✨ AI Feedback</span>
             </div>
             <div className="flex-1 bg-white p-0 overflow-y-auto">
                {/* Truyền props analysis */}
                <AIFeedback analysis={aiResult} />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainLayout;