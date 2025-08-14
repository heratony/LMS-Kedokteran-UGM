"use client";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RegisterForm } from "./components/RegisterForm";

// Contoh service register (dummy API)
async function fakeRegisterApi(data: { fullName: string; profession: string; gender: string; email: string; password: string; mobileNumber: string }) {
  // Simulasi request API dengan delay
  return new Promise<{ success: boolean; message?: string }>((resolve) => {
    setTimeout(() => {
      if (data.email !== "used@example.com") {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: "Email sudah digunakan." });
      }
    }, 1000);
  });
}

const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (data: {
    fullName: string;
    profession: string;
    gender: string;
    email: string;
    password: string;
    mobileNumber: string;
  }) => {
    console.log("Register attempt:", data);

    const res = await fakeRegisterApi(data);

    if (res.success) {
      alert("Registrasi berhasil! Silakan login.");
      router.push("/login"); // Redirect ke login page
    } else {
      alert(res.message || "Terjadi kesalahan saat registrasi.");
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <>
      <Head>
        <title>Register - E-Learning Platform</title>
        <meta name="description" content="Register for E-Learning platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-200 to-yellow-400 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Registration Form */}
            <div className="order-2 lg:order-1">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Daftar Sekarang!</h1>
                <p className="text-gray-700 text-lg">Belajar Bersama Kami</p>
              </div>

              {/* Form dengan teks input hitam */}
              <div className="text-black">
                <RegisterForm onRegister={handleRegister} onLoginRedirect={handleLoginRedirect} />
              </div>
            </div>

            {/* Right Side - Gambar */}
            <div className="order-1 lg:order-2 flex justify-center mt-50">
              <Image
                src="/login/login.png"
                alt="Register Illustration"
                width={1000}
                height={1000}
                className="object-contain"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
