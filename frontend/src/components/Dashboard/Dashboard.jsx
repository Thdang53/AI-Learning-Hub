import React from 'react';
import { Layout, LogOut, PlayCircle, BookOpen, Clock, Trophy } from 'lucide-react';

const Dashboard = ({ user, onLogout, onStartCourse }) => {
  // Mock data: Danh sách khóa học
  const courses = [
    { id: 1, title: 'Javascript Căn Bản', level: 'Beginner', progress: 20, lessons: 12, hours: 5, image: 'bg-yellow-600' },
    { id: 2, title: 'ReactJS Masterclass', level: 'Advanced', progress: 0, lessons: 25, hours: 10, image: 'bg-blue-600' },
    { id: 3, title: 'Node.js & Backend API', level: 'Intermediate', progress: 0, lessons: 18, hours: 8, image: 'bg-green-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navbar */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Layout size={20} className="text-white" />
          </div>
          <span className="font-bold text-lg">SmartCode Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-gray-200">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
          <button 
            onClick={onLogout}
            className="p-2 bg-gray-800 hover:bg-red-900/30 text-gray-400 hover:text-red-400 rounded-full transition-colors" title="Đăng xuất">
            <LogOut size={18} />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 md:p-10">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Chào mừng trở lại, {user.name.split(' ').pop()}! 👋</h1>
          <p className="text-gray-400">Bạn đã sẵn sàng tiếp tục hành trình chinh phục Code hôm nay chưa?</p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg"><BookOpen size={24} /></div>
              <div><div className="text-2xl font-bold">3</div><div className="text-xs text-gray-500">Khóa học đang tham gia</div></div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-purple-900/30 text-purple-400 rounded-lg"><Clock size={24} /></div>
              <div><div className="text-2xl font-bold">12.5h</div><div className="text-xs text-gray-500">Thời gian học tập</div></div>
            </div>
            <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl flex items-center gap-4">
              <div className="p-3 bg-yellow-900/30 text-yellow-400 rounded-lg"><Trophy size={24} /></div>
              <div><div className="text-2xl font-bold">150</div><div className="text-xs text-gray-500">Điểm kinh nghiệm (XP)</div></div>
            </div>
          </div>
        </div>

        {/* Course List */}
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-l-4 border-blue-500 pl-3">
          Khóa học của tôi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:shadow-xl hover:shadow-blue-900/10 transition-all group">
              <div className={`h-32 ${course.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/20">
                  {course.level}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">{course.title}</h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1"><BookOpen size={12}/> {course.lessons} bài</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {course.hours} giờ</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Tiến độ</span>
                    <span className="text-white font-bold">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>

                <button 
                  onClick={() => onStartCourse(course.id)}
                  className="w-full bg-gray-800 hover:bg-blue-600 hover:text-white text-gray-300 font-semibold py-2 rounded-lg border border-gray-700 hover:border-blue-500 transition-all flex items-center justify-center gap-2"
                >
                  {course.progress > 0 ? 'Tiếp tục học' : 'Bắt đầu học'} <PlayCircle size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;