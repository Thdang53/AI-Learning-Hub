import React, { useState } from 'react';
import MainLayout from './layout/MainLayout';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // State quản lý xem đang ở màn hình nào: 'login' | 'dashboard' | 'workspace'
  const [currentView, setCurrentView] = useState('workspace');
  
  // State lưu thông tin user sau khi đăng nhập
  const [user, setUser] = useState(null);

  // Xử lý khi đăng nhập thành công
  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentView('dashboard'); // Chuyển sang Dashboard
  };

  // Xử lý khi đăng xuất
  const handleLogout = () => {
    setUser(null);
    setCurrentView('login');
  };

  // Xử lý khi chọn khóa học -> Vào màn hình code
  const handleStartCourse = (courseId) => {
    console.log("Starting course:", courseId);
    setCurrentView('workspace'); // Chuyển sang màn hình code (MainLayout)
  };

  return (
    <>
      {currentView === 'login' && <Login onLogin={handleLogin} />}
      
      {currentView === 'dashboard' && (
        <Dashboard 
          user={user} 
          onLogout={handleLogout} 
          onStartCourse={handleStartCourse} 
        />
      )}
      
      {currentView === 'workspace' && (
        // Bạn có thể truyền thêm nút "Back to Dashboard" vào MainLayout nếu muốn
        <div className="relative">
             <button 
                onClick={() => setCurrentView('dashboard')}
                className="absolute top-3 right-40 z-50 bg-gray-800 hover:bg-gray-700 text-xs text-gray-300 px-3 py-1.5 rounded border border-gray-600 transition-colors"
             >
               ← Quay lại Dashboard
             </button>
             <MainLayout />
        </div>
      )}
    </>
  );
}

export default App;