import React from 'react'

export const LoginSucess = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-80 border border-theme-500 rounded">
      <div className="card-body">
        <p className="text-theme-100 text-2xl font-semibold mb-4">Verification Complete</p>
        <p className="text-theme-100">
          Your email has been successfully verified. You can now access the app.
        </p>
      </div>
    </div>
  </div>
  )
}
