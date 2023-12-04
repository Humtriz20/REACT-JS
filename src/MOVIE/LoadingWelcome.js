import React, { useEffect, useState } from 'react';

const LoadingWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-16 w-16 mb-4"></div>
      <p className="text-xl font-semibold text-gray-800">Welcome! Loading...</p>
    </div>
  );
};

export default LoadingWelcome;
