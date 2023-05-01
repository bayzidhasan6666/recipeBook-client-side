import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoUrlChange = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    // Validate email and password fields
    if (!email || !password) {
      toast.error('Please enter both email and password fields');
      return;
    }

    // Validate password length
    if (password.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }

    // Add code here to handle the registration process with name/email/password/photoUrl
    // ...

    toast.success('Registration successful!');
  };

  return (
    <div className='className="bg-gray-900 min-h-screen md:flex items-center justify-center px-4 sm:px-6 gap-5 lg:px-8"'>
      <h1>Registration Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="photoUrl">Photo URL:</label>
          <input
            id="photoUrl"
            name="photoUrl"
            type="text"
            value={photoUrl}
            onChange={handlePhotoUrlChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
