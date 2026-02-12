import React from 'react';
import { BookOpen } from 'lucide-react';

const LessonContent = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2 mb-4 text-blue-400">
        <BookOpen size={20} />
        <h2 className="text-lg font-bold">Bài 1: Giới thiệu Javascript</h2>
      </div>
      
      <div className="prose prose-invert prose-sm max-w-none">
        <h3 className="text-white font-semibold mt-4">1. Biến (Variables)</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          Trong Javascript, chúng ta dùng <code>let</code>, <code>const</code>, hoặc <code>var</code> để khai báo biến.
        </p>
        
        <div className="bg-gray-800 p-3 rounded my-3 border-l-2 border-blue-500 font-mono text-xs">
          let x = 10;<br/>
          const PI = 3.14;
        </div>

        <h3 className="text-white font-semibold mt-4">📌 Yêu cầu bài tập:</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          <li>Khai báo một biến tên <code>message</code>.</li>
          <li>Gán giá trị "Hello World" cho nó.</li>
          <li>In ra màn hình bằng <code>console.log(message)</code>.</li>
        </ul>
      </div>
    </div>
  );
};

export default LessonContent;