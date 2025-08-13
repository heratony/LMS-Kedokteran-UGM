"use client";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

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
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
