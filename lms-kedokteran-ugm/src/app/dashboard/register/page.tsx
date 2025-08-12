'use client';
import { useState } from 'react';
import Head from 'next/head';
import { RegisterForm } from './components/RegisterForm';
import { IllustrationPlaceholder } from '../login/components/IllustrationPlaceholder';

const RegisterPage = () => {
  const handleRegister = (data: {
    fullName: string;
    profession: string;
    gender: string;
    email: string;
    password: string;
    mobileNumber: string;
  }) => {
    console.log('Register attempt:', data);
    // Implement register logic here
  };

  const handleLoginRedirect = () => {
    console.log('Redirect to login');
    // Navigate to login page
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
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
                  Daftar Sekarang!
                </h1>
                <p className="text-gray-700 text-lg">
                  Belajar Bersama Kami
                </p>
              </div>
              
              <RegisterForm
                onRegister={handleRegister}
                onLoginRedirect={handleLoginRedirect}
              />
            </div>

            {/* Right Side - Illustration */}
            <div className="order-1 lg:order-2 flex flex-col items-center justify-center">
              {/* Login Button */}
              <div className="w-full flex justify-end mb-8">
                <button
                  onClick={handleLoginRedirect}
                  className="bg-white/90 hover:bg-white text-gray-800 font-medium py-2 px-6 rounded-lg shadow-md transition-colors"
                >
                  Login
                </button>
              </div>
              
              {/* Doctor Illustration Placeholder */}
              <IllustrationPlaceholder 
                title="Doctor Illustration"
                description="Placeholder"
                className="w-80 h-96 lg:w-96 lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;