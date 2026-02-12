// File: src/components/Sidebar/LessonContent.jsx
import React, { useState } from 'react';
import { BookOpen, CheckCircle, Lock, PlayCircle } from 'lucide-react';

const LessonContent = () => {
  // Mock data: Danh sách bài học trong khóa
  const lessons = [
    { id: 1, title: 'Giới thiệu Javascript', status: 'completed' }, // Đã xong
    { id: 2, title: 'Biến & Kiểu dữ liệu', status: 'active' },      // Đang học
    { id: 3, title: 'Câu lệnh điều kiện (If-Else)', status: 'locked' },
    { id: 4, title: 'Vòng lặp (Loops)', status: 'locked' },
    { id: 5, title: 'Hàm (Functions)', status: 'locked' },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      {/* Tiêu đề khóa học */}
      <div className="p-4 border-b border-gray-800 bg-gray-800/50">
        <h2 className="text-lg font-bold flex items-center gap-2 text-blue-400">
          <BookOpen size={20} />
          Javascript Căn Bản
        </h2>
        <div className="mt-2 w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
           <div className="bg-blue-500 h-full w-[20%]"></div> {/* Progress bar: 20% */}
        </div>
        <p className="text-xs text-gray-400 mt-1">Hoàn thành 1/5 bài học</p>
      </div>

      {/* Nội dung bài học hiện tại */}
      <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
        <h3 className="text-xl font-bold text-white mb-3">Bài 2: Biến & Kiểu dữ liệu</h3>
        
        <div className="prose prose-invert prose-sm max-w-none text-gray-300">
          <p>
            Trong bài này, chúng ta sẽ học cách lưu trữ thông tin bằng <strong>Biến (Variables)</strong>.
          </p>
          
          <h4 className="text-white font-semibold mt-4">1. Khai báo biến</h4>
          <p>Sử dụng từ khóa <code>let</code> hoặc <code>const</code>:</p>
          <div className="bg-gray-800 p-3 rounded border-l-2 border-blue-500 font-mono text-xs my-2">
            let age = 20; <br/>
            const name = "SmartCode";
          </div>

          <h4 className="text-white font-semibold mt-4">🎯 Yêu cầu bài tập:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Khai báo biến <code>studentName</code> là tên của bạn.</li>
            <li>Khai báo biến <code>score</code> là điểm số (số nguyên).</li>
            <li>In ra màn hình: <code>"Sinh viên [Tên] đạt [Điểm] điểm"</code>.</li>
          </ul>
        </div>
      </div>

      {/* Danh sách bài học (Footer Navigation) */}
      <div className="border-t border-gray-800 bg-gray-900 p-2">
         <p className="text-xs font-bold text-gray-500 uppercase px-2 mb-2">Lộ trình học tập</p>
         <div className="space-y-1">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className={`flex items-center justify-between p-2 rounded cursor-pointer transition-colors ${
                  lesson.status === 'active' ? 'bg-blue-900/30 border border-blue-800' : 'hover:bg-gray-800'
                }`}
              >
                 <div className="flex items-center gap-2 overflow-hidden">
                    {lesson.status === 'completed' && <CheckCircle size={14} className="text-green-500 shrink-0" />}
                    {lesson.status === 'active' && <PlayCircle size={14} className="text-blue-400 shrink-0" />}
                    {lesson.status === 'locked' && <Lock size={14} className="text-gray-600 shrink-0" />}
                    
                    <span className={`text-xs truncate ${lesson.status === 'active' ? 'text-white font-medium' : 'text-gray-400'}`}>
                      {lesson.title}
                    </span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default LessonContent;