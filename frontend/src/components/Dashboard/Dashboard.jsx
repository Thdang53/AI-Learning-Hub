import React from 'react';
import { LogOut, Play, BookOpen, Clock, Zap, Star, Layout, MapPin, Flame } from 'lucide-react';

const Dashboard = ({ user, onLogout, onStartCourse }) => {
  // Mock data: Lộ trình học (Study Map)
  const studyPath = [
    { id: 1, title: 'Nhập môn', status: 'completed' },
    { id: 2, title: 'Biến & Kiểu', status: 'current' },
    { id: 3, title: 'Hàm', status: 'locked' },
    { id: 4, title: 'Mảng', status: 'locked' },
    { id: 5, title: 'OOP', status: 'locked' },
  ];

  const courses = [
    { id: 1, title: 'Javascript Masterclass', level: 'Cơ bản', progress: 45, lessons: 12, xp: 150, image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80', color: 'from-yellow-400 to-orange-500' },
    { id: 2, title: 'ReactJS Chuyên sâu', level: 'Nâng cao', progress: 10, lessons: 25, xp: 300, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80', color: 'from-blue-400 to-indigo-500' },
    { id: 3, title: 'Node.js Backend', level: 'Trung bình', progress: 0, lessons: 18, xp: 200, image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=600&q=80', color: 'from-green-400 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-slate-800 overflow-y-auto pb-10">
      
      {/* --- HEADER --- */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-30 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20 text-white">
            <Layout size={22} />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">SmartCode<span className="text-blue-600">.ai</span></span>
        </div>

        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5">
              <div className="flex items-center gap-1 text-orange-500 font-bold text-sm">
                 <Flame size={16} fill="currentColor" /> 5 Ngày
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center gap-1 text-yellow-500 font-bold text-sm">
                 <Star size={16} fill="currentColor" /> 1,250 XP
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                 <div className="text-sm font-bold text-gray-700">{user?.name || "Hải Đăng"}</div>
                 <div className="text-xs text-gray-500">Sinh viên</div>
              </div>
              <div className="w-9 h-9 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-md"></div>
              <button onClick={onLogout} className="text-gray-400 hover:text-red-500 transition-colors p-1 bg-white rounded-full border border-gray-200 hover:border-red-200"><LogOut size={18} /></button>
           </div>
        </div>
      </nav>

      {/* --- BODY --- */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* 1. BẢN ĐỒ LỘ TRÌNH (Study Map) */}
        <div className="mb-10">
           <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2"><MapPin size={20} className="text-blue-600"/> Lộ trình hiện tại</h2>
           <div className="relative flex items-center justify-between bg-white p-8 rounded-2xl shadow-sm border border-gray-200 overflow-x-auto">
              <div className="absolute left-10 right-10 top-1/2 h-1 bg-gray-100 -z-0"></div>
              <div className="absolute left-10 right-10 top-1/2 h-1 bg-blue-500 -z-0 transition-all duration-1000" style={{width: '25%'}}></div>

              {studyPath.map((step) => (
                 <div key={step.id} className="relative z-10 flex flex-col items-center gap-3 min-w-[80px]">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 transition-all shadow-md ${
                       step.status === 'completed' ? 'bg-blue-500 border-blue-200 text-white' : 
                       step.status === 'current' ? 'bg-white border-blue-500 text-blue-500 scale-110 ring-4 ring-blue-500/10' : 
                       'bg-gray-50 border-gray-200 text-gray-300'
                    }`}>
                       {step.status === 'completed' ? '✔' : step.id}
                    </div>
                    <span className={`text-xs font-bold ${step.status === 'locked' ? 'text-gray-400' : 'text-gray-700'}`}>{step.title}</span>
                 </div>
              ))}
           </div>
        </div>

        {/* 2. DANH SÁCH KHÓA HỌC */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <BookOpen size={24} className="text-indigo-600"/> Khóa học của tôi
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} onClick={() => onStartCourse(course.id)} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full">
              <div className="h-40 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-90 z-10`}></div>
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay" />
                <div className="absolute bottom-3 left-3 z-20 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                   {course.level}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 mt-auto">
                   <span className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded border border-yellow-100 font-bold"><Zap size={12}/> {course.xp} XP</span>
                   <span className="flex items-center gap-1 bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100 font-bold"><Clock size={12}/> {course.lessons} bài</span>
                </div>

                <div className="space-y-1">
                   <div className="flex justify-between text-xs font-bold text-gray-500">
                      <span>Tiến độ</span>
                      <span className="text-blue-600">{course.progress}%</span>
                   </div>
                   <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;