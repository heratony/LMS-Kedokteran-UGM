"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoginForm } from "./components/LoginForm";

import { fakeLoginApi } from "@/services/authService";

const LoginPage = () => {
  const [loginType, setLoginType] = useState<"user" | "admin">("user");
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string; rememberMe: boolean; loginType: string }) => {
    const res = await fakeLoginApi(data.email, data.password, data.loginType);

    if (res.success && res.token) {
      if (data.rememberMe) {
        localStorage.setItem("authToken", res.token);
      }
      router.push(data.loginType === "admin" ? "/admin/dashboard" : "/dashboard");
    } else {
      alert("Email atau password salah.");
    }
  };

  const handleForgotPassword = () => router.push("/forgot-password");
  const handleCreateAccount = () => router.push("/register");

  return (
    <>
      <Head>
        <title>Login - E-Learning Platform</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-300 via-yellow-200 to-green-400 flex items-center justify-center p-4">

        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Kiri: Judul + Gambar */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 ml-30 mb-6">E-Learning</h1>
              <Image
                src="/login/login.png"
                alt="Login Illustration"
                width={1000}
                height={1000}
                className="object-contain"
                priority
              />
            </div>

            {/* Kanan: Form Login */}
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
