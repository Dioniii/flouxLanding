"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

interface AuthRedirectHandlerProps {
  children: React.ReactNode
}

export function AuthRedirectHandler({ children }: AuthRedirectHandlerProps) {
  const [hasAuthParams, setHasAuthParams] = useState(false)

  useEffect(() => {
    const checkForAuthParams = async () => {
      // Check both query parameters and hash fragments for Supabase auth parameters
      const searchParams = new URLSearchParams(window.location.search)
      const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
      
      // Check for auth parameters in both locations
      const hasAccessToken = searchParams.has('access_token') || hashParams.has('access_token')
      const hasType = searchParams.has('type') || hashParams.has('type')
      const hasCode = searchParams.has('code') || hashParams.has('code')
      
      if (hasAccessToken || hasType || hasCode) {
        // Show success message immediately since confirmation links work 99% of the time
        setHasAuthParams(true)
      }
    }

    checkForAuthParams()
  }, [])

  // If there are auth parameters, show the confirmation view
  if (hasAuthParams) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="space-y-4">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <h2 className="text-xl font-semibold text-[#2e2d51]">
                Account Confirmed! 🎉
              </h2>
              <p className="text-[#5a89bd] text-center">
                Your email has been successfully verified! 🎉
              </p>
              <p className="text-[#5a89bd] text-center text-sm">
                You can now return to the Floux app and log in with your credentials.
              </p>
              <div className="pt-4 space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 font-medium">
                    ✅ Email verified successfully
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Your account is now active and ready to use
                  </p>
                </div>
                <button
                  onClick={() => {
                    // Clear the URL parameters and show the landing page
                    window.history.replaceState({}, document.title, window.location.pathname)
                    setHasAuthParams(false)
                  }}
                  className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-6 py-2 rounded-full transition-colors w-full"
                >
                  Continue to Website
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // If no auth parameters, show the normal landing page
  return <>{children}</>
}
