"use client";

import { useEffect, useState } from "react";

export default function AutoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Open the popup as soon as the page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch("https://backend.meridianent.net/api/auth/download-mobile-app");
      if (!response.ok) throw new Error("Failed to fetch APK URL");

      const data = await response.json();
      const fileUrl = data.file_url;

      if (!fileUrl) {
        setShowBanner(true);
        setTimeout(() => setShowBanner(false), 3000);
        throw new Error("No file_url in API response");
      }

      window.open(fileUrl, "_blank");
    } catch (err) {
      console.error("Error downloading APK:", err);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 5000);
    }
  };

  return (
    <div className="w-screen lg:hidden flex-col items-center justify-center">
      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/95 z-50 -top-60">
          {/* Popup Box */}
          <div className=" bg-slate-200 rounded-2xl shadow-xl w-full p-5 relative animate-fadeIn mx-10 border border-blue-800">
            
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">
              ✕
            </button>

            {/* Download Button */}
            <div onClick={handleDownload} className="rounded-3xl flex justify-center cursor-pointer hover:scale-105 transition-transform">
              <img src="/pics/download-button.png" alt="Download APK"  className="w-64 h-auto object-contain" />
            </div>

            {/* Error Banner */}
            {showBanner && (
              <p className="text-center text-red-500 text-sm mb-3">
                Failed to fetch download link. Please try again later.
              </p>
            )}

            {/* Instructions */}
            <ul className="text-gray-600 text-sm list-disc px-4 space-y-1 text-center -mt-5">
              <span className="text-md font-medium">Download the <b>Official WIJDAN App</b> and <b>Install</b> now</span>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
