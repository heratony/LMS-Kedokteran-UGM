import { useState } from "react";
import { RadioGroup } from './RadioGroup'; 
import { RegisterForm} from './RegisterForm'; 

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = ''
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
        required={required}
      />
    </div>
  );
};

// Enhanced RegisterForm using reusable components
export const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegister,
  onLoginRedirect
}) => {
  const [fullName, setFullName] = useState('');
  const [profession, setProfession] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const professionOptions = [
    { value: 'dokter', label: 'Dokter' },
    { value: 'perawat', label: 'Perawat' }
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister({
      fullName,
      profession,
      gender,
      email,
      password,
      mobileNumber
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
          
          <FormInput
            id="fullName"
            label="Full Name"
            value={fullName}
            onChange={setFullName}
            placeholder="Enter your first name"
            required
          />
        </div>

        {/* Profession Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Pekerjaan</h4>
          <RadioGroup
            name="profession"
            options={professionOptions}
            value={profession}
            onChange={setProfession}
          />
        </div>

        {/* Gender Section */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">Jenis Kelamin</h4>
          <RadioGroup
            name="gender"
            options={genderOptions}
            value={gender}
            onChange={setGender}
          />
        </div>

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          required
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your Password"
          required
        />

        <FormInput
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={setMobileNumber}
          placeholder="Enter mobile number"
          required
        />

        {/* Register Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors focus:ring-4 focus:ring-purple-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};