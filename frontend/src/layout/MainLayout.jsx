import React, { useState } from 'react';
import CodeEditor from '../components/Editor/CodeEditor';
import LessonContent from '../components/Sidebar/LessonContent';
import AIChat from '../components/Sidebar/AIChat';
import Output from '../components/Terminal/Output';
import AIFeedback from '../components/Terminal/AIFeedback';
import { getAIAnalysis } from '../services/aiService'; 
import { Play, CheckCircle, BookOpen, MessageSquare, LayoutTemplate, Terminal } from 'lucide-react';

const MainLayout = () => { 
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('lesson'); 
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState("// Viết code của bạn tại đây...\nconsole.log('Hello World');");
  const [aiResult, setAiResult] = useState(null);

  const handleRunCode = async () => {
    setIsRunning(true);
    setAiResult(null); 
    try {
      const result = await getAIAnalysis(code, "Đề bài: Viết chương trình Javascript cơ bản.");
      setAiResult(result); 
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Chưa kết nối Backend! Hãy chạy 'node server.js'");
    } finally {
      setIsRunning(false); 
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-950 text-gray-300 overflow-hidden font-sans text-sm">
      
      {/* HEADER: Đã xóa nút Dashboard, đổi sang màu gray chuẩn */}
      <header className="h-14 bg-gray-900 border-b border-gray-700 flex items-center justify-between px-4 shadow-md z-30 shrink-0">
        
        {/* Bên trái: Tên bài học */}
        <div className="flex items-center gap-4">
          <div>
            <h1 className="font-bold text-gray-100 text-sm flex items-center gap-2">
              Bài 1: Giới thiệu Javascript
            </h1>
            <span className="text-[10px] text-gray-400 font-medium">Chương 1 • Nhập môn</span>
          </div>
        </div>

        {/* Bên phải: Chỉ còn 2 nút quan trọng (Chạy Code & Nộp Bài) */}
        <div className="flex items-center gap-3">
           <button 
              onClick={handleRunCode}
              disabled={isRunning}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-white transition-all shadow-lg active:scale-95 ${
                  isRunning ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/50'
              }`}
           >
             <Play size={16} fill={isRunning ? "none" : "currentColor"} className={isRunning ? "animate-spin" : ""} /> 
             {isRunning ? 'Đang chạy...' : 'Chạy Code'}
           </button>
           
           <button className="flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-gray-300 bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:text-white transition-all shadow-lg active:scale-95">
             Nộp bài <CheckCircle size={16} className="text-green-500"/>
           </button>
        </div>
      </header>

      {/* WORKSPACE BODY */}
      <div className="flex-1 flex overflow-hidden relative bg-gray-950">
        
        {/* CỘT TRÁI: Nội dung */}
        <div className={`${leftOpen ? 'w-[35%] min-w-[320px]' : 'w-0'} flex flex-col bg-gray-900 border-r border-gray-700 transition-all duration-300 relative z-20`}>
          {leftOpen && (
            <>
              {/* Tab Navigation */}
              <div className="flex p-2 gap-1 bg-gray-900 border-b border-gray-700">
                <button onClick={() => setActiveTab('lesson')} className={`flex-1 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'lesson' ? 'bg-gray-800 text-blue-400 shadow-md border border-gray-600' : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'}`}>
                  <BookOpen size={16} /> Bài học
                </button>
                <button onClick={() => setActiveTab('chat')} className={`flex-1 py-2 rounded-md text-xs font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'chat' ? 'bg-gray-800 text-purple-400 shadow-md border border-gray-600' : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'}`}>
                  <MessageSquare size={16} /> Trợ giảng AI
                </button>
              </div>
              <div className="flex-1 overflow-y-auto bg-gray-900 custom-scrollbar">
                {activeTab === 'lesson' ? <LessonContent /> : <AIChat />}
              </div>
            </>
          )}
        </div>

        {/* CỘT GIỮA: EDITOR */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e] relative min-w-0 z-10 border-r border-gray-700">
            <div className="h-10 bg-[#1e1e1e] border-b border-[#333] flex items-center justify-between px-3 select-none">
                 <div className="flex items-center gap-2 px-3 py-1 bg-[#1e1e1e] border-t-2 border-blue-500 text-gray-300 text-xs font-medium">
                    <span className="text-blue-400 font-bold">JS</span> main.js
                 </div>
                 <button onClick={() => setLeftOpen(!leftOpen)} className="text-gray-500 hover:text-white p-1 rounded hover:bg-white/10" title="Ẩn/Hiện Sidebar">
                    <LayoutTemplate size={16}/>
                 </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <CodeEditor onChange={(value) => setCode(value || "")} />
            </div>
        </div>

        {/* CỘT PHẢI: TERMINAL */}
        <div className={`${rightOpen ? 'w-[30%] min-w-[300px]' : 'w-0'} flex flex-col bg-gray-950 border-l border-gray-700 transition-all duration-300`}>
          
          {/* Console */}
          <div className="flex-1 flex flex-col border-b border-gray-700 overflow-hidden bg-black">
             <div className="h-10 bg-gray-900 border-b border-gray-700 flex items-center px-3 justify-between">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-wider"><Terminal size={14}/> Console Output</span>
                 <button onClick={() => setRightOpen(!rightOpen)} className="text-gray-500 hover:text-white p-1"><LayoutTemplate size={16}/></button>
             </div>
             <div className="flex-1 p-0">
                <Output />
             </div>
          </div>

          {/* AI Feedback */}
          <div className="flex-1 flex flex-col overflow-hidden bg-gray-900">
             <div className="h-10 bg-gray-900 border-b border-gray-700 flex items-center px-3 justify-between">
                <span className="text-xs font-bold text-purple-400 flex items-center gap-2 uppercase tracking-wider">✨ AI Analysis</span>
             </div>
             <div className="flex-1 p-0 overflow-y-auto custom-scrollbar">
                <AIFeedback analysis={aiResult} />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainLayout;