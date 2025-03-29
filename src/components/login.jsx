import React, { useState } from 'react';
import { supabase } from '../createClient';

function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Query the 'Users' table for matching username and password
    const { data:data, error } = await supabase
      .from('Users')
      .select('*')
      .eq('Username', loginUsername)
      .eq('Password', loginPassword)
      .single();

    if (error || !data) {
      console.error('Login failed:', error);
      alert('Login Failed: ' + (error ? error.message : 'Invalid credentials'));
    } else {
      console.log('Logged in user:', data);
      alert('Logged in Successfully!');
      setLoginUsername('');
      setLoginPassword('');
    }
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
