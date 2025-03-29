import React from 'react';
import Signup from './components/signup';
import Login from './components/login';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-8">
      <Signup />
      <Login />
    </div>
  );
};

export default App;
