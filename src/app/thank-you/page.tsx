'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://bloxdesignstudio.com';
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <h1>Thank You for Choosing BLOX</h1>
        <div className="message">
          <p>We appreciate you taking the time to share your project details with us.</p>
          <p>Our team of architects and designers will review your requirements and get back to you within 24 hours.</p>
        </div>
        <div className="redirect-message">
          <p>Redirecting you to our main website in a few seconds...</p>
        </div>
      </div>
    </div>
  );
} 