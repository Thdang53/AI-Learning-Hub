import React from 'react';
import { LogOut, Play, Flame, Search, Bell, Layout, Calendar, ChevronRight, Map, Users, Settings, Home, MessageSquare, Code, Terminal, Cpu, Coffee } from 'lucide-react';

const Dashboard = ({ user, onLogout, onStartCourse }) => {
  
  // Dữ liệu 3 khóa học
  const courses = [
    { 
      id: 1, 
      title: 'Javascript - Nhập Môn Lập Trình', 
      desc: 'Ngôn ngữ linh hoạt nhất. Học tư duy logic cơ bản, biến, hàm và vòng lặp.',
      level: 'Cơ bản', 
      lessons: 12, 
      totalLessons: 40,
      progress: 45,
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80',
      techIcon: <Code size={16} className="text-yellow-400"/>,
      color: 'border-yellow-500/50'
    },
    { 
      id: 2, 
      title: 'Java & Lập Trình Hướng Đối Tượng', 
      desc: 'Học OOP bài bản (Class, Object, Kế thừa). Nền tảng cho các hệ thống lớn.',
      level: 'Trung bình', 
      lessons: 5, 
      totalLessons: 60,
      progress: 10,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      techIcon: <Coffee size={16} className="text-orange-400"/>,
      color: 'border-orange-500/50'
    },
    { 
      id: 3, 
      title: 'C++ & Cấu Trúc Dữ Liệu Giải Thuật', 
      desc: 'Đi sâu vào bộ nhớ, con trỏ và thuật toán. Ngôn ngữ tối ưu hiệu năng nhất.',
      level: 'Nâng cao', 
      lessons: 0, 
      totalLessons: 50,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80',
      techIcon: <Cpu size={16} className="text-blue-500"/>,
      color: 'border-blue-500/50'
    },
  ];

  const userName = user?.name || "Học viên";
  const weeklyActivity = [40, 70, 30, 85, 50, 20, 0];

  return (
    <div className="flex h-screen bg-[#0e0e0e] text-gray-200 font-sans overflow-hidden">
      
      {/* --- SIDEBAR TRÁI --- */}
      <aside className="w-72 bg-[#111] border-r border-gray-800/50 flex flex-col h-full shrink-0">
         <div className="p-8 pb-4">
            <div className="flex items-center gap-3">
                <div className="bg-purple-600 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(147,51,234,0.5)]">S</div>
                <span className="font-bold text-2xl tracking-tight text-white">SmartCode</span>
            </div>
         </div>

         {/* User Card */}
         <div className="px-6 mb-6">
            <div className="bg-[#1c1c1c] p-4 rounded-2xl border border-gray-800 flex items-center gap-3">
               <img src={`https://ui-avatars.com/api/?name=${userName}&background=9333ea&color=fff`} alt="User" className="w-10 h-10 rounded-full border border-gray-700" />
               <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-bold text-white truncate">{userName}</h4>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Online
                  </div>
               </div>
               <button onClick={onLogout} className="text-gray-500 hover:text-red-500 p-1.5 hover:bg-gray-800 rounded-lg transition-colors">
                  <LogOut size={18} />
               </button>
            </div>
         </div>

         {/* Menu Chính */}
         <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
            <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Menu</p>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-900/20 transition-all">
               <Home size={20} /> Dashboard
            </button>
            
            {/* --- NÚT CODE EDITOR MỚI --- */}
            <button 
               onClick={() => onStartCourse('editor')} 
               className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-[#1c1c1c] transition-all font-medium"
            >
               <Code size={20} className="text-blue-400" /> Code Editor
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-[#1c1c1c] transition-all font-medium">
               <Map size={20} /> Lộ trình học
            </button>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-[#1c1c1c] transition-all font-medium">
               <MessageSquare size={20} /> Chatbox AI
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-[#1c1c1c] transition-all font-medium">
               <Users size={20} /> Cộng đồng
            </button>
            
            <div className="pt-6 mt-6 border-t border-gray-800">
               <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Thống kê</p>
               <div className="px-4 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-300 text-sm font-bold">
                     <Flame size={18} className="text-orange-500 fill-orange-500" /> Streak
                  </div>
                  <span className="text-white font-bold">5 ngày</span>
               </div>
            </div>
         </nav>
      </aside>

      {/* --- NỘI DUNG CHÍNH (PHẢI) --- */}
      <main className="flex-1 h-full overflow-y-auto p-6 md:p-10 custom-scrollbar relative">
         
         {/* Top Bar */}
         <div className="flex justify-between items-center mb-8">
            <div>
               <h1 className="text-3xl font-bold text-white mb-1">Dashboard</h1>
               <p className="text-gray-400 text-sm">Chào mừng trở lại, sẵn sàng chinh phục code chưa?</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-[#1c1c1c] border border-gray-800 rounded-full px-4 py-2 flex items-center gap-2 w-64">
                  <Search size={16} className="text-gray-500" />
                  <input type="text" placeholder="Tìm bài học..." className="bg-transparent border-none outline-none text-sm text-white w-full" />
               </div>
               <button className="bg-[#1c1c1c] p-2 rounded-full border border-gray-800 text-gray-400 hover:text-white">
                  <Bell size={20} />
               </button>
            </div>
         </div>

         {/* HERO SECTION */}
         <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-10">
            {/* Banner */}
            <div className="xl:col-span-2 bg-gradient-to-r from-blue-900 to-cyan-900 border border-blue-800 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-500/30 px-3 py-1 rounded-full text-blue-200 text-xs font-bold mb-4">
                     <Terminal size={12} /> C++ & Java Supported
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">Tư duy Khoa học Máy tính</h2>
                  <p className="text-blue-200 mb-6 max-w-lg text-sm leading-relaxed">
                      Làm chủ các ngôn ngữ nền tảng C++ và Java. AI sẽ giúp bạn biên dịch và gỡ lỗi (debug) ngay lập tức.
                  </p>
                  <button onClick={() => onStartCourse(1)} className="w-fit bg-white text-blue-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition-all active:scale-95 flex items-center gap-2">
                    <Play size={18} fill="currentColor" /> Học ngay
                  </button>
                </div>
            </div>

            {/* Weekly Activity */}
            <div className="bg-[#1c1c1c] border border-gray-800 rounded-3xl p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4">
                   <Calendar size={18} className="text-gray-400"/>
                   <h3 className="font-bold text-gray-200 text-sm">Code tuần qua</h3>
                </div>
                <div className="flex justify-between items-end h-32 px-2 pb-2">
                  {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="relative w-2 bg-gray-800 rounded-full h-24 overflow-hidden">
                            <div className={`absolute bottom-0 left-0 w-full rounded-full transition-all duration-500 ${weeklyActivity[idx] > 0 ? 'bg-blue-500 group-hover:bg-blue-400' : 'bg-gray-800'}`} style={{ height: `${weeklyActivity[idx]}%` }}></div>
                        </div>
                        <span className={`text-[10px] font-bold ${idx === 3 ? 'text-white' : 'text-gray-600'}`}>{day}</span>
                      </div>
                  ))}
                </div>
            </div>
         </div>

         {/* DANH SÁCH 3 KHÓA HỌC */}
         <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layout size={20} className="text-blue-500"/> Khóa học nền tảng
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {courses.map(course => (
               <div key={course.id} onClick={() => onStartCourse(course.id)} className={`group bg-[#1c1c1c] rounded-2xl border ${course.color} border-opacity-30 hover:border-opacity-100 overflow-hidden transition-all cursor-pointer flex flex-col hover:-translate-y-1 hover:shadow-2xl`}>
                  
                  {/* Image & Badge */}
                  <div className="relative h-44 overflow-hidden">
                     <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                     
                     {/* Badge: Tích hợp Editor */}
                     <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/70 backdrop-blur border border-white/10 px-2.5 py-1 rounded-lg">
                        {course.techIcon}
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">AI Supported</span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                     <h3 className="text-base font-bold text-gray-100 mb-2 leading-snug group-hover:text-blue-400 transition-colors">
                        {course.title}
                     </h3>
                     <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">
                        {course.desc}
                     </p>

                     {/* Progress */}
                     <div className="mt-auto pt-4 border-t border-gray-800">
                        <div className="flex justify-between text-[10px] font-medium text-gray-500 mb-1.5">
                           <span>{course.level}</span>
                           <span>{course.progress}% xong</span>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                           <div className={`h-full rounded-full ${course.id === 1 ? 'bg-yellow-500' : course.id === 2 ? 'bg-orange-500' : 'bg-blue-500'}`} style={{width: `${course.progress}%`}}></div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </main>

    </div>
  );
};

export default Dashboard;