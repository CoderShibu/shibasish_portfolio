import React, { useState } from 'react';
import Header from '@/components/Header';
import AdminDashboard from '@/components/AdminDashboard';
import { Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Only allow login with the specified credentials
    if (
      credentials.username === 'admin@123' &&
      credentials.password === '123'
    ) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid username or password.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="emergency-card p-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h2 className="text-2xl font-bold mb-2">Admin Access Required</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Secure login required to access emergency dashboard
              </p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
                <Button type="submit" className="w-full gradient-info text-white">
                  <Lock className="h-4 w-4 mr-2" />
                  Login to Dashboard
                </Button>
              </form>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Demo: Username <b>admin@123</b> & Password <b>123</b>
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Emergency Command Center</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Real-time incident monitoring and response coordination
          </p>
        </div>
        
        <AdminDashboard />
      </main>
    </div>
  );
};

export default Dashboard;
