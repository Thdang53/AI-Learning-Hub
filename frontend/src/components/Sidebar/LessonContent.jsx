import React from 'react';

const LessonContent = () => {
  return (
    <div className="p-6 text-gray-300 font-sans">
      <h1 className="text-2xl font-bold text-white mb-2">Biến và Kiểu dữ liệu</h1>
      <div className="flex items-center gap-2 mb-6">
         <span className="bg-blue-900/30 text-blue-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-blue-800">Javascript Basic</span>
         <span className="text-xs text-gray-500 font-medium">Đọc trong 5 phút</span>
      </div>
      
      {/* Sử dụng prose-invert để tự động chuyển văn bản sang màu sáng */}
      <div className="prose prose-invert prose-sm max-w-none leading-relaxed text-gray-400">
        <p className="mb-4">
          Chào mừng bạn đến với bài học đầu tiên! Hôm nay chúng ta sẽ tìm hiểu cách lưu trữ thông tin trong máy tính thông qua khái niệm cơ bản nhất: <strong className="text-white">Biến (Variable)</strong>.
        </p>

        {/* Khối định nghĩa - Style Tối */}
        <div className="bg-[#1e293b] border-l-4 border-blue-500 p-4 rounded-r mb-6 shadow-sm">
          <h4 className="font-bold text-blue-400 text-xs uppercase mb-1">💡 Định nghĩa</h4>
          <p className="text-gray-300 text-sm m-0">
            Biến giống như một chiếc hộp có dán nhãn, dùng để chứa dữ liệu. Bạn có thể thay đổi vật trong hộp, nhưng nhãn (tên biến) thì giữ nguyên.
          </p>
        </div>

        <h3 className="text-lg font-bold text-white mt-6 mb-3">Cú pháp khai báo (ES6)</h3>
        <ul className="list-none space-y-3 pl-0 mb-6">
          <li className="flex items-start gap-3">
             <code className="bg-gray-800 text-red-400 px-1.5 py-0.5 rounded font-mono text-xs border border-gray-700 mt-0.5">let</code>
             <span className="text-gray-400 text-sm">Dùng cho biến có thể thay đổi giá trị (Ví dụ: Điểm số, Tuổi).</span>
          </li>
          <li className="flex items-start gap-3">
             <code className="bg-gray-800 text-red-400 px-1.5 py-0.5 rounded font-mono text-xs border border-gray-700 mt-0.5">const</code>
             <span className="text-gray-400 text-sm">Dùng cho hằng số không đổi (Ví dụ: Số PI, Tên miền web).</span>
          </li>
        </ul>

        {/* Code Snippet - Style Tối */}
        <div className="bg-[#0f172a] text-gray-300 p-4 rounded-lg font-mono text-xs mb-6 overflow-x-auto shadow-inner border border-gray-800">
           <div className="text-gray-500 italic">// Khai báo biến tên là 'age'</div>
           <div><span className="text-purple-400">let</span> <span className="text-yellow-400">age</span> = <span className="text-orange-400">25</span>;</div>
           <br/>
           <div className="text-gray-500 italic">// Khai báo hằng số PI</div>
           <div><span className="text-purple-400">const</span> <span className="text-yellow-400">PI</span> = <span className="text-orange-400">3.14</span>;</div>
        </div>
        
        <h3 className="text-lg font-bold text-white mt-6 mb-3">🎯 Nhiệm vụ của bạn:</h3>
        <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-5 shadow-sm">
           <ul className="space-y-4 text-gray-300">
             <li className="flex gap-3">
                <span className="bg-gray-800 text-gray-400 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0 border border-gray-700">1</span>
                <span className="text-sm">Khai báo biến <code className="text-red-400 bg-gray-900 px-1 rounded border border-gray-700">myName</code> chứa tên của bạn.</span>
             </li>
             <li className="flex gap-3">
                <span className="bg-gray-800 text-gray-400 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0 border border-gray-700">2</span>
                <span className="text-sm">Khai báo biến <code className="text-red-400 bg-gray-900 px-1 rounded border border-gray-700">score</code> giá trị là 100.</span>
             </li>
             <li className="flex gap-3">
                <span className="bg-gray-800 text-gray-400 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold shrink-0 border border-gray-700">3</span>
                <span className="text-sm">Dùng lệnh <code>console.log()</code> để in chúng ra màn hình.</span>
             </li>
           </ul>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-gray-800 text-center">
         <button className="text-blue-400 font-bold text-sm hover:text-blue-300 hover:underline">Xem bài tiếp theo →</button>
      </div>
    </div>
  );
};

export default LessonContent;