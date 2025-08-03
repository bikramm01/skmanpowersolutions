'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Delay popup by 1 second
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  const closePopup = () => {
    localStorage.setItem('cookieConsent', 'closed');
    setShow(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Dim and slightly blurred background */}
      <div className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"></div>

      {/* Cookie Popup */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center items-end px-4 pb-6">
        <div className="relative bg-white text-gray-900 p-6 w-full max-w-3xl rounded-xl shadow-lg">
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-lg font-semibold mb-2">This website uses cookies</h2>
          <p className="text-sm mb-4">
            We use cookies and similar tracking technology to enhance site functionality, measure usage,
            and personalize content and ads. You may accept recommended cookies or customize your settings.
            Change your preferences anytime from our Cookie Policy page.
          </p>

          <div className="flex justify-end space-x-4">
            <a
              href="/cookie-policy"
              className="text-sm underline text-blue-600 hover:text-blue-800"
            >
              Cookie Settings
            </a>
            <button
              onClick={acceptCookies}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded"
            >
              Accept All Cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
