import React, { useState } from 'react';
import axios from 'axios';

const EmailVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const sendOTP = () => {
    axios.post('http://localhost:3001/send-otp', { email })
      .then(response => {setMessage(response.data)
        setShowOtpInput(true);  
      })
      .catch(error => console.error(error));
  };

  const verifyOTP = () => {
    axios.post('http://localhost:3001/verify-otp', { email, otp })
      .then(response => {setMessage(response.data)
        setShowOtpInput(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={sendOTP}>Send OTP</button>
      <br />
      <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={verifyOTP}>Verify OTP</button>
      <br />
      <p>{message}</p>
    </div>
  );
};

export default EmailVerification;