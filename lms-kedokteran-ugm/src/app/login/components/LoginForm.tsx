import { useState } from 'react';

interface LoginFormProps {
  loginType: 'user' | 'admin';
  onLoginTypeChange: (type: 'user' | 'admin') => void;
  onLogin: (data: { email: string; password: string; rememberMe: boolean; loginType: string }) => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  loginType,
  onLoginTypeChange,
  onLogin,
  onForgotPassword,
  onCreateAccount
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginType === 'admin') {
      onLogin({ email: username, password, rememberMe, loginType });
    } else {
      onLogin({ email, password, rememberMe, loginType });
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      {/* Login Type Toggle */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          type="button"
          onClick={() => onLoginTypeChange('user')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            loginType === 'user'
              ? 'bg-white text-black'
              : 'text-gray-600'
          }`}
        >
          Login as User
        </button>
        <button
          type="button"
          onClick={() => onLoginTypeChange('admin')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            loginType === 'admin'
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Login as Admin
        </button>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Masuk Sekarang!</h2>
        <p className="text-gray-600 mt-2 flex items-center justify-center">
          Hi, Welcome back
          <span className="ml-1 text-lg">👋</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email/Username Input */}
        <div>
          <label
            htmlFor={loginType === 'admin' ? 'username' : 'email'}
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            {loginType === 'admin' ? 'Username' : 'Email'}
          </label>
          <input
            type={loginType === 'admin' ? 'text' : 'email'}
            id={loginType === 'admin' ? 'username' : 'email'}
            value={loginType === 'admin' ? username : email}
            onChange={(e) =>
              loginType === 'admin'
                ? setUsername(e.target.value)
                : setEmail(e.target.value)
            }
            placeholder={loginType === 'admin' ? 'Enter your username' : 'Enter your email'}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-blue-200"
        >
          {loginType === 'admin' ? 'Login as Admin' : 'Login'}
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <span className="text-sm text-gray-600">
            Not registered yet?{' '}
            <button
              type="button"
              onClick={onCreateAccount}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Create an account
            </button>{' '}
            <button
              type="button"
              onClick={onCreateAccount}
              className="text-blue-600 hover:text-blue-500 font-medium underline"
            >
              SignUp
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};
