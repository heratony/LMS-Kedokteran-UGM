'use client';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { LoginForm } from './components/LoginForm';
import { IllustrationPlaceholder } from './components/IllustrationPlaceholder';
import { fakeLoginApi } from '@/services/authService'; 


const LoginPage = () => {
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string; rememberMe: boolean; loginType: string }) => {
    const res = await fakeLoginApi(data.email, data.password, data.loginType);

    if (res.success && res.token) {
      if (data.rememberMe) {
        localStorage.setItem('authToken', res.token);
      }
      router.push(data.loginType === 'admin' ? '/admin/dashboard' : '/dashboard');
    } else {
      alert('Email atau password salah.');
    }
  };

  const handleForgotPassword = () => router.push('/forgot-password');
  const handleCreateAccount = () => router.push('/dashboard/register');

  return (
    <>
      <Head>
        <title>Login - E-Learning Platform</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-300 to-green-400 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center justify-center space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 text-center">E-Learning</h1>
              <IllustrationPlaceholder className="w-80 h-96 lg:w-96 lg:h-[500px]" />
            </div>
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <LoginForm
                loginType={loginType}
                onLoginTypeChange={setLoginType}
                onLogin={handleLogin}
                onForgotPassword={handleForgotPassword}
                onCreateAccount={handleCreateAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
