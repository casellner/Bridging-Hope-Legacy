import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    
    const url = 'https://192.168.99.84:4433/forgot-password'; //https://bridginghope.life/api/forgot-password
    
    try { 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error('Failed to send reset email');
      }

      alert('A password reset link has been sent to your email address.');
    } catch (error) {
      console.error('Error sending reset email:', error.message);
      alert('Failed to send reset email: ' + error.message);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handlePasswordReset}>Send Reset Link</button>
    </div>
  );
};

export default ForgotPassword;
