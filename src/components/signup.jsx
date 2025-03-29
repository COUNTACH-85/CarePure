import React, { useState } from 'react';
import { supabase } from '../createClient';

function Signup() {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const { data:data, error } = await supabase
      .from('Users')
      .insert([{ Username: signupUsername, Email: signupEmail, Password: signupPassword }]);

    if (error) {
      console.error('Error signing up:', error.message);
      alert('Sign Up Failed: ' + error.message);
    } else {
      console.log('User signed up:', data);
      alert('Sign Up Successful!');
      setSignupUsername('');
      setSignupEmail('');
      setSignupPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSignup} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={(e) => setSignupUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={signupEmail}
          onChange={(e) => setSignupEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={(e) => setSignupPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
