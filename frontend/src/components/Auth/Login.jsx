import React, { useState } from 'react';
import { Layout, User, Lock, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Giả lập gọi API đăng nhập mất 1 giây
    setTimeout(() => {
      setIsLoading(false);
      // Gọi hàm onLogin từ App.jsx để chuyển trang
      onLogin({ name: "Sinh viên SmartCode", email: email });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        
        {/* Header */}
        <div className="bg-gray-900/50 p-8 text-center border-b border-gray-700">
          <div className="inline-flex bg-blue-600 p-3 rounded-xl shadow-lg shadow-blue-900/50 mb-4">
            <Layout size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-1">SmartCode AI</h2>
          <p className="text-gray-400 text-sm">Hệ thống học lập trình thông minh</p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase">Email hoặc Tên đăng nhập</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="text" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="admin@smartcode.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1 uppercase">Mật khẩu</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 text-white text-sm rounded-lg pl-10 pr-4 py-2.5 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-6 shadow-lg shadow-blue-900/20"
            >
              {isLoading ? 'Đang xử lý...' : 'Đăng Nhập'}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className="text-center text-gray-500 text-xs mt-6">
            Chưa có tài khoản? <span className="text-blue-400 cursor-pointer hover:underline">Đăng ký ngay</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;